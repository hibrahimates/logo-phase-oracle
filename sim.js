/* Bir ile üç kübit. Tarayıcıda düz script. Dış kütüphane yok.
   Kübit 0, ket yazısının solundaki bittir. */
const QC = (function () {
  const SQRT2 = Math.SQRT1_2;
  function c(re, im) { return { re: re, im: im || 0 }; }
  function cadd(a, b) { return { re: a.re + b.re, im: a.im + b.im }; }
  function cmul(a, b) { return { re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re }; }
  function cscale(a, s) { return { re: a.re * s, im: a.im * s }; }
  function cabs2(a) { return a.re * a.re + a.im * a.im; }
  function bitOf(i, q, n) { return (i >> (n - 1 - q)) & 1; }
  function flipBit(i, q, n) { return i ^ (1 << (n - 1 - q)); }
  function label(i, n) {
    return i.toString(2).padStart(n, "0");
  }
  function zeros(n) {
    const s = [];
    for (let i = 0; i < (1 << n); i++) s.push(c(0));
    s[0] = c(1);
    return s;
  }
  function clone(s) { return s.map(a => c(a.re, a.im)); }
  const G = {
    I: [[c(1), c(0)], [c(0), c(1)]],
    X: [[c(0), c(1)], [c(1), c(0)]],
    Z: [[c(1), c(0)], [c(0), c(-1)]],
    H: [[c(SQRT2), c(SQRT2)], [c(SQRT2), c(-SQRT2)]],
    S: [[c(1), c(0)], [c(0), c(0, 1)]],
    T: [[c(1), c(0)], [c(0), c(Math.cos(Math.PI / 4), Math.sin(Math.PI / 4))]]
  };
  function apply1(state, n, q, M) {
    const out = state.map(() => c(0));
    const N = 1 << n;
    for (let i = 0; i < N; i++) {
      if (bitOf(i, q, n) !== 0) continue;
      const j = flipBit(i, q, n);
      out[i] = cadd(cmul(M[0][0], state[i]), cmul(M[0][1], state[j]));
      out[j] = cadd(cmul(M[1][0], state[i]), cmul(M[1][1], state[j]));
    }
    return out;
  }
  function applyCNOT(state, n, control, target) {
    const out = state.map(() => c(0));
    for (let i = 0; i < state.length; i++) {
      const j = bitOf(i, control, n) ? flipBit(i, target, n) : i;
      out[j] = cadd(out[j], state[i]);
    }
    return out;
  }
  function probs(state) { return state.map(cabs2); }
  function norm(state) { return probs(state).reduce((a, b) => a + b, 0); }
  function fmt(a) {
    const r = Math.round(a.re * 1000) / 1000;
    const m = Math.round(a.im * 1000) / 1000;
    if (Math.abs(m) < 0.0005) return String(r);
    const sign = m < 0 ? "−" : "+";
    return r + " " + sign + " " + Math.abs(m) + "i";
  }
  function run(n, steps, init) {
    let s = init ? clone(init) : zeros(n);
    steps.forEach(step => {
      if (step.op === "CNOT") s = applyCNOT(s, n, step.c, step.t);
      else s = apply1(s, n, step.q, G[step.op]);
    });
    return s;
  }
  function groverOnce(marked) {
    const n = 2;
    let s = zeros(n);
    s = apply1(s, n, 0, G.H);
    s = apply1(s, n, 1, G.H);
    s = s.map((a, i) => (i === marked ? cmul(a, c(-1)) : a));
    s = apply1(s, n, 0, G.H);
    s = apply1(s, n, 1, G.H);
    s = s.map((a, i) => (i === 0 ? a : cmul(a, c(-1))));
    s = apply1(s, n, 0, G.H);
    s = apply1(s, n, 1, G.H);
    return s;
  }
  function deutsch(kind) {
    let s = zeros(2);
    s = apply1(s, 2, 1, G.X);
    s = apply1(s, 2, 0, G.H);
    s = apply1(s, 2, 1, G.H);
    if (kind === "balanced") s = apply1(s, 2, 0, G.Z);
    if (kind === "const1") s = apply1(s, 2, 1, G.Z);
    s = apply1(s, 2, 0, G.H);
    return s;
  }
  function qubitProb(state, n, q, value) {
    let p = 0;
    probs(state).forEach((pr, i) => {
      if (bitOf(i, q, n) === value) p += pr;
    });
    return p;
  }
  function sampleShots(state, shots) {
    const p = probs(state);
    const counts = p.map(() => 0);
    for (let k = 0; k < shots; k++) {
      let r = Math.random();
      let pick = p.length - 1;
      for (let i = 0; i < p.length; i++) {
        r -= p[i];
        if (r <= 0) { pick = i; break; }
      }
      counts[pick] += 1;
    }
    return counts;
  }
  function period15() {
    const seq = [];
    let v = 1;
    for (let x = 0; x < 8; x++) {
      seq.push(v);
      v = (v * 7) % 15;
    }
    function gcd(a, b) {
      a = Math.abs(a); b = Math.abs(b);
      while (b) { const t = a % b; a = b; b = t; }
      return a;
    }
    const half = 2;
    return {
      seq: seq,
      period: 4,
      gcdMinus: gcd(Math.pow(7, half) - 1, 15),
      gcdPlus: gcd(Math.pow(7, half) + 1, 15)
    };
  }
  return {
    c: c, cadd: cadd, cmul: cmul, cscale: cscale, cabs2: cabs2,
    zeros: zeros, clone: clone, G: G, apply1: apply1, applyCNOT: applyCNOT,
    probs: probs, norm: norm, fmt: fmt, label: label, bitOf: bitOf,
    run: run, groverOnce: groverOnce, deutsch: deutsch,
    qubitProb: qubitProb, sampleShots: sampleShots, period15: period15
  };
})();

