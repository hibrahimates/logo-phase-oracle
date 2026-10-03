const COURSE = {
  "doneNote": "Yol bitti. Soldaki Eğitim notları, 64×64 logonun faz oracle’ını ve derinlik hesabını açar. Üniversite notları her dersin altında duruyor; sıradaki okuma oradan devam eder.",
  "modules": [
    {
      "title": "Zemin",
      "lessons": [
        {
          "id": "bit",
          "title": "Bit ve mantık kapısı",
          "kicker": "Ders 1 · MIT 8.370.1x",
          "meta": "Oku ve dene",
          "lead": "Kuantum hesabın ilk haftası, klasik bitten başlar. Isaac Chuang ve Peter Shor’un 8.370.1x dersi buna “klasik hesap ve tersinirlik” der. Ryan O’Donnell’in CMU notunun ilk dersi de aynı kapıdan girer: Boole devresi, sonra tersinir devre, sonra olasılık.",
          "blocks": [
            { "t": "p", "s": "Bir bit, 0 ya da 1’dir. Hesap, bu değerleri kapılardan geçirmektir. NOT tek biti çevirir. AND iki bitin ikisi de 1 ise 1 verir. OR en az biri 1 ise 1 verir." },
            { "t": "p", "s": "Aşağıdaki tahtada iki biti çevir. Üç kapının cevabı anında değişir. Aynı tablo, MIT’nin tersinir devre problem setinin klasik yarısıdır." },
            { "t": "lab", "kind": "bits" },
            { "t": "note", "s": "8.370.1x, Open Learning Library’de ücretsiz ve arşivdedir. İzlemek zorunda değilsin. Birim 1.2’yi bu tahtayla birlikte açman yeter." }
          ],
          "links": [
            { "label": "MIT 8.370.1x", "href": "https://openlearninglibrary.mit.edu/courses/course-v1:MITx+8.370.1x+1T2018/about" },
            { "label": "O’Donnell, ders 1", "href": "http://www.cs.cmu.edu/~odonnell/quantum15/lecture01.pdf" }
          ],
          "quiz": {
            "q": "AND kapısı hangi çiftte 1 verir?",
            "options": ["İki bit de 1 iken", "En az bir bit 1 iken", "İki bit de 0 iken"],
            "answer": 0,
            "why": "AND, ikisi de 1 ister. En az biri 1 ise o OR’dur."
          }
        },
        {
          "id": "reversible",
          "title": "Tersinir kapı",
          "kicker": "Ders 2 · Preskill bölüm 5.2",
          "meta": "Caltech Ph219",
          "lead": "Kuantum kapı tersinir olmak zorundadır. Preskill’in 2015 devre notu bunu Landauer ilkesiyle kurar: bilgiyi silmek ısı bırakır. AND iki biti tek bite indirir, siler, tersi yoktur.",
          "blocks": [
            { "t": "p", "s": "NOT tersinirdir. Aynı kapıyı ikinci kez uygularsan bit eski haline döner. Kontrollü NOT da tersinirdir: kontrol 1 ise hedefi çevirir; aynı kapı hedefi geri çevirir." },
            { "t": "f", "s": "CNOT |x⟩|y⟩ = |x⟩|y ⊕ x⟩" },
            { "t": "p", "s": "Toffoli, kontrollü kontrollü NOT’tur. İki kontrol de 1 ise hedefi çevirir. Preskill ve O’Donnell, AND’in tersinir halini bu kapıyla yazar: hedef 0’dan başlarsa sonuç, AND’in cevabıdır ve girişler yerinde kalır." },
            { "t": "ol", "items": [
              "Giriş |110⟩ olsun. İki kontrol 1, hedef 0.",
              "Toffoli hedefi çevirir: |111⟩.",
              "Hedefteki 1, AND(1,1) cevabıdır.",
              "Aynı Toffoli bir kez daha uygulanırsa |110⟩ geri gelir."
            ] },
            { "t": "p", "s": "Tahtada CNOT’u |10⟩ üzerine kur. Soldaki bit kontrol, sağdaki hedeftir. |11⟩ görürsün. CNOT’a bir kez daha basınca |10⟩ döner." },
            { "t": "lab", "kind": "circuit", "n": 2, "tape": [{ "op": "X", "q": 0 }], "editable": true }
          ],
          "links": [
            { "label": "Preskill, bölüm 5", "href": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf" },
            { "label": "Ph219 ders sayfası", "href": "https://www.preskill.caltech.edu/ph219/" }
          ],
          "quiz": {
            "q": "AND neden tek başına bir kuantum kapı olamaz?",
            "options": [
              "İki biti tek bite indirdiği için geri dönüşü yoktur",
              "Yalnızca 0 ürettiği için",
              "Faz kullandığı için"
            ],
            "answer": 0,
            "why": "Kuantum kapı tersinirdir. AND bilgi siler. Tersinir hali, girişleri saklayan Toffoli’dir."
          }
        },
        {
          "id": "vector",
          "title": "Durum bir birim vektördür",
          "kicker": "Ders 3 · MIT 18.435J ders 2",
          "meta": "Feldman notu · Shor",
          "lead": "Peter Shor’un 2003 güz dersinde Vitaly Feldman’ın tuttuğu not, hesabı dört postülayla kurar. Birincisi: kapalı bir sistemin durumu, sonlu boyutlu bir Hilbert uzayında uzunluğu 1 olan vektördür.",
          "blocks": [
            { "t": "p", "s": "Kübit, bu uzayın iki boyutlu halidir. İki özel vektör |0⟩ ve |1⟩ hesaplama bazıdır. Genel durum bunların katsayılı toplamıdır." },
            { "t": "f", "s": "|ψ⟩ = α|0⟩ + β|1⟩ ,   |α|² + |β|² = 1" },
            { "t": "p", "s": "α ve β karmaşık sayıdır. Ölçümde 0 görme olasılığı |α|², 1 görme olasılığı |β|²’dir. Tahta bu kuralı θ açısıyla kurar: |0⟩ katsayısı cos(θ/2), |1⟩ katsayısı sin(θ/2). θ = 0 iken durum |0⟩, θ = 180 iken |1⟩, θ = 90 iken olasılıklar yarı yarıyadır." },
            { "t": "lab", "kind": "bloch" },
            { "t": "p", "s": "Preskill’in bölüm 2’si aynı cümleyi durum ve topluluk diye uzatır. Vazirani’nin Berkeley CS 294 ders 1 notu da aksiyomları kübit üzerinden yazar. Numara ezberleme. Cümle şu: durum birim vektördür." }
          ],
          "links": [
            { "label": "Feldman, ders 2", "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec02/" },
            { "label": "18.435J ders listesi", "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/pages/lecture-notes/" },
            { "label": "Vazirani, CS294 ders 1", "href": "https://people.eecs.berkeley.edu/~vazirani/s07quantum/notes/lecture1.pdf" },
            { "label": "Preskill Ph219", "href": "https://www.preskill.caltech.edu/ph219/" }
          ],
          "quiz": {
            "q": "Feldman’ın notunda postüla 1 ne der?",
            "options": [
              "Durum, sonlu boyutlu Hilbert uzayında uzunluğu 1 olan bir vektördür",
              "Durum, 0 ile 1 arasında klasik bir olasılıktır",
              "Durum, ancak voltaj yazılırsa tanımlanır"
            ],
            "answer": 0,
            "why": "Olasılık, vektörün kendisi değildir. Olasılık, katsayının boyunun karesidir."
          }
        },
        {
          "id": "phase",
          "title": "Küresel faz ve göreli faz",
          "kicker": "Ders 4 · Feldman ve Cleve",
          "meta": "Aynı durum, ayrı durum",
          "lead": "Bir durumu her yerde aynı karmaşık sayıyla çarpmak yeni bir fiziksel durum vermez. İki katsayının arasındaki faz farkı ise ölçülebilir.",
          "blocks": [
            { "t": "p", "s": "Feldman, e üzeri iθ ile çarpmanın durumu değiştirdiğini yazmaz. Cleve’in Waterloo QIC 710 primer’inde de küresel faz ayrı bir başlıktır. |ψ⟩ ile e üzeri iθ |ψ⟩ aynı ölçüm istatistiğini verir." },
            { "t": "p", "s": "Göreli faz başka bir şeydir. |0⟩ + |1⟩ ile |0⟩ − |1⟩ aynı olasılıkları verir, ikisi de yarı yarıya. Z kapısı birini diğerine çevirir. Sonra gelen Hadamard bu farkı 0 ve 1 sonucuna taşır." },
            { "t": "f", "s": "H (|0⟩ − |1⟩) / √2  =  |1⟩" },
            { "t": "p", "s": "Tahtada φ kaydırıcısı göreli fazdır. Olasılık çubukları kıpırdamaz. Alttaki devre, fazın kapı sırasında nasıl ortaya çıktığını gösterir: önce H, sonra Z, sonra H. Sonuç |1⟩ olur." },
            { "t": "lab", "kind": "bloch" },
            { "t": "lab", "kind": "predict", "prompt": " |0⟩ üzerine H, sonra Z, sonra H. Ölçünce hangi baz durumu gelir?", "options": ["|0⟩", "|1⟩", "Yarı yarıya 0 ve 1"], "answer": 1, "n": 1, "tape": [{ "op": "H", "q": 0 }, { "op": "Z", "q": 0 }, { "op": "H", "q": 0 }], "why": "HZH, X kapısıdır. |0⟩, |1⟩ olur. Z’nin eksi işareti, ikinci H ile birlikte biti çevirir." }
          ],
          "links": [
            { "label": "Feldman, ders 2", "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec02/" },
            { "label": "Cleve, QIC 710 notları, 2025", "href": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F25/Qic710LectureNotes2025V6.pdf" }
          ],
          "quiz": {
            "q": "Hangi ikisi aynı fiziksel durumdur?",
            "options": [
              "|0⟩ ve e üzeri iθ |0⟩",
              "|0⟩ + |1⟩ ve |0⟩ − |1⟩",
              "|0⟩ ve |1⟩"
            ],
            "answer": 0,
            "why": "Küresel faz ölçümü değiştirmez. Göreli eksi işaret, HZH devresinde |1⟩ üretir."
          }
        }
      ]
    },
    {
      "title": "Kapı ve ölçüm",
      "lessons": [
        {
          "id": "gates",
          "title": "X, Z, H, S, T",
          "kicker": "Ders 5 · Liskov ders 4",
          "meta": "MIT 18.435J",
          "lead": "Moses Liskov’un ders 4 notu, klasik devreden kuantum kapıya köprüdür. Tek kübit kapı, iki boyutlu birim vektörü yine birim vektöre taşır. Bu taşıyan matrise üniter denir.",
          "blocks": [
            { "t": "p", "s": "X, |0⟩ ile |1⟩’i yer değiştirir. Klasik NOT’un kuantum halidir. Z, |1⟩’in önüne eksi koyar, |0⟩’a dokunmaz. H, |0⟩’ı (|0⟩+|1⟩)/√2 yapar ve (|0⟩−|1⟩)/√2 vektörünü |1⟩’e geri taşır." },
            { "t": "p", "s": "S, |1⟩’i i ile çarpar. T, |1⟩’i e üzeri iπ/4 ile çarpar. Preskill bölüm 5.4, H ve T gibi sonlu bir kümenin, CNOT ile birlikte, her üniteri yaklaştırabildiğini işler. O başlığın adı Solovay–Kitaev yaklaşımıdır. Yaklaşımın maliyeti o PDF’tedir." },
            { "t": "p", "s": "Tahta |0⟩ ile açılır. Kapı ekle, çubukları izle, geri al. H’den sonra uzunluk hâlâ 1’dir: iki olasılık 1/2 ve 1/2." },
            { "t": "lab", "kind": "circuit", "n": 1, "tape": [], "editable": true }
          ],
          "links": [
            { "label": "Liskov, ders 4", "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec04/" },
            { "label": "Preskill, bölüm 5.4", "href": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf" }
          ],
          "quiz": {
            "q": "H kapısı |0⟩’ı neye çevirir?",
            "options": [
              "(|0⟩ + |1⟩) / √2",
              "|1⟩",
              "Uzunluğu 2 olan bir vektör"
            ],
            "answer": 0,
            "why": "İki katsayı da 1/√2’dir. Olasılıklar 1/2 ve 1/2 olur. Uzunluk 1 kalır."
          }
        },
        {
          "id": "measure",
          "title": "Ölçüm",
          "kicker": "Ders 6 · Preskill bölüm 3",
          "meta": "8.370.1x ölçüm haftası",
          "lead": "Ölçüm, vektörü olasılığa çevirir. Preskill bölüm 3 bu kuralı ölçüm ve evrim diye ayırır. 8.370.1x’in üçüncü alt birimi çok kübitli ölçümü aynı kuralın üstüne koyar.",
          "blocks": [
            { "t": "p", "s": "Born kuralı: |α|² ve |β|². Tek atışta alet 0 ya da 1 yazar. Yüz atışta sayılar bu olasılıklara yaklaşır. Atıştan sonra durum, gördüğün baz vektörüdür. Buna çökme denir." },
            { "t": "p", "s": "Tahtada önce H uygula, sonra 200 kez ölç. Histogram yarıya yakın iki sütun verir. Her yeni ölçüm, o anki durumdan bağımsız bir atıştır; çubuklar atışlar biriktikçe düzleşir." },
            { "t": "lab", "kind": "circuit", "n": 1, "tape": [{ "op": "H", "q": 0 }], "editable": true, "shots": 200 },
            { "t": "p", "s": "Vazirani’nin C191 notu ölçümü kübitin ilk dersine koyar. Aynı kural: olasılık genliğin boyunun karesidir, genliğin kendisi değildir." }
          ],
          "links": [
            { "label": "Preskill Ph219, bölüm 3", "href": "https://www.preskill.caltech.edu/ph219/" },
            { "label": "8.370.1x", "href": "https://openlearninglibrary.mit.edu/courses/course-v1:MITx+8.370.1x+1T2018/about" },
            { "label": "Vazirani C191", "href": "https://people.eecs.berkeley.edu/~vazirani/cs191.html" }
          ],
          "quiz": {
            "q": "(|0⟩+|1⟩)/√2 bir kez ölçülünce ne olur?",
            "options": [
              "Alet 0 ya da 1 yazar; her birinin olasılığı 1/2’dir",
              "Alet aynı anda hem 0 hem 1 yazar",
              "Alet her zaman 0 yazar"
            ],
            "answer": 0,
            "why": "Süperpozisyon, tek atışta iki rakam birden görmek değildir. Tek atış bir rakamdır. Oran, çok atışta görünür."
          }
        }
      ]
    },
    {
      "title": "İki kübit",
      "lessons": [
        {
          "id": "bell",
          "title": "Tensör çarpımı, CNOT, Bell",
          "kicker": "Ders 7 · Cleve ve Vazirani",
          "meta": "Çarpım ve dolanıklık",
          "lead": "İki kübitin ortak uzayı, tek tek uzayların tensör çarpımıdır. Feldman bu cümleyi kendi notunda ikinci postüla diye yazar. Nielsen’in kitabı aynı fikri başka numarayla dizer. Numarayı o notun içinde kullan.",
          "blocks": [
            { "t": "p", "s": "Baz, soldan sağa |00⟩, |01⟩, |10⟩, |11⟩ diye sıralanır. Çarpım durumu, her kübiti ayrı hazırlayınca elde ettiğindir: |+⟩|0⟩ = (|00⟩+|10⟩)/√2. Dolanık durumda bu ayrım yoktur." },
            { "t": "f", "s": "|Φ+⟩ = (|00⟩ + |11⟩) / √2" },
            { "t": "p", "s": "Bu durumu H ve CNOT kurar. |00⟩ üzerine 0. kübite H, sonra kontrol 0 hedef 1 CNOT. Cleve’in primer’i CNOT’u ayrı bir bölümde işler. O’Donnell’in 2015 üçüncü dersi, dolanıklığın gücünü teleportasyon ve CHSH oyunuyla sürdürür." },
            { "t": "p", "s": "Tahta Bell devresiyle açılır. |01⟩ ve |10⟩ çubukları boş kalır. 200 ölçümde neredeyse yalnız 00 ve 11 birikir. İki bit her zaman aynıdır." },
            { "t": "lab", "kind": "circuit", "n": 2, "tape": [{ "op": "H", "q": 0 }, { "op": "CNOT", "c": 0, "t": 1 }], "editable": true, "shots": 200 }
          ],
          "links": [
            { "label": "Cleve primer, 2021", "href": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F21/Qic710Primer.pdf" },
            { "label": "Cleve notları, 2025", "href": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F25/Qic710LectureNotes2025V6.pdf" },
            { "label": "Vazirani CS294, 2007", "href": "https://people.eecs.berkeley.edu/~vazirani/quantum.html" },
            { "label": "O’Donnell 2015, ders listesi", "href": "https://www.cs.cmu.edu/~odonnell/quantum15/" }
          ],
          "quiz": {
            "q": "Bell durumu |Φ+⟩ ölçülünce hangi çiftler gelir?",
            "options": ["00 ve 11", "01 ve 10", "Dört sonuç da eşit"],
            "answer": 0,
            "why": "Genlik yalnız |00⟩ ve |11⟩ üzerindedir. Ölçüm bu iki sonucu, her biri 1/2 olasılıkla verir."
          }
        },
        {
          "id": "teleport",
          "title": "Kopyalanamaz ve teleportasyon",
          "kicker": "Ders 8 · 8.370.2x",
          "meta": "Bennett 1993 · Vazirani",
          "lead": "Bilinmeyen bir kübit kopyalanamaz. Cleve primer’inin 11. bölümü bu teoremi kurar. Bilinmeyen kübit yine de gönderilebilir: iki klasik bit ve önceden paylaşılmış bir Bell çifti yeter. Bu, Bennett, Brassard, Crépeau, Jozsa, Peres ve Wootters’ın 1993 protokolüdür. Chuang ve Shor onu 8.370.2x’in ilk protokolü yapar.",
          "blocks": [
            { "t": "p", "s": "Tahta, mesaj olarak |+⟩ taşır. Üç kübit: 0 mesaj, 1 ve 2 Bell çifti. Sıra şöyle: mesajı H ile hazırla, 1 ve 2’de Bell kur, mesajdan 1’e CNOT, mesaja H." },
            { "t": "ol", "items": [
              "Devre bitince sekiz baz durumunun olasılığı da 1/8’dir.",
              "Soldaki iki bit 00 ise sağdaki kübit |+⟩ durur.",
              "Soldaki iki bit 01 ise sağdaki yine |+⟩ durur.",
              "Soldaki iki bit 10 ise sağdaki |−⟩ durur. Z kapısı onu |+⟩ yapar.",
              "Soldaki iki bit 11 ise önce X, sonra Z gerekir. Kalan eksi işaret küresel fazdır."
            ] },
            { "t": "p", "s": "Kural: ikinci bit 1 ise Bob X uygular, ilk bit 1 ise Bob Z uygular. Mesaj Bob’a geçer, Alice’in elindeki kübitler ölçümle baz durumuna iner. Kopya oluşmaz. Çift harcanır." },
            { "t": "lab", "kind": "circuit", "n": 3, "tape": [{ "op": "H", "q": 0 }, { "op": "H", "q": 1 }, { "op": "CNOT", "c": 1, "t": 2 }, { "op": "CNOT", "c": 0, "t": 1 }, { "op": "H", "q": 0 }], "editable": false, "shots": 80 },
            { "t": "note", "s": "18.435J’nin 12. dersi süperyoğun kodlama ve teleportasyondur. O dersin scribe notu yoktur. Protokolü Vazirani’nin 24 Ocak 2007 dersinden ve Bennett’in makalesinden oku." }
          ],
          "links": [
            { "label": "8.370.2x", "href": "https://openlearninglibrary.mit.edu/courses/course-v1:MITx+8.370.2x+1T2018/about" },
            { "label": "Vazirani CS294 not listesi", "href": "https://people.eecs.berkeley.edu/~vazirani/quantum.html" },
            { "label": "Bennett ve arkadaşları, 1993", "href": "https://doi.org/10.1103/PhysRevLett.70.1895" },
            { "label": "Cleve 2025 notları", "href": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F25/Qic710LectureNotes2025V6.pdf" }
          ],
          "quiz": {
            "q": "Teleportasyon bilinmeyen kübiti nasıl gönderir?",
            "options": [
              "İki klasik bit ve harcanan bir Bell çiftiyle",
              "Kübiti ölçüp 0 veya 1 diye kopyalayarak",
              "Aynı kübiti iki yerde birden bırakarak"
            ],
            "answer": 0,
            "why": "Ölçüp klasik biti göndermek, kübitin fazını taşımadığı için yetmez. Bell çifti harcanır, kopya kalmaz."
          }
        }
      ]
    },
    {
      "title": "Algoritma",
      "lessons": [
        {
          "id": "deutsch",
          "title": "Deutsch ve söz problemi",
          "kicker": "Ders 9 · Harmon ders 5 · Aaronson ders 5",
          "meta": "MIT 18.435J ve 6.845",
          "lead": "Dion Harmon’ın 18 Eylül 2003 notu, ilk kuantum algoritmayı Deutsch–Jozsa diye koyar. Scott Aaronson’ın 6.845 beşinci dersi aynı algoritmayı karmaşıklık tarafından okur. İkisi de bir söz problemidir.",
          "blocks": [
            { "t": "p", "s": "Söz şu: fonksiyon ya sabittir ya dengelidir. Sabit, her girdide aynı cevabı verir. Dengeli, girdilerin yarısında 0, yarısında 1 verir. Klasik kontrol, emin olmak için fonksiyonu birden çok kez okuyabilir. Kuantum devre, tersinir hali süperpozisyonda bir kez sorgular." },
            { "t": "p", "s": "Tek bitlik Deutsch’ta devre şudur. Hedef |1⟩ ile başlar, iki kübite H gelir, hedef |−⟩ olur. Oracle, f(x) = 1 olan girdilere eksi yazar. Bu eksi, phase kickback ile kontrol kübitine geçer. Son H, sabitte |0⟩, dengelide |1⟩ bırakır." },
            { "t": "p", "s": "Tahtada iki sözü de çalıştır. Sabitte ilk kübitin 0 olasılığı 1’dir. Dengelide 1 olasılığı 1’dir. Sabit 1 ile sabit 0 aynı sütunu verir, çünkü hedefin üzerindeki Z küresel faz olur." },
            { "t": "lab", "kind": "deutsch" },
            { "t": "p", "s": "Deutsch–Jozsa, Grover araması değildir ve Shor’un çarpanlara ayırması değildir. 8.370.2x bu üçünü ayrı haftalara koyar." }
          ],
          "links": [
            { "label": "Harmon, ders 5", "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec05/" },
            { "label": "Aaronson 6.845 not listesi", "href": "https://ocw.mit.edu/courses/6-845-quantum-complexity-theory-fall-2010/pages/lecture-notes/" },
            { "label": "8.370.2x", "href": "https://openlearninglibrary.mit.edu/courses/course-v1:MITx+8.370.2x+1T2018/about" }
          ],
          "quiz": {
            "q": "Deutsch–Jozsa neyi ayırt eder?",
            "options": [
              "Söz verilen fonksiyonun sabit mi, dengeli mi olduğunu",
              "Bir sayının asal çarpanlarını",
              "Listede işaretli elemanın adresini"
            ],
            "answer": 0,
            "why": "Çarpanlar Shor’un işidir. Adres Grover’ın işidir. Buradaki söz, sabit ile dengeli arasındadır."
          }
        },
        {
          "id": "simon",
          "title": "Simon’un gizli dizisi",
          "kicker": "Ders 10 · Aaronson ders 6 · Cleve",
          "meta": "Shor’dan önceki söz",
          "lead": "Simon’un problemi, Deutsch–Jozsa ile Shor arasındaki basamaktır. Aaronson onu 6.845’in altıncı dersine, Cleve algoritma notuna, Chuang ve Shor da 8.370.2x’e koyar. 18.435J’de yedinci derstir ve o dersin scribe notu yoktur.",
          "blocks": [
            { "t": "p", "s": "Söz: gizli bir bit dizisi s vardır. f(x) = f(y) ancak ve ancak y = x ⊕ s. Yani fonksiyon, girdileri s kadar kaydırınca aynı cevabı verir." },
            { "t": "p", "s": "İki bitlik bir örnek. s = 01 olsun. f(00) = f(01) ve f(10) = f(11). Klasik tarafta s’yi görmek için birkaç çift okursun. Kuantum tarafta devre, f ile iç çarpımı 0 olan bir y dizisi üretir: y · s = 0. Böyle birkaç y, s’yi belirler." },
            { "t": "f", "s": "y · s = 0" },
            { "t": "p", "s": "Bu tahta üç kübitte Simon devresini koşturmaz. Fonksiyon iki bit girdiyi iki bit çıktıya götürünce dört kübit gerekir. Örnek, sözün kendisini elle tutman içindir. Devreyi Cleve’in 2023 algoritma notunda ve Aaronson’ın altıncı dersinde izle." },
            { "t": "note", "s": "Shor’un periyot bulması, bu gizli yapının sayıların çarpım grubundaki halidir. Sonraki ders o indirgemeyi 15 sayısı üzerinde kurar." }
          ],
          "links": [
            { "label": "6.845 ders notları", "href": "https://ocw.mit.edu/courses/6-845-quantum-complexity-theory-fall-2010/pages/lecture-notes/" },
            { "label": "Cleve, algoritmalar, 2023", "href": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F23/Qic710QuantumAlgorithms2023.pdf" },
            { "label": "8.370.2x", "href": "https://openlearninglibrary.mit.edu/courses/course-v1:MITx+8.370.2x+1T2018/about" }
          ],
          "quiz": {
            "q": "Simon’un sözünde f(x) ile f(x ⊕ s) nasıldır?",
            "options": ["Eşittir", "Her zaman farklıdır", "Yalnızca s = 0 iken tanımlıdır"],
            "answer": 0,
            "why": "Gizli dizi, fonksiyonu değiştirmeyen kaymadır. Algoritma s’yi, ona dik y dizilerinden kurar."
          }
        },
        {
          "id": "grover",
          "title": "Grover, N = 4",
          "kicker": "Ders 11 · Cheng ders 11 · O’Donnell",
          "meta": "İşaretle ve yansıt",
          "lead": "Grover, yapısız bir listede işaretli elemanı karekök N mertebesinde sorguda bulur. Kesin sayının içinde π/4 çarpanı vardır. 18.435J’de aramanın kendisi ders 10’dur ve scribe notu yoktur. Tutulan not ders 11’dir: Yuan-Chung Cheng, uygulamalar. O’Donnell 2015’te aramayı dördüncü derse koyar. Preskill bölüm 6 ve 2009 el yazması aynı yinelemeyi işler.",
          "blocks": [
            { "t": "p", "s": "Dört eleman, iki kübit. Bir eleman işaretli. Oracle o baz durumunu −1 ile çarpar. Bu, logodaki siyah pikselin yaptığı işaretin ta kendisidir. Sonra yayılma operatörü, ortalama genliğe göre yansıtır." },
            { "t": "p", "s": "N = 4 ve tek işaret için bir tur yetiyor. İşaretsiz genlikler 0’a iner, işaretli genlik 1 olur. Tahtada işaretli elemanı seç, bir tur uygula, çubuğu gör." },
            { "t": "lab", "kind": "grover" },
            { "t": "p", "s": "Cheng’in uygulaması kuantum sayımıdır: kaç işaret olduğunu, elemanları tek tek dökmeden kestirmek. İşaret yine eksi fazdır. Sayım, bu turu bir faz kestiriminin içine koyar." }
          ],
          "links": [
            { "label": "Cheng, ders 11", "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec11/" },
            { "label": "O’Donnell 2015", "href": "https://www.cs.cmu.edu/~odonnell/quantum15/" },
            { "label": "Preskill Ph219", "href": "https://www.preskill.caltech.edu/ph219/" },
            { "label": "Grover, 1996", "href": "https://arxiv.org/abs/quant-ph/9605043" }
          ],
          "quiz": {
            "q": "N = 4 ve tek işaretli eleman için bir Grover turu ne bırakır?",
            "options": [
              "İşaretli baz durumunda olasılık 1",
              "Dört sonuçta da olasılık 1/4",
              "İşaretli durumda olasılık 0"
            ],
            "answer": 0,
            "why": "Bu boyutta bir tur tam çözümdür. Daha büyük listede tur sayısı π/4 · √(N/M) mertebesindedir."
          }
        },
        {
          "id": "shor",
          "title": "Shor: periyot, sonra çarpan",
          "kicker": "Ders 12 · Aaronson ders 7",
          "meta": "15’i elle çarpanlara ayır",
          "lead": "Shor, çarpanlara ayırmayı periyot bulmaya indirger. Klasik kısım Miller’ın gözlemidir. Kuantum kısım, o periyodu kuantum Fourier dönüşümüyle okur. Aaronson bunu 6.845’in yedinci dersinde, O’Donnell 2015’te sekiz ve dokuzuncu derslerde, Cleve 2023 notunda, Chuang ve Shor da 8.370.2x’te işler. 18.435J’nin 8 ve 9. derslerinin scribe notu yoktur.",
          "blocks": [
            { "t": "p", "s": "Küçük örnek N = 15, taban a = 7. Dizi a üzeri x mod 15 şöyledir: 1, 7, 4, 13, sonra yine 1. Periyot r = 4. r çifttir. y = a üzeri (r/2) = 49. gcd(y − 1, 15) = 3 ve gcd(y + 1, 15) = 5. Çarpanlar bunlardır." },
            { "t": "p", "s": "Tahta bu aritmetiği yazar. Kuantum bilgisayar burada periyodu bulur. Çarpanları ayıran gcd klasiktir. Büyük N için periyodu klasik tarafta bu kadar ucuz okuyamayız. Algoritmanın iddiası, periyot adımının kuantum bilgisayarda polinom zamanda kurulmasıdır." },
            { "t": "lab", "kind": "period" },
            { "t": "p", "s": "QFT’nin kapı devresini bu üç kübitlik tahta taşımaz. Onu Aaronson ders 7’de, O’Donnell’in Zn üzerinde Fourier dersinde ve Cleve’in faz kestirimi bölümünde oku. İddianın yayını: SIAM Journal on Computing, 1997, arXiv quant-ph/9508027." }
          ],
          "links": [
            { "label": "6.845 ders notları", "href": "https://ocw.mit.edu/courses/6-845-quantum-complexity-theory-fall-2010/pages/lecture-notes/" },
            { "label": "O’Donnell 2015", "href": "https://www.cs.cmu.edu/~odonnell/quantum15/" },
            { "label": "Cleve, algoritmalar 2023", "href": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F23/Qic710QuantumAlgorithms2023.pdf" },
            { "label": "Shor, 1997", "href": "https://arxiv.org/abs/quant-ph/9508027" }
          ],
          "quiz": {
            "q": "7 üzeri x mod 15 dizisinin periyodu kaçtır?",
            "options": ["4", "2", "15"],
            "answer": 0,
            "why": "1, 7, 4, 13, 1. Dördüncü adımda 1’e döner. gcd adımı 3 ve 5’i verir."
          }
        }
      ]
    },
    {
      "title": "Bu projenin devresi",
      "lessons": [
        {
          "id": "universal",
          "title": "Evrensel küme, derinlik, CX",
          "kicker": "Ders 13 · Fellheimer ders 13 · Barenco",
          "meta": "Skorun iki sayısı",
          "lead": "Eric Fellheimer’ın 16 Ekim 2003 notu teoremi şöyle kurar: CNOT ve tek kübit kapılar, kuantum devre için evrenseldir. Barenco, Bennett, Cleve, DiVincenzo, Margolus, Shor, Sleator, Smolin ve Weinfurter bunu 1995’te Physical Review A 52, 3457’de yayımlar.",
          "blocks": [
            { "t": "p", "s": "Evrensel olmak, her üniterin bu parçalardan kurulabilmesi demektir. Sonlu küme H, T ve CNOT ise üniteri yaklaştırır. Preskill 5.4.4 o yaklaşımın adını koyar." },
            { "t": "p", "s": "Bu projenin skoru başka bir sorudur: aynı işareti daha kısa yazmak. Derinlik, kapıların kaç katman sürdüğüdür. CX, CNOT sayısıdır. All-to-all bağlantıda önce derinliğe, sonra CX sayısına bakılır. u3 tek kübit kapısı, cx ise CNOT’tur." },
            { "t": "p", "s": "Tahtadaki Bell devresinde iki kapı vardır, iki katmandır, bir CX vardır. Kapı ekledikçe katman ve CX değişir. Çok kontrollü X, kontrol sayısı arttıkça bu iki sayıyı şişirir. Ucuz oracle, siyah pikselleri tek tek Toffoli’ye dökmeden işaretlemektir." },
            { "t": "lab", "kind": "circuit", "n": 2, "tape": [{ "op": "H", "q": 0 }, { "op": "CNOT", "c": 0, "t": 1 }], "editable": true }
          ],
          "links": [
            { "label": "Fellheimer, ders 13", "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec13/" },
            { "label": "Barenco ve arkadaşları, 1995", "href": "https://arxiv.org/abs/quant-ph/9503016" },
            { "label": "Preskill bölüm 5", "href": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf" }
          ],
          "quiz": {
            "q": "Barenco ve arkadaşlarının 1995 sonucu neyi yeter sayar?",
            "options": [
              "Tek kübit üniterler ile CNOT",
              "Yalnız Hadamard",
              "Ölçümü, kapının yerine"
            ],
            "answer": 0,
            "why": "Tek kübit kapı artı CNOT, genel devreyi kurar. Yarışmadaki u3 ve cx bu ailenin içindedir."
          }
        },
        {
          "id": "logo",
          "title": "Logo bir faz oracle’ıdır",
          "kicker": "Ders 14 · Grover işareti, görsel hali",
          "meta": "64×64 · 1.097 siyah",
          "lead": "Classiq görevi, 64×64 ikili logoyu faz oracle yapmak ister. 1.097 siyah piksel vardır. İki koordinat 6’şar kübitte, little-endian durur. Oracle, siyah pikselin baz durumunu −1 ile çarpar. Ancilla iş bitince |0⟩’a döner. Koordinat kübitleri yerinde kalır.",
          "blocks": [
            { "t": "f", "s": "|x⟩|y⟩  →  (−1) üzeri logo(x,y)  |x⟩|y⟩" },
            { "t": "p", "s": "Şekil dört parçadır. A, 2 ≤ x ≤ 26 ve 29 ≤ y ≤ 53, 625 piksel. B, 26 ≤ x ≤ 49 ve 39 ≤ y ≤ 43, 120 piksel. C, (x−55)² + (y−41)² ≤ 42, 137 piksel. D, (x−40)² + (y−19)² ≤ 72, 225 piksel. Çakışma yalnız A∩B = 5 ve B∩C = 5. Toplam 625+120+137+225−10 = 1.097." },
            { "t": "p", "s": "Alttaki 4×4 tahta aynı kuralın oyuncağıdır. Siyah kare, o koordinatın baz durumuna eksi yazar. Gerçek devre 12 kübitlik işareti tarayıcıda koşturmaz. Derinlik ve CX hesabı Eğitim notları sayfasındadır." },
            { "t": "lab", "kind": "logo" }
          ],
          "links": [
            { "label": "Eğitim notları", "href": "notes.html" },
            { "label": "Cheng, Grover uygulamaları", "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec11/" }
          ],
          "quiz": {
            "q": "Logo oracle siyah bir piksele ne yapar?",
            "options": [
              "O baz durumunu −1 ile çarpar, koordinatı yerinde bırakır",
              "Pikseli |0⟩’dan siler",
              "Tüm durumu |1⟩ yapar"
            ],
            "answer": 0,
            "why": "Faz oracle değeri değiştirmez, işareti faza yazar. Ancilla sonda |0⟩ olmak zorundadır."
          }
        },
        {
          "id": "bitflip",
          "title": "Üç kübitlik bit tekrarı",
          "kicker": "Ders 15 · Lim ders 16 · 8.370.3x",
          "meta": "Hata düzeltmenin ilk basamağı",
          "lead": "Dah-Yoh Lim’in 30 Ekim 2003 notu, klasik tekrardan başlar: 0’ı 0000 diye, 1’i 1111 diye göndermek. Sonra bit hatası ile faz hatasını ayrı ayrı düzelten kodları birleştirir ve kuantum Hamming koduna geçer. 8.370.3x aynı çizgiyi gürültü, kuantum Hamming ve anahtar dağıtımı diye uzatır. Preskill’in bölüm 7’si, Mart 2026 sürümüyle, hata düzeltmenin tam notudur.",
          "blocks": [
            { "t": "p", "s": "İlk basamak üç kübitlik bit tekrarındır. |0⟩ yerine |000⟩, |1⟩ yerine |111⟩ yazılır. Bir kübit yanlışlıkla X yerse, üç bitten ikisi hâlâ doğru olanı söyler. Çoğunluk, hangi telin döndüğünü ele verir. Bu kod faz hatasını düzeltmez. Lim’in notu tam da bu yüzden iki kodu üst üste koyar." },
            { "t": "f", "s": "(|000⟩ + |111⟩) / √2" },
            { "t": "p", "s": "Tahta bu dolanık tekrarla açılır. Bir tele X bas. Genlik, bir biti farklı olan baz durumuna kayar. Hangi telin döndüğü, üç bitin hangisinin azınlıkta kaldığından okunur." },
            { "t": "lab", "kind": "bitflip" },
            { "t": "note", "s": "18.435J ders 23, Jonathan Hodges’ın hataya dayanıklı hesap notudur. Ders 20 ve 21’in CSS kodu notu listede yoktur. Eksik sayfayı uydurma. Dolu olanlar ders 16 ve ders 23’tür." }
          ],
          "links": [
            { "label": "Lim, ders 16", "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec16/" },
            { "label": "8.370.3x", "href": "https://openlearninglibrary.mit.edu/courses/course-v1:MITx+8.370.3x+1T2018/about" },
            { "label": "Preskill Ph219, bölüm 7", "href": "https://www.preskill.caltech.edu/ph219/" },
            { "label": "Fowler ve arkadaşları, yüzey kodu, 2012", "href": "https://arxiv.org/abs/1208.0928" }
          ],
          "quiz": {
            "q": "Üç kübitlik tekrar hangi hatayı çoğunlukla görür?",
            "options": [
              "Tek bir X, yani bit çevirmesi",
              "Her türlü faz hatasını",
              "Shor’un periyot hatasını"
            ],
            "answer": 0,
            "why": "Tekrar, bit değerini üçler. Faz hatası için Lim, Hadamard tarafındaki kodu ve sonra Hamming kodunu devreye alır."
          }
        },
        {
          "id": "bb84",
          "title": "BB84, elenmiş anahtar",
          "kicker": "Ders 16 · 8.370.3x",
          "meta": "Aynı baz kalır",
          "lead": "8.370.3x’in iletişim kısmı gürültülü kanaldan ve kuantum anahtar dağıtımından geçer. BB84’te Alice her bit için bir baz seçer, Bob kendi bazını seçer. Anahtara yalnız aynı bazın denk geldiği bitler girer.",
          "blocks": [
            { "t": "p", "s": "Z bazı |0⟩ ve |1⟩’dir. X bazı |+⟩ ve |−⟩’dir. Alice X’te hazırladıysa ve Bob Z’de ölçtüyse sonuç rastgele olur, o bit atılır. İkisi de Z seçtiyse Alice’in biti Bob’a geçer." },
            { "t": "p", "s": "Tahtada dört bitlik sabit bir tur var. Alice’in bitleri 1, 0, 1, 1. Bazlarını ve Bob’un bazlarını çevir. Aynı bazın kaldığı bitler anahtardır. Bazlar açıklanır, bitlerin kendisi açıklanmaz." },
            { "t": "lab", "kind": "bb84" },
            { "t": "p", "s": "Bu tur gürültüsüzdür. Gerçek protokol, tutmayan bir alt kümeyi feda ederek dinlemeyi arar. O istatistik 8.370.3x’in anahtar dağıtımı haftasındadır." }
          ],
          "links": [
            { "label": "8.370.3x", "href": "https://openlearninglibrary.mit.edu/courses/course-v1:MITx+8.370.3x+1T2018/about" },
            { "label": "Preskill Ph219", "href": "https://www.preskill.caltech.edu/ph219/" }
          ],
          "quiz": {
            "q": "BB84’te hangi bitler anahtara girer?",
            "options": [
              "Alice ile Bob’un aynı bazı seçtiği bitler",
              "Alice’in 1 yazdığı her bit",
              "Bob’un X bazında ölçtüğü her bit"
            ],
            "answer": 0,
            "why": "Bazlar farklıysa Bob’un ölçümü Alice’in bitini taşımaz. O tur elenir."
          }
        }
      ]
    },
    {
      "title": "Üniversite notları",
      "lessons": [
        {
          "id": "mit-map",
          "title": "MIT: üç ders, bir yol",
          "kicker": "Ders 17 · 18.435J, 8.370, 6.845",
          "meta": "Shor, Chuang, Aaronson",
          "lead": "MIT’de bu işin açık üç kapısı var. 18.435J, Shor’un 2003 güz lisansüstü dersidir, scribe notları kısmen durur. 8.370.1x–3x, Chuang ve Shor’un 2018 serisidir, Open Learning Library’de ücretsiz arşivdir. 6.845, Aaronson’ın 2010 karmaşıklık dersidir, 2008 scribe notları OCW’dedir.",
          "blocks": [
            { "t": "h", "s": "18.435J, notu olan dersler" },
            { "t": "ol", "items": [
              "Ders 2, Feldman. Durum birim vektördür. Küresel faz. Tensör çarpımı o notta ikinci postüladır.",
              "Ders 4, Liskov. Klasik model ve kuantum kapı.",
              "Ders 5, Harmon. Devre ve Deutsch–Jozsa.",
              "Ders 11, Cheng. Grover’ın uygulamaları ve kuantum sayım. Ders 10’un notu yoktur.",
              "Ders 13, Fellheimer. CNOT ve tek kübit kapıların evrenselliği.",
              "Ders 16, Lim. Hata düzeltme, tekrardan Hamming koduna.",
              "Ders 23, Hodges. Hataya dayanıklı hesap.",
              "Ders 8, 9, 10 ve 12’nin scribe notu yoktur. Çarpanlara ayırma, Grover’ın ilk geçişi ve teleportasyon orada adıyla durur, PDF yoktur."
            ] },
            { "t": "h", "s": "8.370 serisi" },
            { "t": "ol", "items": [
              "1x. Klasik tersinir hesap, kübit, tensör, ölçüm.",
              "2x. Teleportasyon, süperyoğun kodlama, Deutsch–Jozsa, Simon, Grover, Shor.",
              "3x. Gürültü, kuantum Hamming, anahtar dağıtımı."
            ] },
            { "t": "h", "s": "6.845, bu yoldan sonra" },
            { "t": "p", "s": "Ders 5 Deutsch–Jozsa, ders 6 Simon, ders 7 Shor ve gizli altgrup, ders 8 ve 9 Grover ve alt sınır. Notlar öğrenci tutanağıdır. Aaronson’ın ders izlencesi, notların dikkatle düzeltilmediğini ve hatalar barındırabileceğini söyler. İddiayı tahtada gördüğün hesapla karşılaştır." },
            { "t": "cards", "items": [
              { "h": "18.435J ders listesi", "s": "Hangi dersin PDF’si var, bu sayfa söyler.", "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/pages/lecture-notes/", "label": "Listeyi aç" },
              { "h": "8.370.2x", "s": "Protokoller ve algoritmalar. Bu portalın 8–12. derslerinin dersliği.", "href": "https://openlearninglibrary.mit.edu/courses/course-v1:MITx+8.370.2x+1T2018/about", "label": "Seriyi aç" },
              { "h": "6.845", "s": "BQP, sorgu karmaşıklığı, QMA. Algoritmayı öğrendikten sonra sınırını sorar.", "href": "https://ocw.mit.edu/courses/6-845-quantum-complexity-theory-fall-2010/pages/lecture-notes/", "label": "Notları aç" }
            ] }
          ],
          "links": [
            { "label": "OCW 8.370x sayfası", "href": "https://ocw.mit.edu/courses/8-370x-quantum-information-science-i-spring-2018/" }
          ],
          "quiz": {
            "q": "18.435J’de Grover uygulamalarının tutulmuş notu hangi derstir?",
            "options": ["Ders 11, Cheng", "Ders 10, notu tamdır", "Ders 2, postülaların içindedir"],
            "answer": 0,
            "why": "Ders 10 aramanın kendisidir ve scribe notu yoktur. Uygulamalar ders 11’dedir."
          }
        },
        {
          "id": "preskill-map",
          "title": "Caltech Ph219, bölüm bölüm",
          "kicker": "Ders 18 · Preskill",
          "meta": "1997’den 2026’ya",
          "lead": "John Preskill’in Physics 219 / CS 219 notları, bu konunun en uzun açık ders metnidir. Eski adı Physics 229’dur. Bölümler yıllar içinde ayrı ayrı yenilenmiştir. 2020 güz videoları bölüm 1–6’yı kapsar.",
          "blocks": [
            { "t": "ol", "items": [
              "Bölüm 1, 1997. Bilgi ve hesabın fizik olduğu cümlesi.",
              "Bölüm 2, Temmuz 2015. Durum ve topluluk. Kübit burada oturur.",
              "Bölüm 3, Temmuz 2015. Ölçüm ve evrim.",
              "Bölüm 4, 2001, eksik. Dolanıklık.",
              "Bölüm 5, Temmuz 2015. Klasik ve kuantum devreler. Tersinir hesap 5.2, evrensel kapılar 5.4, Solovay–Kitaev 5.4.4.",
              "Bölüm 6, Kasım 2020. Algoritmalar. Arama ve periyot.",
              "Bölüm 7, Mart 2026. Hata düzeltme. Bölüm 8’in dizilmiş hali, hataya dayanıklı hesap, sayfada yoktur.",
              "Bölüm 9, 2004. Topolojik hesap. Bölüm 10, Haziran 2025. Kuantum Shannon kuramı.",
              "El yazmaları: değişmeli gizli altgrup, arama, toric kod, küme durumları."
            ] },
            { "t": "p", "s": "Okuma sırası, bu portalın sırasıdır. Önce 2 ve 3, sonra 5, sonra 6, hata için 7. Shannon kuramı ve topolojik hesap, devreyi okuduktan sonraki yıldır. Eski birleşik PDF’lerde bölüm numaraları kaymıştır. Güncel numarayı ders sayfasından al." }
          ],
          "links": [
            { "label": "Ph219 ders sayfası", "href": "https://www.preskill.caltech.edu/ph219/" },
            { "label": "Bölüm 5 PDF", "href": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf" }
          ],
          "quiz": {
            "q": "Preskill’in Temmuz 2015 bölüm 5’i neyi işler?",
            "options": [
              "Klasik ve kuantum devreler, tersinir hesap, evrensel kapılar",
              "Yalnızca yüzey kodunun 2025 deneyini",
              "Logo piksellerinin koordinatlarını"
            ],
            "answer": 0,
            "why": "Bölüm 5 devre notudur. Hata düzeltme bölüm 7’dedir. 2025 deney ayrı bir makaledir."
          }
        },
        {
          "id": "other-schools",
          "title": "Berkeley, CMU, Waterloo",
          "kicker": "Ders 19 · Vazirani, O’Donnell, Cleve",
          "meta": "Aynı yol, üç kampüs",
          "lead": "Üç okul aynı iskeleti başka sırayla dizer. Hangisini açarsan aç, tahtada kurduğun kapıyı o notta ara.",
          "blocks": [
            { "t": "cards", "items": [
              { "h": "Berkeley, Vazirani", "s": "CS294-2, bahar 2007: aksiyom, Bell, kapı, teleportasyon, Simon, çarpanlara ayırma, Grover, faz kestirimi, hata düzeltme. C191 daha yavaş bir girişidir: kübit, spin, devre, Fourier.", "href": "https://people.eecs.berkeley.edu/~vazirani/quantum.html", "label": "CS294 notları" },
              { "h": "CMU, O’Donnell", "s": "15-859BB, 2015 scribe notları: ders 1 devre modeli, ders 3 dolanıklık, ders 4 Grover, ders 7–9 Fourier, periyot, Shor. 2018 sürümünde videolar ve 25 ders vardır. Ders 25, Preskill’in 2012’de adlandırdığı örnekleme iddiasını anlatır.", "href": "https://www.cs.cmu.edu/~odonnell/quantum15/", "label": "2015 notları" },
              { "h": "Waterloo, Cleve", "s": "QIC 710. 2025 notu üç parçadır: başlangıç, algoritma, bilgi kuramı. 2021 primer’i CNOT, süperyoğun kodlama, teleportasyon ve kopyalanamazlığı ayrı bölümler. 2023 algoritma notu Simon, periyot ve faz kestirimini taşır.", "href": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F25/Qic710LectureNotes2025V6.pdf", "label": "2025 notu" }
            ] },
            { "t": "p", "s": "C191’in kendi sayfası da Preskill’e ve Vazirani’nin diğer dersine bağlanır. Yol kapalı bir liste değildir. Yeni bir not açınca önce içindekiler tablosunda kübit, ölçüm, CNOT, Deutsch, Grover, periyot başlıklarını bul." }
          ],
          "links": [
            { "label": "Vazirani C191", "href": "https://people.eecs.berkeley.edu/~vazirani/cs191.html" },
            { "label": "O’Donnell 2018", "href": "https://www.cs.cmu.edu/~odonnell/quantum18/" },
            { "label": "Cleve, algoritmalar 2023", "href": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F23/Qic710QuantumAlgorithms2023.pdf" },
            { "label": "Cleve primer 2021", "href": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F21/Qic710Primer.pdf" }
          ],
          "quiz": {
            "q": "O’Donnell’in 2015 notunda Grover hangi dersdedir?",
            "options": ["Ders 4", "Ders 1, devre modelinin içinde", "Ders 25, örnekleme iddiasının içinde"],
            "answer": 0,
            "why": "Ders 1 devre modelidir. Grover ders 4’tür. 2018’in son dersi örnekleme iddiasıdır."
          }
        },
        {
          "id": "papers",
          "title": "Makale: iddia ve ölçülen sayı",
          "kicker": "Ders 20 · raftan deneye",
          "meta": "1993–2025",
          "lead": "Ders notu modeli kurar. Makale, modelin yayımlandığı yerdir. Her birinde üç şeyi ayır: tek cümlelik iddia, ölçülen sayı, o sayının kapsamı.",
          "blocks": [
            { "t": "cards", "items": [
              { "h": "Barenco ve arkadaşları, 1995", "s": "İddia: tek kübit üniter ile CNOT genel devreye yeter. PRA 52, 3457. Kapsam: gürültüsüz devre modeli.", "href": "https://arxiv.org/abs/quant-ph/9503016", "label": "quant-ph/9503016" },
              { "h": "Grover, 1996", "s": "İddia: yapısız N elemanda sorgu, N mertebesinden √N mertebesine iner. İçeride π/4 vardır. STOC 1996.", "href": "https://arxiv.org/abs/quant-ph/9605043", "label": "quant-ph/9605043" },
              { "h": "Shor, 1997", "s": "İddia: çarpanlara ayırma ve ayrık logaritma kuantum bilgisayarda polinom zamana iner. SIAM JoC.", "href": "https://arxiv.org/abs/quant-ph/9508027", "label": "quant-ph/9508027" },
              { "h": "Bennett ve arkadaşları, 1993", "s": "İddia: bilinmeyen kübit, iki klasik bit ve bir Bell çiftiyle gider. PRL 70, 1895. Kübit kopyalanmaz.", "href": "https://doi.org/10.1103/PhysRevLett.70.1895", "label": "PRL 70, 1895" },
              { "h": "Preskill, NISQ, 2018", "s": "İddia: onlarca ve yüzlerce kübitlik gürültülü aletler laboratuvar cihazıdır. Uzun hataya dayanıklı algoritma sonraki hedeftir. Quantum 2, 79.", "href": "https://arxiv.org/abs/1801.00862", "label": "arXiv 1801.00862" },
              { "h": "Fowler ve arkadaşları, 2012", "s": "Yüzey kodu: iki boyutlu ızgarada stabilizatör, mantıksal kübit, örgüyle CNOT. PRA 86, 032324.", "href": "https://arxiv.org/abs/1208.0928", "label": "arXiv 1208.0928" },
              { "h": "Arute ve arkadaşları, 2019", "s": "53 çalışan kübitte rastgele devre örneklemesi. Nature 574, 505–510. Makale, çarpanlara ayırmanın hataya dayanıklı mantıksal kübit istediğini söyler.", "href": "https://www.nature.com/articles/s41586-019-1666-5", "label": "Nature 2019" },
              { "h": "Kim ve arkadaşları, 2023", "s": "127 kübitlik gürültülü işlemcide, kaba kuvvet simülasyonu aşan devrelerin beklenti değeri. Nature 618. Hata düzeltilmiş mantıksal kübit değildir.", "href": "https://www.nature.com/articles/s41586-023-06096-3", "label": "Nature 2023" },
              { "h": "Google, 2023 ve 2025", "s": "Yüzey kodunda mesafe büyüyünce mantıksal hata düşer. Nature 614, 676–681. Willow’da mesafe 7 bellek 101 kübit kullanır, döngü başına %0,143 hata verir. Mesafe 2 artınca baskılama çarpanı Λ = 2,14’tür. Mantıksal bellek, en iyi fiziksel kübitten yaklaşık 2,4 kat uzun yaşar. Nature 638, 920–926.", "href": "https://arxiv.org/abs/2408.13687", "label": "arXiv 2408.13687" }
            ] },
            { "t": "note", "s": "Atıf sayısı her gün değişir. Burada yazılmadı. 1910.11333, Arute makalesinin ekidir, makalenin kendisi değildir." }
          ],
          "links": [
            { "label": "Google 2023, arXiv", "href": "https://arxiv.org/abs/2207.06431" }
          ],
          "quiz": {
            "q": "Google’ın 2025 Nature makalesi neyi ölçer?",
            "options": [
              "Yüzey kodunda mesafe artınca mantıksal hatanın düştüğünü",
              "15’in çarpanlarını Shor ile",
              "Logo oracle’ının derinliğini"
            ],
            "answer": 0,
            "why": "Willow mesafe 7, 101 kübit, döngü başına %0,143, Λ = 2,14. Bu bir çarpanlara ayırma deneyi değildir."
          }
        },
        {
          "id": "glossary",
          "title": "Sözlük kontrolü",
          "kicker": "Ders 21 · yolun sonu",
          "meta": "Terimi cümleye bağla",
          "lead": "Terim, ilk göründüğü dersteki tahtaya bağlıdır. Kartı oku, emin değilsen o derse dön. Geçiş sorusu, logoyu Grover’ın işaretine bağlar.",
          "blocks": [
            { "t": "cards", "items": [
              { "h": "Ket", "s": "Durum vektörünün parantezi. |0⟩ birim vektördür, sıfır vektörü değildir.", "label": "Ders 3" },
              { "h": "Genlik", "s": "Baz vektörünün önündeki karmaşık katsayı. Olasılık, genliğin boyunun karesidir.", "label": "Ders 3" },
              { "h": "Küresel faz", "s": "Tüm vektörü e üzeri iθ ile çarpmak. Ölçüm istatistiği aynı kalır.", "label": "Ders 4" },
              { "h": "Göreli faz", "s": "İki katsayının arasındaki faz. HZH devresinde |0⟩’ı |1⟩ yapar.", "label": "Ders 4" },
              { "h": "Üniter", "s": "Uzunluğu koruyan kapı. X, Z, H, S, T ve CNOT bu ailedendir.", "label": "Ders 5" },
              { "h": "Born kuralı", "s": "Ölçüm olasılığı |genlik|². Tek atış bir sonuçtur.", "label": "Ders 6" },
              { "h": "Tensör çarpımı", "s": "Birden fazla kübitin ortak uzayı. Feldman’ın notunda ikinci postüladır.", "label": "Ders 7" },
              { "h": "Dolanıklık", "s": "Çarpım durumu olmayan ortak durum. Bell çifti ölçümde aynı biti verir.", "label": "Ders 7" },
              { "h": "Phase kickback", "s": "Hedefteki eksi işaretin, kontrolün fazına yazılması. Deutsch bunu kullanır.", "label": "Ders 9" },
              { "h": "Faz oracle", "s": "Evet cevaplarını −1 ile çarpan işaret. Logo ve Grover aynı işareti kullanır.", "label": "Ders 14" },
              { "h": "Derinlik ve CX", "s": "Katman sayısı ve CNOT sayısı. Bu projenin skoru önce derinliğe bakar.", "label": "Ders 13" },
              { "h": "Ancilla", "s": "Ara hesap kübiti. İş bitince |0⟩’a döner. Dönmezse oracle bozuk sayılır.", "label": "Ders 14" },
              { "h": "BQP", "s": "Sınırlı hatayla, polinom zamanda, kuantum devrenin çözdüğü karar problemleri. Aaronson 6.845 bu sınıfın sınırını sorar.", "label": "Ders 17" },
              { "h": "NISQ", "s": "Gürültülü, orta ölçek. Preskill, 2018. Uzun Shor bu çağın vaadi değildir.", "label": "Ders 20" }
            ] }
          ],
          "links": [
            { "label": "Eğitim notları", "href": "notes.html" },
            { "label": "Nielsen video serisi, isteğe bağlı", "href": "https://www.youtube.com/playlist?list=PL1826E60FD05B44E4" }
          ],
          "quiz": {
            "q": "64×64 logodaki siyah piksel, Grover turunun neresine denk gelir?",
            "options": [
              "Oracle’ın −1 yazdığı baz durumuna",
              "Hadamard’ın yerine",
              "Ölçüm histogramının kendisine"
            ],
            "answer": 0,
            "why": "Grover’ın oracle’ı işaretli elemanı −1 ile çarpar. Logo, işaretli elemanları siyah pikseller olan bir oracle’dır."
          }
        }
      ]
    }
  ]
};

COURSE.kids = {
  bit: [
    "Bir **bit**, defterdeki bir kareye ya boş ya dolu yazmak gibi. Boş 0, dolu 1.",
    "**NOT** (değil kapısı) doluyu boşa, boşu doluya çevirir. **AND** (ve kapısı) ancak iki kare de doluysa dolu der. **OR** (veya kapısı) bir tanesi doluysa yeter."
  ],
  reversible: [
    "**Tersinir** demek, yaptığın işi geri alabilmek. Silgiyle sildiğin yazı geri gelmez. NOT ikinci kez basınca eski haline döner, o yüzden tersinirdir.",
    "**CNOT** (controlled NOT, kontrollü değil): soldaki bit 1 ise sağdakini çevirir. İkisi de 1 iken bir daha basarsan başa dönersin.",
    "**Toffoli**, iki kontrolü olan CNOT’tur. İki anahtar da açıkken hedefi çevirir. AND’in silmeden yapılmış hali budur: cevap hedefe yazılır, girişler yerinde kalır."
  ],
  vector: [
    "Bir **kübit** (qubit, kuantum biti) sihirli bir anahtar değil. Uzunluğu tam 1 olan bir oktur. Oka **ket** denir, şöyle yazılır: |0⟩.",
    "|0⟩ ve |1⟩ iki özel oktur. Genel durum ikisinin karışımıdır: biraz |0⟩, biraz |1⟩. Karışımın ağırlıklarına **genlik** denir. Ağırlıkların kareleri toplanınca 1 olur. O kare, ölçünce o sonucu görme şansındır.",
    "Tahtadaki θ açısı bu karışımı kaydırır. 0 derecede ok tamamen |0⟩, 180 derecede tamamen |1⟩, 90 derecede ikisi de yarı yarıya."
  ],
  phase: [
    "Bütün oku aynı sayıda çevirmek yeni bir ok vermez. Buna **küresel faz** denir. Fotoğrafın her yerine aynı filtreyi basmak gibi: sahne değişmez.",
    "**Göreli faz**, iki okun arasındaki farktır. |0⟩ + |1⟩ ile |0⟩ − |1⟩ aynı şansı verir, ikisi de yarı yarıya. Eksi işaret yine de ayrı bir durumdur. H, sonra Z, sonra H bunu |1⟩ diye ortaya çıkarır.",
    "φ kaydırıcısı o eksi işareti yavaş yavaş çevirir. Olasılık çubuğu kıpırdamaz. Değişen, işaretin kendisidir."
  ],
  gates: [
    "**X** klasik NOT’tur: |0⟩ ile |1⟩ yer değiştirir. **Z**, |1⟩’in önüne eksi koyar. **H** (Hadamard) |0⟩’ı yarı yarıya karışıma açar.",
    "**S** ve **T** daha ince çevirmelerdir. |1⟩’i küçük bir açıyla döndürürler. Kapının uzunluğu bozmamasına **üniter** denir: ok hâlâ 1 birimdir.",
    "Tahtaya kapı ekle, çubuklara bak, geri al. H’den sonra iki şans da 1/2’dir ve toplam yine 1’dir."
  ],
  measure: [
    "**Ölçüm**, okun üstündeki şansı tek bir yazıya çevirir. **Born kuralı** der ki şans, genliğin boyunun karesidir.",
    "Bir kez ölçünce alet ya 0 ya 1 yazar. Aynı anda ikisini birden yazmaz. Yüz kez ölçünce sayılar yarıya yaklaşır. Ölçtükten sonra ok, gördüğün tarafa yatar. Buna **çökme** denir.",
    "Önce H’ye bas, sonra 200 kez ölç. İki sütun birbirine yakın çıkar."
  ],
  bell: [
    "İki kübit yan yana durunca ortak defter açılır. Buna **tensör çarpımı** denir. Satırlar |00⟩, |01⟩, |10⟩, |11⟩ diye okunur. Soldaki rakam birinci kübit, sağdaki ikincidir.",
    "Her kübiti ayrı hazırlarsan **çarpım durumu** olur. Ayrı hazırlanamayan ortak dura **dolanıklık** denir.",
    "**Bell durumu** (|00⟩ + |11⟩) / √2 böyle bir duraktır. H ve CNOT ile kurulur. Ölçünce ya 00 ya 11 gelir. İki bit hep aynıdır."
  ],
  teleport: [
    "Bilinmeyen bir kübiti fotokopi gibi çoğaltamazsın. Buna **kopyalanamazlık** denir.",
    "**Teleportasyon** yine de göndermendir. Elinde önceden paylaşılmış bir Bell çifti vardır. Alice iki klasik bit söyler, Bob o iki bite göre X ya da Z basar, kübit ona geçer. Çift harcanır. İkinci bir kopya kalmaz.",
    "Tahta mesaj olarak |+⟩ taşır. Sekiz satırın şansı eşittir. Soldaki iki bit hangi düzeltmenin gerektiğini söyler."
  ],
  deutsch: [
    "**Söz problemi**, fonksiyonun sana verdiği sözdür. Burada söz şu: fonksiyon ya her yerde aynı cevabı verir (**sabit**), ya da yarısında 0 yarısında 1 verir (**dengeli**).",
    "Klasik tarafta emin olmak için fonksiyonu birkaç kez okursun. Kuantum tarafta bir kez, üst üste binmiş halde okursun. Hedefteki eksi işaret kontrolün fazına yazılır. Buna **phase kickback** (fazın geri tepmesi) denir.",
    "Tahtada sabiti seçince ilk kübit 0 olur. Dengeliyi seçince 1 olur."
  ],
  simon: [
    "Simon’un sözü bir gizli dizidir. Adı **s**. Fonksiyon, girdiyi s kadar kaydırınca aynı cevabı verir. Kaydırma **XOR** ile yazılır: x ⊕ s.",
    "Örnek: s = 01 ise f(00) ile f(01) aynıdır, f(10) ile f(11) aynıdır. Kuantum devre, s’ye dik bir y dizisi üretir. Birkaç y, s’yi ele verir.",
    "Bu tahta dört kübit istediği için devreyi koşturmaz. Sözü elle tutman yeter. Shor’un periyodu, aynı fikrin sayılar üzerindeki halidir."
  ],
  grover: [
    "Elinde karışık bir liste var. İçinde bir tane işaretli eleman var. Klasik arama teker teker bakar. **Grover** işaretliyi yaklaşık karekök kadar adımda büyütür.",
    "İşaret, o satırı −1 ile çarpmaktır. Logodaki siyah kare de aynısını yapar. Sonra **yayılma**, ortalama boya göre yansıtır. İşaretli satır uzar, diğerleri kısalır.",
    "Dört eleman ve tek işaret için bir tur yetiyor. Tahtada bir satır seç. O satırın şansı 1 olur."
  ],
  shor: [
    "**Shor**, büyük bir sayının çarpanlarını periyot bularak arar. **Periyot**, dizinin başa dönme adımıdır.",
    "15 ve taban 7 ile dene. Dizi 1, 7, 4, 13, sonra yine 1. Periyot 4. Ortadaki adımdan 3 ve 5 çıkar. Bunlar 15’in çarpanlarıdır.",
    "Kuantum bilgisayar periyodu okur. Çarpanı ayıran bölme işlemi klasiktir. O okumaya **QFT** (quantum Fourier transform, kuantum Fourier dönüşümü) denir. Üç kübitlik tahta o devreyi taşımaz. Aritmetik burada durur."
  ],
  universal: [
    "**Evrensel** demek, elindeki birkaç parça ile her devreyi kurabilmek. Tek kübit kapı artı CNOT yeter.",
    "Bu projenin notu başka bir soru sorar: aynı işi daha kısa yaz. **Derinlik**, merdivenin kaç basamak sürdüğüdür. **CX**, CNOT sayısıdır. Az basamak ve az CX, daha iyi not.",
    "Tahtadaki Bell devresinde bir H ve bir CX vardır. Kapı ekledikçe ikisi de değişir."
  ],
  logo: [
    "Elinde 64’e 64’lük bir kare defter var. Üstünde logonun **1.097 siyah karesi** boyalı.",
    "**Faz oracle** (phase oracle, faz kâhini) her kareye bakar. Siyahsa o karenin durumuna eksi koyar. Beyazsa dokunmaz. Koordinatları silmez.",
    "**Kübit** ile 6 tane yan yana 64 sayı yazarsın. Biri x, biri y. **Little-endian**, küçük dilimin solda durmasıdır. **Ancilla** kenardaki karalama kâğıdıdır. İş bitince boşaltman gerekir, yoksa ödev kabul edilmez.",
    "Alttaki 4×4 tahta aynı kuralın oyuncağıdır. Siyah kare, o koordinata eksi yazar."
  ],
  bitflip: [
    "Mesajı üç kez yan yana yazarsan, biri bozulsa diğer ikisi doğruyu söyler. Buna **tekrar** denir. |0⟩ yerine |000⟩, |1⟩ yerine |111⟩.",
    "Bir tele **X** basmak, o biti ters çevirmektir. Üç bitten biri farklı kalır. Çoğunluk, hangi telin döndüğünü söyler. Bu hâlâ bir **bit hatasıdır**. Eksi işaretin bozulması ayrı bir hatadır, bu üçlü onu düzeltmez.",
    "Tahta (|000⟩ + |111⟩) / √2 ile açılır. Bir tele X bas. Genlik, bir biti farklı olan satıra kayar."
  ],
  bb84: [
    "**BB84**, iki kişinin aynı gizli kelimeyi, başkası duymadan kurmasıdır. Alice her bit için bir **baz** seçer. Baz, cetvelin yönüdür: Z, |0⟩ ve |1⟩ cetveli; X, |+⟩ ve |−⟩ cetveli.",
    "Bob kendi cetvelini seçer. Cetveller aynıysa Alice’in biti ona geçer. Farklıysa sonuç yazı tura olur, o bit atılır. Kalan bitler **anahtardır**.",
    "Tahtada Alice’in bitleri sabittir: 1, 0, 1, 1. Bazları çevir. Aynı bazın kaldığı yerler anahtara girer."
  ],
  "mit-map": [
    "Üç kapı var, hepsi MIT’de. **18.435J**, Peter Shor’un 2003 defteri. Her dersin notu yok. Listede PDF’i olanı aç.",
    "**8.370**, Isaac Chuang ve Shor’un üç parçalık serisi. 1 temel, 2 protokol ve algoritma, 3 gürültü ve anahtar.",
    "**6.845**, Scott Aaronson’ın sınır dersi. Algoritmanın ne yaptığını öğrendikten sonra, neyi yapamayacağını sorar."
  ],
  "preskill-map": [
    "John Preskill’in Caltech defteri **Ph219**. Eski adı 229. Bölüm bölüm yazılmış, yıllar içinde yenilenmiş.",
    "Önce durum ve ölçüm (2 ve 3), sonra devre (5), sonra algoritma (6), hata için 7. Topoloji ve Shannon kuramı daha sonraki yıl.",
    "Eski PDF’lerde bölüm numarası kaymış olabilir. Güncel numarayı ders sayfasından al."
  ],
  "other-schools": [
    "Berkeley’de Vazirani, CMU’da O’Donnell, Waterloo’da Cleve aynı iskeleti başka sırayla dizer.",
    "Yeni bir not açınca içindekilerde şunları ara: kübit, ölçüm, CNOT, Deutsch, Grover, periyot. Tahtada kurduğun kapı orada da durur."
  ],
  papers: [
    "Ders notu modeli kurar. **Makale**, o modelin gazetedeki hali. Her birinde üç şeyi ayır: ne diyor, hangi sayıyı ölçmüş, o sayı nereye kadar geçer.",
    "Grover’ın sayısı sorgu sayısıdır. Shor’unki polinom zamandır. Willow’unki mantıksal hatanın düşmesidir. Üçü aynı iddia değildir."
  ],
  glossary: [
    "Karttaki kalın söz, bir dersin tahtasına bağlıdır. Takılırsan o derse dön.",
    "Logodaki siyah kare ile Grover’ın işareti aynı iştir: o satırı −1 ile çarpmak."
  ]
};