(function simSelfTest() {
  if (typeof process === "undefined" || !process.versions || !process.versions.node) return;
  const arg = process.argv[1] || "";
  if (arg.slice(-6) !== "sim.js") return;
  const near = (a, b) => Math.abs(a - b) < 1e-9;
  const h = QC.probs(QC.run(1, [{ op: "H", q: 0 }]));
  if (!near(h[0], 0.5) || !near(h[1], 0.5)) throw new Error("H");
  const bell = QC.probs(QC.run(2, [{ op: "H", q: 0 }, { op: "CNOT", c: 0, t: 1 }]));
  if (!near(bell[0], 0.5) || !near(bell[3], 0.5) || bell[1] > 1e-9) throw new Error("bell");
  const g = QC.probs(QC.groverOnce(2));
  if (!near(g[2], 1)) throw new Error("grover " + g.join(","));
  const bal = QC.deutsch("balanced");
  if (!near(QC.qubitProb(bal, 2, 0, 1), 1)) throw new Error("deutsch balanced");
  const cst = QC.deutsch("const0");
  if (!near(QC.qubitProb(cst, 2, 0, 0), 1)) throw new Error("deutsch const");
  const cst1 = QC.deutsch("const1");
  if (!near(QC.qubitProb(cst1, 2, 0, 0), 1)) throw new Error("deutsch const1");
  const per = QC.period15();
  if (per.seq.join(",") !== "1,7,4,13,1,7,4,13") throw new Error("period seq");
  if (per.gcdMinus !== 3 || per.gcdPlus !== 5) throw new Error("gcd");
  const tel = QC.run(3, [
    { op: "H", q: 0 }, { op: "H", q: 1 }, { op: "CNOT", c: 1, t: 2 },
    { op: "CNOT", c: 0, t: 1 }, { op: "H", q: 0 }
  ]);
  const tp = QC.probs(tel);
  tp.forEach(p => { if (!near(p, 0.125)) throw new Error("teleport prob"); });
  if (tel[6].re > 0 || tel[5].re > 0) throw new Error("teleport sign");
  const hzh = QC.probs(QC.run(1, [{ op: "H", q: 0 }, { op: "Z", q: 0 }, { op: "H", q: 0 }]));
  if (!near(hzh[1], 1)) throw new Error("HZH");
  console.log("sim ok");
})();
