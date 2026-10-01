const COURSE = {
  "doneNote": "İlk blok bitti. Sohbette “sıradaki bloğu aç” de. Genel tek kübit kapıları, Toffoli ve logonun devresi aynı sayfaya, yine İngilizce transkript ve Türkçesiyle eklenecek.",
  "modules": [
    {
      "title": "İlk blok · yaklaşık 3–4 saat",
      "lessons": [
        {
          "id": "qubit",
          "title": "Kübit",
          "kicker": "Ders 1 · 15 dk video",
          "meta": "15 dk · Nielsen",
          "video": "X2q1PuI2RFI",
          "lead": "Bir kübit, aynı anda hem 0 hem 1 olan sihirli bir anahtar değildir. İki boyutlu karmaşık uzayda uzunluğu 1 olan bir vektördür.",
          "note": "İngilizce sütun, YouTube’un otomatik altyazısından okunur paragraflara derlendi. “cubit / cuit / kat” gibi tanıma hataları qubit ve ket olarak düzeltildi. Formüller söylendiği gibi bırakıldı.",
          "links": [
            {
              "label": "Video: The qubit",
              "href": "https://www.youtube.com/watch?v=X2q1PuI2RFI"
            },
            {
              "label": "Seri",
              "href": "https://www.youtube.com/playlist?list=PL1826E60FD05B44E4"
            },
            {
              "label": "MIT 18.435J ders notları",
              "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/pages/lecture-notes/"
            },
            {
              "label": "Ders 2 · Basics of Quantum Mechanics",
              "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec02/"
            }
          ],
          "quiz": {
            "q": "Nielsen’e göre bir kübitin durumu nedir?",
            "options": [
              "Aynı anda hem 0 hem 1 olan klasik bir bit",
              "İki boyutlu karmaşık uzayda uzunluğu 1 olan bir vektör",
              "Vektör uzayının sıfır vektörü"
            ],
            "answer": 1,
            "why": "“Hem 0 hem 1” cümlesini Nielsen bilinçli olarak kullanmıyor. Durum bir birim vektördür. |0⟩ da sıfır vektörü değildir; uzunluğu 1’dir."
          },
          "cues": [
            {
              "t": 0.3,
              "en": "Welcome to Quantum Computing for the Determined.",
              "tr": "Quantum Computing for the Determined’a hoş geldin."
            },
            {
              "t": 9.9,
              "en": "I’m Michael Nielsen.",
              "tr": "Ben Michael Nielsen."
            },
            {
              "t": 13.9,
              "en": "You don’t need a background in quantum mechanics; the main prerequisite is determination.",
              "tr": "Kuantum mekaniği bilmene gerek yok; asıl şart sebat."
            },
            {
              "t": 31.6,
              "en": "The first videos build the abstract model of quantum computation.",
              "tr": "İlk videolar kuantum hesabın soyut modelini kuruyor."
            },
            {
              "t": 44.5,
              "en": "That model is the foundation for algorithms and for things like teleportation.",
              "tr": "Bu model, algoritmaların ve teleportasyon gibi işlerin temeli."
            },
            {
              "t": 60.1,
              "en": "The background you do need is linear algebra.",
              "tr": "İhtiyaç duyduğun zemin lineer cebir."
            },
            {
              "t": 69.0,
              "en": "Abstract quantum computation is a kind of applied linear algebra.",
              "tr": "Soyut kuantum hesaplama, bir tür uygulamalı lineer cebirdir."
            },
            {
              "t": 82.0,
              "en": "The same is true of quantum mechanics.",
              "tr": "Kuantum mekaniği de öyle."
            },
            {
              "t": 89.8,
              "en": "I’ll assume you are comfortable with vectors, matrices, multiplication, inversion, and a bit further: Hermitian matrices, unitary matrices, and similar ideas.",
              "tr": "Vektör, matris, çarpma, ters alma ve biraz ilerisi — Hermityen matris, üniter matris — sana tanıdık gelsin diye varsayıyor."
            },
            {
              "t": 122.1,
              "en": "If you don’t have that, the course is possible but hard; look things up as you go.",
              "tr": "Bu zemin yoksa ders imkânsız değil ama zor; yolda bakacaksın."
            },
            {
              "t": 138.9,
              "en": "For a refresher, Nielsen points at Khan Academy’s linear algebra lectures.",
              "tr": "Tazelemek için Nielsen, Khan Academy’nin lineer cebir derslerini gösteriyor."
            },
            {
              "t": 154.0,
              "en": "Some comfort with classical circuit theory also helps.",
              "tr": "Klasik devre teorisine biraz alışkın olmak da işe yarar."
            },
            {
              "t": 165.1,
              "en": "That means ordinary logic gates — AND, OR, NOT — and how they combine.",
              "tr": "Klasik kapılar: AND, OR, NOT ve bunların birleşimi."
            },
            {
              "t": 181.1,
              "en": "You don’t need to be an expert.",
              "tr": "Uzman olmana gerek yok."
            },
            {
              "t": 188.2,
              "en": "In this video the goal is the qubit, the quantum bit.",
              "tr": "Bu videonun hedefi qubit, yani kuantum bit."
            },
            {
              "t": 200.3,
              "en": "Classically, a bit is the unit of information: abstractly it is 0 or 1, and computations are manipulations of zeros and ones.",
              "tr": "Klasik bitte bilgi birimi 0 ya da 1’dir; hesap, sıfır ve birlerin işlenmesidir."
            },
            {
              "t": 228.8,
              "en": "Physically a bit might be a voltage, a magnetic domain, or light in a fiber.",
              "tr": "Fiziksel olarak bit bir gerilim, bir manyetik bölge ya da fiberdeki ışık olabilir."
            },
            {
              "t": 246.2,
              "en": "The qubit is the corresponding system in quantum mechanics.",
              "tr": "Kübit, kuantum mekaniğindeki karşılık gelen sistemdir."
            },
            {
              "t": 257.4,
              "en": "We start with an abstract mathematical description, the same way we treat an abstract bit.",
              "tr": "Tıpkı soyut bit gibi, soyut bir matematik tarifinden başlarız."
            },
            {
              "t": 274.4,
              "en": "Think of it as the simplest quantum system.",
              "tr": "Onu en basit kuantum sistem diye düşün."
            },
            {
              "t": 282.5,
              "en": "Early on we will not worry about hardware, but a qubit can be realized in atoms, photons, electrons, and more exotic systems.",
              "tr": "Başta donanımla uğraşmayız; ama kübit atomda, fotonda, elektronda ve daha egzotik sistemlerde gerçekleştirilebilir."
            },
            {
              "t": 306.2,
              "en": "For us it is the unit of quantum information: computations are manipulations of qubits and of their states.",
              "tr": "Bizim için o, kuantum bilgisinin birimidir: hesap, kübitlerin ve durumlarının işlenmesidir."
            },
            {
              "t": 326.4,
              "en": "A qubit has two special states, called 0 and 1. They are the analogues of the classical bit values.",
              "tr": "Bir kübitin 0 ve 1 denen iki özel durumu vardır. Klasik bit değerlerinin karşılığıdırlar."
            },
            {
              "t": 349.5,
              "en": "The bracket notation marks a quantum state; it is called ket notation.",
              "tr": "Parantez gösterimi bir kuantum durumunu işaretler; adına ket denir."
            },
            {
              "t": 365.8,
              "en": "Anything in that bracket, with any label, is a ket.",
              "tr": "O parantezin içine herhangi bir etiket koyarsan o bir kettir."
            },
            {
              "t": 377.7,
              "en": "These two states have a name that matters: the computational basis states.",
              "tr": "Bu iki durumun önemli bir adı var: hesaplama bazı durumları."
            },
            {
              "t": 394.9,
              "en": "They behave much like the classical states 0 and 1.",
              "tr": "Klasik 0 ve 1’e çok benzer davranırlar."
            },
            {
              "t": 406.8,
              "en": "A quantum state of a qubit is a vector in a two-dimensional complex vector space.",
              "tr": "Bir kübitin kuantum durumu, iki boyutlu karmaşık vektör uzayında bir vektördür."
            },
            {
              "t": 428.3,
              "en": "Those vectors turn out to be unit vectors.",
              "tr": "Bu vektörler birim vektör çıkar."
            },
            {
              "t": 439.4,
              "en": "A general state is a linear combination of |0⟩ and |1⟩.",
              "tr": "Genel durum, |0⟩ ve |1⟩’in lineer birleşimidir."
            },
            {
              "t": 453.9,
              "en": "In Nielsen’s sketch, α is about 0.6 to 0.8 along |0⟩ and β is the coefficient of |1⟩.",
              "tr": "Nielsen’in çiziminde α, |0⟩ boyunca kabaca 0,6–0,8; β ise |1⟩’in katsayısıdır."
            },
            {
              "t": 476.5,
              "en": "The coefficients may be complex, not just real.",
              "tr": "Katsayılar yalnız gerçel değil, karmaşık da olabilir."
            },
            {
              "t": 488.9,
              "en": "Why vectors, and why complex numbers, instead of just the labels 0 and 1? Nielsen does not fully justify it here.",
              "tr": "Neden sadece 0 ve 1 etiketleri değil de vektör, üstelik karmaşık sayılar? Nielsen bunu burada sonuna kadar gerekçelendirmiyor."
            },
            {
              "t": 508.1,
              "en": "Over the next videos the description lets us build a model of computation.",
              "tr": "Sonraki videolarda bu tarif bir hesap modeli kurmamıza izin verir."
            },
            {
              "t": 520.7,
              "en": "States near |0⟩ behave like 0, states near |1⟩ behave like 1 with a little 0 mixed in.",
              "tr": "|0⟩’a yakın durumlar 0 gibi, |1⟩’e yakın durumlar biraz 0 karışmış 1 gibi davranır."
            },
            {
              "t": 535.3,
              "en": "Quantum mechanics was built from about 1900 to 1925 and is not an obvious theory.",
              "tr": "Kuantum mekaniği kabaca 1900–1925 arasında kuruldu ve apaçık bir teori değil."
            },
            {
              "t": 549.1,
              "en": "The vector is mathematically simple.",
              "tr": "Vektör matematiksel olarak basit."
            },
            {
              "t": 555.2,
              "en": "Intuition comes from using the rules, especially once gates appear.",
              "tr": "Sezgi, kuralları kullanarak gelir; özellikle kapılar başlayınca."
            },
            {
              "t": 566.6,
              "en": "For now, accept the model.",
              "tr": "Şimdilik modeli kabul et."
            },
            {
              "t": 571.0,
              "en": "Two words.",
              "tr": "İki sözcük."
            },
            {
              "t": 573.3,
              "en": "A superposition is just a linear combination; physicists say “a superposition of |0⟩ and |1⟩” for α|0⟩ + β|1⟩.",
              "tr": "Süperpozisyon, lineer birleşimden ibarettir; fizikçi α|0⟩ + β|1⟩ için “|0⟩ ile |1⟩’in süperpozisyonu” der."
            },
            {
              "t": 594.5,
              "en": "An amplitude is the coefficient: α is the amplitude of |0⟩, β of |1⟩.",
              "tr": "Genlik, katsayıdır: α, |0⟩’ın genliği, β ise |1⟩’inkidir."
            },
            {
              "t": 607.8,
              "en": "The state cannot be an arbitrary vector.",
              "tr": "Durum rastgele bir vektör olamaz."
            },
            {
              "t": 615.5,
              "en": "The normalization constraint says the sum of the squares of the absolute values of the amplitudes is 1. If |0⟩ and |1⟩ are orthonormal, that is the statement that the state vector has length 1.",
              "tr": "Normalizasyon şartı: genliklerin mutlak değerlerinin kareleri toplamı 1’dir. |0⟩ ve |1⟩ ortonormal ise bu, durum vektörünün uzunluğunun 1 olduğu anlamına gelir."
            },
            {
              "t": 652.6,
              "en": "If you take one sentence from this video: the quantum state of a qubit is a vector of unit length in a two-dimensional complex vector space.",
              "tr": "Bu videodan tek cümle kalacaksa şu: bir kübitin kuantum durumu, iki boyutlu karmaşık uzayda uzunluğu 1 olan bir vektördür."
            },
            {
              "t": 684.2,
              "en": "One confusion: the computational basis state |0⟩ is not the zero vector of the vector space.",
              "tr": "Bir karışıklık: hesaplama bazı durumu |0⟩, vektör uzayının sıfır vektörü değildir."
            },
            {
              "t": 704.9,
              "en": "The zero vector sits at the origin and has length 0. |0⟩ has length 1. The shared word “zero” is an unfortunate overlap of notation.",
              "tr": "Sıfır vektörü orijindedir ve uzunluğu 0’dır. |0⟩’ın uzunluğu 1’dir. “Sıfır” sözcüğünün iki anlama gelmesi, talihsiz bir gösterim çakışmasıdır."
            },
            {
              "t": 734.7,
              "en": "What does the state mean?",
              "tr": "Durum ne anlama gelir?"
            },
            {
              "t": 739.8,
              "en": "Many people say the qubit is “simultaneously 0 and 1.” Nielsen says he does not understand what that explanation means: it presses a classical prejudice onto the quantum world.",
              "tr": "Birçok kişi kübit “aynı anda hem 0 hem 1” der. Nielsen bu açıklamanın ne demek istediğini anlamadığını söyler: klasik bir önyargıyı kuantum dünyaya yapıştırmaktır."
            },
            {
              "t": 775.8,
              "en": "The strategy of the course is to start from the mathematical description, look at its consequences, and build intuition that way.",
              "tr": "Dersin stratejisi matematik tarifinden başlamak, sonuçlarına bakmak ve sezgiyi öyle kurmaktır."
            },
            {
              "t": 802.1,
              "en": "The next video practices working with qubits and with ket notation.",
              "tr": "Sonraki video, kübitlerle ve ket gösterimiyle çalışmayı pratik eder."
            },
            {
              "t": 815.8,
              "en": "We will come back several times to how a quantum state should be interpreted.",
              "tr": "Bir kuantum durumunun nasıl yorumlanacağına birkaç kez döneceğiz."
            },
            {
              "t": 821.7,
              "en": "The habit to keep: when a sentence feels like a metaphor, write the vector instead.",
              "tr": "Alışkanlık şu olsun: bir cümle metafor gibi gelirse, onun yerine vektörü yaz."
            }
          ]
        },
        {
          "id": "kets",
          "title": "Ket bir vektördür",
          "kicker": "Ders 2 · 6 dk video",
          "meta": "6 dk · Nielsen",
          "video": "Jo-RZ27o3Uw",
          "lead": "Ket gösterimi yeni bir nesne icat etmez. α|0⟩ + β|1⟩, bileşenleri α ve β olan sütun vektörünün ta kendisidir.",
          "note": "Otomatik altyazı düzeltildi: ket, qubit. Kısa video; bitince NOT kapısına geç.",
          "links": [
            {
              "label": "Video: Tips for working with qubits",
              "href": "https://www.youtube.com/watch?v=Jo-RZ27o3Uw"
            }
          ],
          "quiz": {
            "q": "α|0⟩ + β|1⟩ hangi sütun vektörüdür?",
            "options": [
              "[α, β] üstte α, altta β",
              "[β, α]",
              "Sıfır vektörü"
            ],
            "answer": 0,
            "why": "Hesaplama bazında üst bileşen |0⟩’ın genliği, alt bileşen |1⟩’in genliğidir."
          },
          "cues": [
            {
              "t": 0.9,
              "en": "Last time we introduced the mathematical model of the qubit.",
              "tr": "Geçen videoda kübitin matematik modelini kurduk."
            },
            {
              "t": 12.4,
              "en": "This video practices quantum states and especially ket notation.",
              "tr": "Bu video kuantum durumlarını ve özellikle ket gösterimini çalıştırır."
            },
            {
              "t": 24.6,
              "en": "A state is a linear combination of the computational basis states |0⟩ and |1⟩.",
              "tr": "Bir durum, |0⟩ ve |1⟩ hesaplama bazı durumlarının lineer birleşimidir."
            },
            {
              "t": 39.5,
              "en": "That ket is exactly the column vector with components α and β.",
              "tr": "O ket, bileşenleri α ve β olan sütun vektörünün aynısıdır."
            },
            {
              "t": 51.4,
              "en": "If α is 0.6 and β is 0.8, those are the components.",
              "tr": "α 0,6 ve β 0,8 ise bileşenler bunlardır."
            },
            {
              "t": 61.1,
              "en": "We are working in the |0⟩, |1⟩ basis: the top entry is the amplitude of |0⟩, the bottom entry the amplitude of |1⟩.",
              "tr": "|0⟩, |1⟩ bazındayız: üst giriş |0⟩’ın genliği, alt giriş |1⟩’inkidir."
            },
            {
              "t": 83.1,
              "en": "You do not have to write every component every time.",
              "tr": "Her seferinde bütün bileşenleri yazmak zorunda değilsin."
            },
            {
              "t": 94.5,
              "en": "It is often convenient to give the ket a label, commonly |ψ⟩, and bundle the information there.",
              "tr": "Kete bir etiket vermek, genellikle |ψ⟩, ve bilgiyi orada toplamak kolaydır."
            },
            {
              "t": 115.4,
              "en": "The point while the notation is new: kets are vectors.",
              "tr": "Gösterim yeniyken asıl nokta: ketler vektördür."
            },
            {
              "t": 127.3,
              "en": "Nothing more.",
              "tr": "Başka bir şey değil."
            },
            {
              "t": 130.2,
              "en": "You can always translate ket notation into column vectors and back.",
              "tr": "Ket gösterimini her zaman sütun vektörüne ve geri çevirebilirsin."
            },
            {
              "t": 144.9,
              "en": "Physicists manipulate kets directly.",
              "tr": "Fizikçiler doğrudan ketle işlem yapar."
            },
            {
              "t": 152.8,
              "en": "At the start, if you feel unsure, do the translation.",
              "tr": "Başta emin değilsen çeviriyi yap."
            },
            {
              "t": 164.5,
              "en": "Because they are vectors, the usual rules apply.",
              "tr": "Vektör oldukları için bildiğin kurallar geçer."
            },
            {
              "t": 177.3,
              "en": "Multiplication by a scalar distributes over addition: 2(α|0⟩ + β|1⟩) = 2α|0⟩ + 2β|1⟩.",
              "tr": "Bir sayıyla çarpma, toplama üzerine dağılır: 2(α|0⟩ + β|1⟩) = 2α|0⟩ + 2β|1⟩."
            },
            {
              "t": 200.0,
              "en": "In column form that is 2 times the vector (α, β), which is (2α, 2β).",
              "tr": "Sütun biçiminde bu, (α, β) vektörünün 2 katıdır, yani (2α, 2β)."
            },
            {
              "t": 218.2,
              "en": "Nielsen’s arithmetic on the board is not the point.",
              "tr": "Nielsen’in tahtadaki aritmetiği mesele değil."
            },
            {
              "t": 231.8,
              "en": "The point is that the ordinary vector rules still hold.",
              "tr": "Mesele, sıradan vektör kurallarının hâlâ geçerli olması."
            },
            {
              "t": 246.5,
              "en": "Another check: the column vector (1, 0) is |0⟩, and it is also |0⟩ + 0|1⟩.",
              "tr": "Bir kontrol daha: (1, 0) sütun vektörü |0⟩’dır ve aynı zamanda |0⟩ + 0|1⟩’dir."
            },
            {
              "t": 271.3,
              "en": "Write both as columns and they match.",
              "tr": "İkisini de sütun yazarsan örtüşürler."
            },
            {
              "t": 283.7,
              "en": "If a line of kets confuses you, translate it into vector notation.",
              "tr": "Bir satır ket kafanı karıştırırsa onu vektör gösterimine çevir."
            },
            {
              "t": 305.9,
              "en": "The next video is the first quantum logic gate: the quantum NOT gate.",
              "tr": "Sonraki video ilk kuantum mantık kapısı: kuantum NOT kapısı."
            },
            {
              "t": 329.0,
              "en": "The NOT gate is simple and it turns out to matter a great deal in quantum computation.",
              "tr": "NOT kapısı basit görünür ve kuantum hesapta epey işe yarar."
            },
            {
              "t": 335.6,
              "en": "It is the starting gate.",
              "tr": "Başlangıç kapısı odur."
            }
          ]
        },
        {
          "id": "not",
          "title": "NOT kapısı, X",
          "kicker": "Ders 3 · 10 dk video",
          "meta": "10 dk · Nielsen",
          "video": "JDDSjsQLv80",
          "lead": "X, hesaplama bazında klasik NOT’tur: |0⟩ ile |1⟩ yer değiştirir. Süperpozisyonda da lineer davranır. İki X art arda, hiçbir şey yapmamaktır.",
          "note": "Devrede X bir kutu olarak çizilir. Matrisi [[0,1],[1,0]]. Yarışmadaki u3, bu kapıyı da içine alan genel tek kübit kapısıdır; onu sonraki blokta açacağız.",
          "links": [
            {
              "label": "Video: The quantum NOT gate",
              "href": "https://www.youtube.com/watch?v=JDDSjsQLv80"
            },
            {
              "label": "MIT ders 4 · Quantum Gates",
              "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec04/"
            }
          ],
          "quiz": {
            "q": "Aynı kübite art arda iki X uygulanırsa sonuç nedir?",
            "options": [
              "Hadamard",
              "Özdeşlik: girdi aynen çıkar",
              "Kübit ölçülür"
            ],
            "answer": 1,
            "why": "X X = I. Nielsen bunu hem durum üzerinde hem matris çarpımıyla gösterir. İkinci X, birinci X’in yaptığını geri alır."
          },
          "cues": [
            {
              "t": 0.8,
              "en": "We can describe a qubit.",
              "tr": "Kübiti tarif edebiliyoruz."
            },
            {
              "t": 6.2,
              "en": "Now we change it.",
              "tr": "Şimdi onu değiştiriyoruz."
            },
            {
              "t": 10.1,
              "en": "A quantum logic gate manipulates the state of one qubit or of several.",
              "tr": "Bir kuantum mantık kapısı, bir kübitin ya da birkaçının durumunu işler."
            },
            {
              "t": 25.9,
              "en": "Gates are the building blocks of quantum computation and of tasks such as teleportation.",
              "tr": "Kapılar, kuantum hesabın ve teleportasyon gibi işlerin yapı taşlarıdır."
            },
            {
              "t": 45.7,
              "en": "The first example is the quantum NOT, a single-qubit gate.",
              "tr": "İlk örnek kuantum NOT, tek kübitlik bir kapı."
            },
            {
              "t": 58.8,
              "en": "On the computational basis it does what the classical NOT does: |0⟩ goes to |1⟩ and |1⟩ goes to |0⟩.",
              "tr": "Hesaplama bazında klasik NOT’un yaptığını yapar: |0⟩ gider |1⟩’e, |1⟩ gider |0⟩’a."
            },
            {
              "t": 81.4,
              "en": "Those are not the only states.",
              "tr": "Durumlar yalnız bunlar değil."
            },
            {
              "t": 87.7,
              "en": "On a superposition α|0⟩ + β|1⟩ the quantum NOT does the simplest thing consistent with the two basis actions: it acts linearly.",
              "tr": "α|0⟩ + β|1⟩ süperpozisyonunda kuantum NOT, iki baz hareketiyle uyumlu en basit şeyi yapar: lineer davranır."
            },
            {
              "t": 114.2,
              "en": "|0⟩ flips to |1⟩ and |1⟩ flips to |0⟩, so the state becomes α|1⟩ + β|0⟩.",
              "tr": "|0⟩, |1⟩ olur; |1⟩, |0⟩ olur. Durum α|1⟩ + β|0⟩ haline gelir."
            },
            {
              "t": 129.2,
              "en": "In a circuit, a wire is one qubit.",
              "tr": "Devrede bir tel, bir kübiti temsil eder."
            },
            {
              "t": 136.3,
              "en": "The NOT is drawn as a box marked X, for historical reasons.",
              "tr": "NOT, tarihsel sebeple üzerinde X yazan bir kutu olarak çizilir."
            },
            {
              "t": 148.6,
              "en": "The wire carries the state in, X acts, the wire carries the result out.",
              "tr": "Tel durumu içeri taşır, X etkir, tel sonucu dışarı taşır."
            },
            {
              "t": 163.4,
              "en": "There is also a matrix.",
              "tr": "Bir de matris var."
            },
            {
              "t": 168.8,
              "en": "X is the 2×2 matrix with columns (0, 1) and (1, 0): the matrix [[0, 1], [1, 0]].",
              "tr": "X, sütunları (0, 1) ve (1, 0) olan 2×2 matristir: [[0, 1], [1, 0]]."
            },
            {
              "t": 187.4,
              "en": "Applied to |0⟩, which is the column (1, 0), it returns the first column (0, 1), which is |1⟩.",
              "tr": "|0⟩ olan (1, 0) sütununa uygulanınca ilk sütunu verir, (0, 1), yani |1⟩."
            },
            {
              "t": 209.0,
              "en": "Applied to |1⟩ it returns the second column (1, 0), which is |0⟩.",
              "tr": "|1⟩’e uygulanınca ikinci sütunu verir, (1, 0), yani |0⟩."
            },
            {
              "t": 224.2,
              "en": "Matrices act linearly, so the right action on |0⟩ and |1⟩ is the right action on every state.",
              "tr": "Matrisler lineer etkidiği için |0⟩ ve |1⟩ üzerindeki doğru etki, her durum üzerindeki doğru etkidir."
            },
            {
              "t": 245.8,
              "en": "The simplest circuit of all is a bare wire: the input |ψ⟩ = α|0⟩ + β|1⟩ is still the output.",
              "tr": "En basit devre, çıplak bir teldir: girdi |ψ⟩ = α|0⟩ + β|1⟩ çıktıda da durur."
            },
            {
              "t": 271.1,
              "en": "It looks trivial.",
              "tr": "Önemsiz görünür."
            },
            {
              "t": 275.8,
              "en": "In real devices the wire is often the hardest piece, because quantum states are fragile.",
              "tr": "Gerçek aletlerde tel çoğu zaman en zor parçadır, çünkü kuantum durumlar kırılgandır."
            },
            {
              "t": 300.0,
              "en": "They live in small systems, single atoms or single photons, and the environment disturbs them easily.",
              "tr": "Tek atom ya da tek foton gibi küçük sistemlerde yaşarlar ve çevre onları kolayca bozar."
            },
            {
              "t": 327.8,
              "en": "Practice: two X gates in a row.",
              "tr": "Alıştırma: art arda iki X."
            },
            {
              "t": 341.1,
              "en": "Input α|0⟩ + β|1⟩ becomes α|1⟩ + β|0⟩ after the first X, then α|0⟩ + β|1⟩ after the second.",
              "tr": "Girdi α|0⟩ + β|1⟩, ilk X’ten sonra α|1⟩ + β|0⟩, ikinciden sonra yine α|0⟩ + β|1⟩ olur."
            },
            {
              "t": 380.2,
              "en": "The output matches the input.",
              "tr": "Çıktı girdiyle aynıdır."
            },
            {
              "t": 392.6,
              "en": "The circuit is equivalent to a wire.",
              "tr": "Devre bir tele denktir."
            },
            {
              "t": 408.1,
              "en": "The same fact in matrices: the first gate sends |ψ⟩ to X|ψ⟩, the second sends that to X X |ψ⟩.",
              "tr": "Aynı olgu matrisle: ilk kapı |ψ⟩’yi X|ψ⟩ yapar, ikincisi onu X X |ψ⟩ yapar."
            },
            {
              "t": 434.5,
              "en": "Multiply [[0, 1], [1, 0]] by itself and you get the 2×2 identity.",
              "tr": "[[0, 1], [1, 0]] matrisini kendisiyle çarpınca 2×2 birim matris çıkar."
            },
            {
              "t": 452.8,
              "en": "So two NOT gates in a row are the identity.",
              "tr": "Art arda iki NOT, özdeşliktir."
            },
            {
              "t": 464.8,
              "en": "The next video is the first gate that is genuinely quantum on superpositions: the Hadamard gate.",
              "tr": "Sonraki video, süperpozisyon üzerinde gerçekten kuantum olan ilk kapı: Hadamard."
            },
            {
              "t": 491.8,
              "en": "Keep the identity X² = I.",
              "tr": "X² = I kimliğini tut."
            },
            {
              "t": 502.9,
              "en": "Later, when a flag is written with gates that are their own inverses, “erase the scratch” means “run the same gates backward,” and for X that is just another X.",
              "tr": "İleride bir bayrak, kendi tersi olan kapılarla yazıldığında “karalamayı sil” demek “aynı kapıları tersten çalıştır” demektir. X için bu, bir X daha uygulamaktır."
            },
            {
              "t": 574.1,
              "en": "NOT on the basis looks classical.",
              "tr": "Baz üzerindeki NOT klasik görünür."
            },
            {
              "t": 577.3,
              "en": "Hadamard will not.",
              "tr": "Hadamard görünmeyecek."
            }
          ]
        },
        {
          "id": "hadamard",
          "title": "Hadamard",
          "kicker": "Ders 4 · 14 dk video",
          "meta": "14 dk · Nielsen",
          "video": "x6gOp_o7Bi8",
          "lead": "H, |0⟩’ı (|0⟩+|1⟩)/√2 yapar, |1⟩’i (|0⟩−|1⟩)/√2 yapar. Eksi işaret burada ilk kez işe yarar. İki H art arda yine özdeşliktir.",
          "note": "Otomatik altyazı “one over 2” diyor. Söylenen katsayı 1/√2’dir; kareleri toplamı ancak o zaman 1 olur. Metinde düzeltildi.",
          "links": [
            {
              "label": "Video: The Hadamard gate",
              "href": "https://www.youtube.com/watch?v=x6gOp_o7Bi8"
            },
            {
              "label": "MIT ders 4",
              "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec04/"
            }
          ],
          "quiz": {
            "q": "H|0⟩ nedir?",
            "options": [
              "|1⟩",
              "(|0⟩ + |1⟩) / √2",
              "|0⟩ − |1⟩, boyu 1 olmadan"
            ],
            "answer": 1,
            "why": "İki genlik de 1/√2. Kareleri 1/2 + 1/2 = 1. Eksi işaretsiz “sahte H”, bazı girdilerde uzunluğu 1 olmayan bir vektör üretir; o yüzden yasal bir kapı değildir."
          },
          "cues": [
            {
              "t": 0.8,
              "en": "The NOT gate was essentially classical.",
              "tr": "NOT kapısı esasen klasikti."
            },
            {
              "t": 12.4,
              "en": "The Hadamard gate is the first truly quantum gate.",
              "tr": "Hadamard, gerçekten kuantum olan ilk kapıdır."
            },
            {
              "t": 27.2,
              "en": "On the computational basis, H|0⟩ = (|0⟩ + |1⟩)/√2, so both amplitudes are 1/√2. H|1⟩ = (|0⟩ − |1⟩)/√2: amplitude 1/√2 for |0⟩ and −1/√2 for |1⟩.",
              "tr": "Hesaplama bazında H|0⟩ = (|0⟩ + |1⟩)/√2; iki genlik de 1/√2’dir."
            },
            {
              "t": 70.0,
              "en": "The minus sign is the new ingredient.",
              "tr": "H|1⟩ = (|0⟩ − |1⟩)/√2: |0⟩ için 1/√2, |1⟩ için −1/√2. Eksi işaret, yeni malzeme budur."
            },
            {
              "t": 81.0,
              "en": "On a superposition it acts linearly.",
              "tr": "Süperpozisyonda lineer etkir."
            },
            {
              "t": 91.1,
              "en": "H(α|0⟩ + β|1⟩) = α(|0⟩+|1⟩)/√2 + β(|0⟩−|1⟩)/√2. Collecting terms, the amplitude of |0⟩ is (α+β)/√2 and the amplitude of |1⟩ is (α−β)/√2. In practice you mostly use the circuit, a box marked H, or the matrix.",
              "tr": "H(α|0⟩ + β|1⟩) = α(|0⟩+|1⟩)/√2 + β(|0⟩−|1⟩)/√2. Terimleri toplarsan |0⟩’ın genliği (α+β)/√2, |1⟩’inki (α−β)/√2 olur. Pratikte çoğu zaman devreyi, üzerinde H yazan kutuyu ya da matrisi kullanırsın."
            },
            {
              "t": 148.9,
              "en": "The matrix is (1/√2) times [[1, 1], [1, −1]].",
              "tr": "Matris, (1/√2) çarpı [[1, 1], [1, −1]]’dir."
            },
            {
              "t": 161.5,
              "en": "Check the matrix on the basis.",
              "tr": "Matrisi bazda kontrol et."
            },
            {
              "t": 169.4,
              "en": "|0⟩ is the column (1, 0); multiplying picks the first column, (1/√2, 1/√2), which is (|0⟩+|1⟩)/√2. |1⟩ picks the second column, (1/√2, −1/√2), which is (|0⟩−|1⟩)/√2. Linearity extends that to every state.",
              "tr": "|0⟩, (1, 0) sütunudur; çarpım ilk sütunu seçer, (1/√2, 1/√2), yani (|0⟩+|1⟩)/√2. |1⟩ ikinci sütunu seçer, (1/√2, −1/√2), yani (|0⟩−|1⟩)/√2. Lineerlik bunu her duruma taşır."
            },
            {
              "t": 222.9,
              "en": "The outputs are not classical basis states.",
              "tr": "Çıktılar klasik baz durumları değildir."
            },
            {
              "t": 234.2,
              "en": "That is what makes the gate quantum.",
              "tr": "Kapıyı kuantum yapan budur."
            },
            {
              "t": 243.6,
              "en": "Why care?",
              "tr": "Neden umurumuzda?"
            },
            {
              "t": 246.3,
              "en": "Nielsen’s analogy: thousands of years ago, going from North Africa to Spain overland means walking all the way around.",
              "tr": "Nielsen’in benzetmesi: binlerce yıl önce Kuzey Afrika’dan İspanya’ya karadan gitmek, bütün yolu dolanmak demektir."
            },
            {
              "t": 273.0,
              "en": "A boat opens a new medium and cuts the trip.",
              "tr": "Bir tekne yeni bir ortam açar ve yolu kısaltır."
            },
            {
              "t": 283.0,
              "en": "Hadamard and gates like it expand the set of states a computer can occupy.",
              "tr": "Hadamard ve benzeri kapılar, bilgisayarın bulunabileceği durum kümesini genişletir."
            },
            {
              "t": 299.7,
              "en": "Moving through those states can create shortcuts that a classical computer, stuck in basis states, cannot take.",
              "tr": "O durumlardan geçmek, yalnız baz durumlarına sıkışmış klasik bir bilgisayarın alamayacağı kestirmeler yaratabilir."
            },
            {
              "t": 324.8,
              "en": "A second analogy: if the rules of chess gave your rook a larger set of moves, you might reach checkmate faster.",
              "tr": "İkinci benzetme: satrançta kalene daha geniş bir hamle kümesi versen, mata daha çabuk varabilirsin."
            },
            {
              "t": 355.4,
              "en": "Expanding the dynamics beyond the classical ones creates the possibility of shortcuts.",
              "tr": "Dinamiği klasik olanın ötesine genişletmek, kestirme ihtimalini doğurur."
            },
            {
              "t": 379.0,
              "en": "Explicit examples come later.",
              "tr": "Açık örnekler sonra gelecek."
            },
            {
              "t": 387.0,
              "en": "For now, analyze two Hadamards in a row.",
              "tr": "Şimdilik art arda iki Hadamard’ı incele."
            },
            {
              "t": 398.0,
              "en": "Pause and guess before reading on.",
              "tr": "Okumadan önce tahmini yap."
            },
            {
              "t": 407.4,
              "en": "H|0⟩ = (|0⟩+|1⟩)/√2. The second H sends |0⟩ to (|0⟩+|1⟩)/√2 and |1⟩ to (|0⟩−|1⟩)/√2. The |1⟩ terms cancel, the |0⟩ terms add, and you get |0⟩ back.",
              "tr": "H|0⟩ = (|0⟩+|1⟩)/√2. İkinci H, |0⟩’ı (|0⟩+|1⟩)/√2’ye, |1⟩’i (|0⟩−|1⟩)/√2’ye götürür. |1⟩ terimleri birbirini götürür, |0⟩ terimleri toplanır, geriye |0⟩ kalır."
            },
            {
              "t": 458.4,
              "en": "Starting from |1⟩, the |0⟩ terms cancel and you get |1⟩ back.",
              "tr": "|1⟩’den başlarsan |0⟩ terimleri birbirini götürür ve geriye |1⟩ kalır."
            },
            {
              "t": 479.5,
              "en": "Two Hadamards are a wire.",
              "tr": "İki Hadamard bir teldir."
            },
            {
              "t": 488.2,
              "en": "In matrices, H H |ψ⟩ and H² equals the identity.",
              "tr": "Matrisle, H H |ψ⟩ ve H² birim matrise eşittir."
            },
            {
              "t": 504.7,
              "en": "That is why the circuit is a wire.",
              "tr": "Devrenin tel olmasının sebebi bu."
            },
            {
              "t": 516.4,
              "en": "Now the question Nielsen wants you to sit with: why the minus sign in the bottom-right entry?",
              "tr": "Nielsen’in üstünde durmanı istediği soru: sağ alt girişteki eksi neden var?"
            },
            {
              "t": 548.4,
              "en": "Suppose a fake gate H̃ with all plus signs, (1/√2)[[1, 1], [1, 1]].",
              "tr": "Hepsi artı olan sahte bir kapı düşün, H̃ = (1/√2)[[1, 1], [1, 1]]."
            },
            {
              "t": 571.4,
              "en": "H̃ sends both |0⟩ and |1⟩ to the same vector (|0⟩+|1⟩)/√2. Feed it the legal state (|0⟩−|1⟩)/√2. The two images cancel and the output is the zero vector, which has length 0. A legal gate must send unit vectors to unit vectors.",
              "tr": "H̃ hem |0⟩’ı hem |1⟩’i aynı vektöre, (|0⟩+|1⟩)/√2’ye gönderir. Ona yasal bir durum ver, (|0⟩−|1⟩)/√2. İki görüntü birbirini götürür ve çıktı sıfır vektörüdür; uzunluğu 0’dır. Yasal bir kapı, birim vektörü birim vektöre göndermelidir."
            },
            {
              "t": 615.8,
              "en": "H̃ does not.",
              "tr": "H̃ göndermez. H gönderir."
            },
            {
              "t": 618.1,
              "en": "H does.",
              "tr": "H does."
            },
            {
              "t": 620.5,
              "en": "Nielsen will prove the general fact — unitaries preserve length — in a later video.",
              "tr": "Nielsen, uzunluğu koruyan şeyin üniter olduğu genel olguyu sonraki bir videoda kanıtlayacak."
            },
            {
              "t": 636.8,
              "en": "Next is measurement, and why normalization is forced by probabilities adding to 1.",
              "tr": "Sırada ölçüm var ve normalizasyonun, olasılıkların toplamının 1 olmasından geldiği."
            },
            {
              "t": 652.9,
              "en": "The minus sign is not decoration.",
              "tr": "Eksi işaret süs değil."
            },
            {
              "t": 671.0,
              "en": "Without it, two different inputs can be crushed to the same output, and a normalized state can be sent to nothing.",
              "tr": "O olmadan iki farklı girdi aynı çıktıya ezilebilir ve boyu 1 olan bir durum hiçe gönderilebilir."
            },
            {
              "t": 733.7,
              "en": "You can check by hand that if |α|² + |β|² = 1, then the two output amplitudes of H also have squared absolute values summing to 1. That is the property H̃ lacks.",
              "tr": "Elle kontrol edebilirsin: |α|² + |β|² = 1 ise H’nin iki çıktı genliğinin mutlak kareleri de toplamda 1 eder. H̃’de olmayan özellik budur."
            },
            {
              "t": 816.6,
              "en": "The next video leaves gates for a moment and asks what it means to measure a qubit and read information out of it.",
              "tr": "Sonraki video bir an kapılardan ayrılıp bir kübiti ölçmenin ve ondan bilgi okumanın ne demek olduğunu sorar."
            },
            {
              "t": 825.4,
              "en": "Measurement is tied to the normalization condition, and it is how a general single-qubit gate will later be understood.",
              "tr": "Ölçüm, normalizasyon şartına bağlıdır ve genel tek kübit kapısı daha sonra bunun üzerinden anlaşılır."
            }
          ]
        },
        {
          "id": "measure",
          "title": "Ölçüm",
          "kicker": "Ders 5 · 12 dk video",
          "meta": "12 dk · Nielsen",
          "video": "SMbh0GgCN7I",
          "lead": "α ve β’yi okuyamazsın. Hesaplama bazında ölçüm, |α|² olasılıkla 0, |β|² olasılıkla 1 verir ve kübiti o baz durumuna çökertir.",
          "note": "Altyazıdaki “1 over root 2, squared, is 1/2” düzeltildi. Oracle’ı ölçerek doğrulayamayacağının sebebi bu ders: faz, olasılığı değiştirmez.",
          "links": [
            {
              "label": "Video: Measuring a qubit",
              "href": "https://www.youtube.com/watch?v=SMbh0GgCN7I"
            },
            {
              "label": "MIT ders 5 · Quantum Circuits",
              "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec05/"
            }
          ],
          "quiz": {
            "q": "Durum α|0⟩ + β|1⟩ hesaplama bazında ölçülünce 0 görme olasılığı nedir?",
            "options": [
              "α",
              "|α|²",
              "α + β"
            ],
            "answer": 1,
            "why": "Olasılık genliğin kendisi değil, mutlak değerinin karesidir. Bu yüzden −α ile +α aynı olasılığı verir ama aynı durum değildir."
          },
          "cues": [
            {
              "t": 0.9,
              "en": "Someone hands you a qubit in an unknown state α|0⟩ + β|1⟩ and asks you to determine α and β.",
              "tr": "Biri sana bilinmeyen bir durumda, α|0⟩ + β|1⟩, bir kübit uzatıyor ve α ile β’yi bulmanı istiyor."
            },
            {
              "t": 30.6,
              "en": "The answer is no.",
              "tr": "Cevap hayır."
            },
            {
              "t": 36.0,
              "en": "It is fundamentally impossible.",
              "tr": "Bu temelden imkânsız."
            },
            {
              "t": 46.0,
              "en": "The quantum state of a system is not directly observable.",
              "tr": "Bir sistemin kuantum durumu doğrudan gözlenemez."
            },
            {
              "t": 64.4,
              "en": "The best you can do is partial information about α and β.",
              "tr": "Yapabileceğinin en iyisi, α ve β hakkında kısmi bilgidir."
            },
            {
              "t": 82.8,
              "en": "The process that extracts that partial information is measurement in the computational basis.",
              "tr": "O kısmi bilgiyi çıkaran süreç, hesaplama bazında ölçümdür."
            },
            {
              "t": 109.8,
              "en": "It is how we read a result out of a quantum computer.",
              "tr": "Bir kuantum bilgisayardan sonucu böyle okuruz."
            },
            {
              "t": 125.2,
              "en": "For one qubit: you get the classical bit 0 with probability |α|², and 1 with probability |β|².",
              "tr": "Tek kübit için: |α|² olasılıkla klasik bit 0, |β|² olasılıkla 1 görürsün."
            },
            {
              "t": 152.6,
              "en": "Later this generalizes to many qubits.",
              "tr": "Bu sonra çok kübitli sistemlere genellenir."
            },
            {
              "t": 163.6,
              "en": "Picture the qubit as an atom in the lab and a large apparatus — lasers, electronics, a screen — interacting with it.",
              "tr": "Kübiti laboratuvardaki bir atom gibi, aleti de onunla etkileşen büyük bir cihaz gibi düşün: lazer, elektronik, ekran."
            },
            {
              "t": 191.7,
              "en": "The apparatus returns an outcome, 0 or 1. The outcome is classical information.",
              "tr": "Cihaz bir sonuç döner, 0 ya da 1. Sonuç klasik bilgidir."
            },
            {
              "t": 210.9,
              "en": "You can use it to control other processes.",
              "tr": "Onu başka süreçleri yönetmek için kullanabilirsin."
            },
            {
              "t": 221.1,
              "en": "In a computation you prepare a state, apply gates, and typically measure at the end to read the result.",
              "tr": "Bir hesapta durum hazırlanır, kapılar uygulanır ve tipik olarak sonda sonucu okumak için ölçülür."
            },
            {
              "t": 246.1,
              "en": "Measurement disturbs the state.",
              "tr": "Ölçüm durumu bozar."
            },
            {
              "t": 255.4,
              "en": "If the outcome is 0, the qubit is left in |0⟩.",
              "tr": "Sonuç 0 ise kübit |0⟩’da kalır."
            },
            {
              "t": 269.1,
              "en": "If the outcome is 1, it is left in |1⟩.",
              "tr": "Sonuç 1 ise |1⟩’de kalır."
            },
            {
              "t": 280.7,
              "en": "Afterward there is no trace of the original α and β.",
              "tr": "Sonrasında özgün α ve β’den iz kalmaz."
            },
            {
              "t": 296.2,
              "en": "You cannot extract any more information about them.",
              "tr": "Onlar hakkında daha fazla bilgi çıkaramazsın."
            },
            {
              "t": 311.5,
              "en": "They were hidden, and the measurement spent them.",
              "tr": "Gizliydiler ve ölçüm onları harcadı."
            },
            {
              "t": 326.1,
              "en": "One consequence: you cannot store an infinite amount of classical information in a qubit.",
              "tr": "Bir sonuç: bir kübite sonsuz klasik bilgi sığdıramazsın."
            },
            {
              "t": 351.6,
              "en": "α is a complex number; its real part has an infinite binary expansion.",
              "tr": "α bir karmaşık sayıdır; gerçel kısmının sonsuz bir ikili açılımı vardır."
            },
            {
              "t": 371.6,
              "en": "If you could read α exactly, a qubit would be an infinite classical memory.",
              "tr": "α’yı tam okuyabilseydin kübit sonsuz bir klasik bellek olurdu."
            },
            {
              "t": 393.0,
              "en": "Quantum mechanics does not allow that readout.",
              "tr": "Kuantum mekaniği bu okumaya izin vermez."
            },
            {
              "t": 406.2,
              "en": "There are other measurements.",
              "tr": "Başka ölçümler de vardır."
            },
            {
              "t": 412.6,
              "en": "Computational-basis measurement plus gates such as H and X can simulate an arbitrary quantum measurement, so in principle this is the measurement you need.",
              "tr": "Hesaplama bazı ölçümü, H ve X gibi kapılarla birlikte keyfi bir kuantum ölçümünü taklit edebilir; prensipte ihtiyacın olan ölçüm budur."
            },
            {
              "t": 447.0,
              "en": "Example: the state (|0⟩+|1⟩)/√2. Each amplitude has absolute value 1/√2, and the square is 1/2. You see 0 or 1 with probability 1/2 each, and the qubit collapses to the outcome you saw.",
              "tr": "Örnek: (|0⟩+|1⟩)/√2. Her genliğin mutlak değeri 1/√2, karesi 1/2’dir. 0 ya da 1’i 1/2 olasılıkla görürsün ve kübit gördüğün sonuca çöker."
            },
            {
              "t": 488.0,
              "en": "In a circuit, measurement is drawn as a meter.",
              "tr": "Devrede ölçüm bir sayaç olarak çizilir."
            },
            {
              "t": 498.7,
              "en": "The classical outcome is often called m and drawn as a double wire, leaving to be used in classical post-processing.",
              "tr": "Klasik sonuç çoğu zaman m diye adlandırılır ve çift çizgili bir telle, klasik son işleme gitmek üzere çizilir."
            },
            {
              "t": 525.5,
              "en": "The qubit is now |0⟩ or |1⟩.",
              "tr": "Kübit artık |0⟩ ya da |1⟩’dir."
            },
            {
              "t": 532.0,
              "en": "The usual convention is not to draw a quantum wire coming out: after measurement the qubit is typically discarded.",
              "tr": "Alışılmış sözleşmede çıkan bir kuantum tel çizilmez: ölçümden sonra kübit genellikle atılır."
            },
            {
              "t": 558.4,
              "en": "That is not always true, but the symbol assumes it.",
              "tr": "Bu her zaman doğru değildir ama sembol bunu varsayar."
            },
            {
              "t": 570.2,
              "en": "Normalization is the same fact in another costume.",
              "tr": "Normalizasyon, aynı olgunun başka kılığıdır."
            },
            {
              "t": 584.0,
              "en": "The probabilities of 0 and 1 must add to 1, so |α|² + |β|² = 1. The state vector has length 1 because the measurement probabilities add to 1. The next Nielsen videos treat general single-qubit gates.",
              "tr": "0 ve 1 olasılıkları toplamı 1 olmalıdır, yani |α|² + |β|² = 1. Durum vektörünün uzunluğu 1’dir, çünkü ölçüm olasılıkları toplamı 1’dir. Nielsen’in sonraki videoları genel tek kübit kapılarını işler."
            },
            {
              "t": 638.7,
              "en": "Those are the next block of this course, still locked.",
              "tr": "Onlar bu dersin sonraki bloğu ve henüz kilitli."
            },
            {
              "t": 653.6,
              "en": "Hold this: a phase of −1 does not change |α|².",
              "tr": "Şunu tut: −1 fazı |α|²’yi değiştirmez."
            },
            {
              "t": 657.1,
              "en": "A meter cannot see the sign.",
              "tr": "Bir sayaç işareti göremez."
            },
            {
              "t": 659.3,
              "en": "Anything that cares about the sign has to look at the state vector, not at a histogram of shots.",
              "tr": "İşaretin peşindeki her şey, atış histogramına değil durum vektörüne bakmalıdır."
            }
          ]
        },
        {
          "id": "cnot",
          "title": "CNOT",
          "kicker": "Ders 6 · 10 dk video",
          "meta": "10 dk · Nielsen",
          "video": "rLF-oHaXLtE",
          "lead": "Kontrol 1 ise hedef terslenir. Kontrol 0 ise hiçbir şey olmaz. H ile birlikte, iki kübiti dolanık bir duruma sokar. Yarışmadaki CX kapısı budur.",
          "note": "İki kübitin durumu dört genlidir: |00⟩, |01⟩, |10⟩, |11⟩. Toplam 4096 karelik logo, 12 kübit olduğu için 2^12 genliktir. Aynı kural.",
          "links": [
            {
              "label": "Video: The controlled-NOT gate",
              "href": "https://www.youtube.com/watch?v=rLF-oHaXLtE"
            },
            {
              "label": "MIT ders 5",
              "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec05/"
            }
          ],
          "quiz": {
            "q": "CNOT, |10⟩ durumuna ne yapar? İlk kübit kontrol, ikinci kübit hedeftir.",
            "options": [
              "Olduğu gibi bırakır",
              "|11⟩ yapar",
              "İki kübiti de ölçer"
            ],
            "answer": 1,
            "why": "Kontrol 1 olduğu için hedef terslenir. |10⟩ gider |11⟩. |11⟩ ise |10⟩ olur. |00⟩ ve |01⟩ yerinde kalır."
          },
          "cues": [
            {
              "t": 0.5,
              "en": "Single qubits are not enough for a computation.",
              "tr": "Tek kübitler bir hesap için yetmez."
            },
            {
              "t": 14.3,
              "en": "We add one two-qubit gate: the controlled-NOT, also written CNOT or CX.",
              "tr": "Bir tane iki kübitlik kapı ekleriz: kontrollü NOT, kısaca CNOT ya da CX."
            },
            {
              "t": 35.2,
              "en": "In a circuit it is two wires, a dot on the control and a plus on the target.",
              "tr": "Devrede iki tel, kontrolde bir nokta, hedefte bir artıdır."
            },
            {
              "t": 57.5,
              "en": "The top wire in Nielsen’s drawing is the control.",
              "tr": "Nielsen’in çiziminde üst tel kontroldür."
            },
            {
              "t": 71.9,
              "en": "The bottom wire is the target.",
              "tr": "Alt tel hedeftir."
            },
            {
              "t": 80.7,
              "en": "Two qubits have four computational basis states: |00⟩, |01⟩, |10⟩, |11⟩.",
              "tr": "İki kübitin dört hesaplama bazı durumu vardır: |00⟩, |01⟩, |10⟩, |11⟩."
            },
            {
              "t": 97.3,
              "en": "A general state is a superposition with four amplitudes, and the sum of the squares of their absolute values is 1. The same normalization as for one qubit.",
              "tr": "Genel durum dört genlikli bir süperpozisyondur ve mutlak karelerin toplamı 1’dir. Tek kübitteki normalizasyonun aynısı."
            },
            {
              "t": 133.2,
              "en": "CNOT is, on the basis, a classical gate.",
              "tr": "CNOT, baz üzerinde klasik bir kapıdır."
            },
            {
              "t": 142.4,
              "en": "If the control is |1⟩, it flips the target.",
              "tr": "Kontrol |1⟩ ise hedefi tersler."
            },
            {
              "t": 152.4,
              "en": "If the control is |0⟩, it does nothing.",
              "tr": "Kontrol |0⟩ ise hiçbir şey yapmaz."
            },
            {
              "t": 161.4,
              "en": "So |00⟩ stays |00⟩, |01⟩ stays |01⟩, |10⟩ becomes |11⟩, and |11⟩ becomes |10⟩.",
              "tr": "Yani |00⟩ kalır |00⟩, |01⟩ kalır |01⟩, |10⟩ olur |11⟩, |11⟩ olur |10⟩."
            },
            {
              "t": 192.3,
              "en": "In bits: |x⟩|y⟩ goes to |x⟩|y XOR x⟩, addition modulo 2. On superpositions the four actions apply linearly.",
              "tr": "Bitlerle: |x⟩|y⟩ gider |x⟩|y XOR x⟩, mod 2 toplama. Süperpozisyonda bu dört hareket lineer uygulanır."
            },
            {
              "t": 234.7,
              "en": "That is the whole gate.",
              "tr": "Kapının tamamı budur."
            },
            {
              "t": 243.8,
              "en": "As a matrix it is 4×4, because the state is a four-component vector (α for |00⟩, β for |01⟩, γ for |10⟩, δ for |11⟩).",
              "tr": "Matris olarak 4×4’tür, çünkü durum dört bileşenli bir vektördür (|00⟩ için α, |01⟩ için β, |10⟩ için γ, |11⟩ için δ)."
            },
            {
              "t": 274.6,
              "en": "The first two basis vectors are fixed.",
              "tr": "İlk iki baz vektörü sabit kalır."
            },
            {
              "t": 284.6,
              "en": "The third, |10⟩, is sent to |11⟩.",
              "tr": "Üçüncü, |10⟩, |11⟩’e gider."
            },
            {
              "t": 293.2,
              "en": "The fourth, |11⟩, is sent to |10⟩.",
              "tr": "Dördüncü, |11⟩, |10⟩’a gider."
            },
            {
              "t": 302.2,
              "en": "The matrix is unitary, like the single-qubit gates.",
              "tr": "Matris, tek kübit kapıları gibi üniterdir."
            },
            {
              "t": 315.6,
              "en": "It is useful when you want to check an identity.",
              "tr": "Bir kimliği kontrol etmek istediğinde işe yarar."
            },
            {
              "t": 328.2,
              "en": "In a larger circuit the untouched wires stay put.",
              "tr": "Daha büyük bir devrede dokunulmayan teller yerinde kalır."
            },
            {
              "t": 342.2,
              "en": "On a computational basis state, CNOT leaves the control as it is and flips the target when the control bit is 1. Nielsen then shows that “classical” does not mean the gate is boring.",
              "tr": "Bir hesaplama bazı durumunda CNOT kontrolü olduğu gibi bırakır ve kontrol biti 1 ise hedefi tersler. Nielsen sonra “klasik” demenin kapının sıkıcı olduğu anlamına gelmediğini gösterir."
            },
            {
              "t": 394.3,
              "en": "Start from |00⟩, apply H to the first qubit, then CNOT.",
              "tr": "|00⟩’dan başla, ilk kübite H uygula, sonra CNOT."
            },
            {
              "t": 410.0,
              "en": "H on the first qubit of |00⟩ produces (|00⟩ + |10⟩)/√2. The second qubit is still |0⟩.",
              "tr": "|00⟩’ın ilk kübitine H, (|00⟩ + |10⟩)/√2 üretir. İkinci kübit hâlâ |0⟩’dadır."
            },
            {
              "t": 453.3,
              "en": "CNOT leaves |00⟩ alone and sends |10⟩ to |11⟩.",
              "tr": "CNOT |00⟩’a dokunmaz, |10⟩’ı |11⟩ yapar."
            },
            {
              "t": 476.5,
              "en": "The output is (|00⟩ + |11⟩)/√2.",
              "tr": "Çıktı (|00⟩ + |11⟩)/√2 olur."
            },
            {
              "t": 492.1,
              "en": "That state is entangled.",
              "tr": "Bu durum dolanıktır."
            },
            {
              "t": 496.3,
              "en": "There is no way to read it as “each qubit has its own classical bit.” Nielsen will use states like this in superdense coding and teleportation, which are outside this first block.",
              "tr": "Onu “her kübitin kendi klasik biti var” diye okuyamazsın. Nielsen buna benzer durumları süperyoğun kodlama ve teleportasyonda kullanacak; ikisi de bu ilk bloğun dışında."
            },
            {
              "t": 527.9,
              "en": "The news to keep: CNOT plus single-qubit gates such as H can create non-classical states.",
              "tr": "Tutulacak haber: CNOT artı H gibi tek kübit kapıları, klasik olmayan durumlar üretebilir."
            },
            {
              "t": 543.6,
              "en": "With those pieces, Nielsen says, you have what you need for any quantum computation.",
              "tr": "Nielsen, bu parçalarla her kuantum hesap için gerekenin elinde olduğunu söyler."
            },
            {
              "t": 558.5,
              "en": "The next video of his series is universal computation.",
              "tr": "Serisinin sonraki videosu evrensel hesaplamadır."
            },
            {
              "t": 568.0,
              "en": "It is in the locked block.",
              "tr": "O, kilitli bloktadır."
            },
            {
              "t": 572.6,
              "en": "CX is one of the only two gates the Classiq grader accepts, together with u3. Every fancier gate in the logo oracle is eventually a pattern of those two.",
              "tr": "CX, Classiq grader’ının kabul ettiği iki kapıdan biridir; diğeri u3. Logo oracle’ındaki her süslü kapı, sonunda bu ikisinin bir desenidir."
            }
          ]
        },
        {
          "id": "phase",
          "title": "Eksi işaret ayrı bir durumdur",
          "kicker": "Ders 7 · videonun ilk 18 dakikası",
          "meta": "18 dk izle · 3Blue1Brown",
          "video": "RQWpF2Gb-gU",
          "lead": "Genliğin karesi olasılıktır. Eksi işaret kareyi değiştirmez, ama durumu değiştirir. Grover’ın bütün hızı bu işaretlededir. Difüzyon bu dersin konusu değil.",
          "note": "Videoyu yaklaşık 18:00’de durdur. Transkript orada biter. Sonrası Grover yinelemesi ve yansıma; sonraki bloğa ait. “100 kübit, devasa durum vektörü” cümlesi videonun devamındadır, bu dersin geçiş sorusunda yok.",
          "links": [
            {
              "label": "Video: But what is quantum computing?",
              "href": "https://www.youtube.com/watch?v=RQWpF2Gb-gU"
            }
          ],
          "quiz": {
            "q": "Bir bileşen 0,5 yerine −0,5 olursa olasılık ve durum ne olur?",
            "options": [
              "Olasılık değişmez, durum yine de farklıdır",
              "Olasılık da eksi olur",
              "İkisi aynı durumdur, çünkü kareler eşit"
            ],
            "answer": 0,
            "why": " (−0,5)² = 0,25, olasılık aynı kalır. 3Blue1Brown bunu yine de ayrı bir durum sayar. İşaret çevirmek, Grover’da ve bizim faz oracle’ında asıl işlemdir."
          },
          "cues": [
            {
              "t": 0.0,
              "en": "A common popular summary says a quantum computer holds every bit string at once in a superposition and therefore does a classical computation on all of them in parallel.",
              "tr": "Yaygın bir popüler özet der ki kuantum bilgisayar her bit dizisini süperpozisyonda bir arada tutar ve bu yüzden klasik hesabı hepsine paralel uygular."
            },
            {
              "t": 33.1,
              "en": "Grant Sanderson thinks this summary causes a specific wrong intuition.",
              "tr": "Grant Sanderson bu özetin belirli bir yanlış sezgi ürettiğini düşünür. Bir sınav kurar."
            },
            {
              "t": 46.8,
              "en": "He sets a quiz.",
              "tr": "He sets a quiz."
            },
            {
              "t": 49.7,
              "en": "A mystery function hides one secret number in 0 … n−1. You may only test numbers.",
              "tr": "Gizemli bir fonksiyon, 0 … n−1 arasında bir gizli sayı saklar. Yalnızca sayı deneyebilirsin."
            },
            {
              "t": 65.6,
              "en": "Classically, guess-and-check takes on the order of n tries: on average about n/2.",
              "tr": "Klasik olarak dene-ve-bak, n mertebesinde deneme ister: ortalamada yaklaşık n/2."
            },
            {
              "t": 81.4,
              "en": "Computer scientists write that runtime O(n).",
              "tr": "Bilgisayar bilimciler bu süreyi O(n) yazar."
            },
            {
              "t": 91.7,
              "en": "The big O says the factor that scales is n; constants like 1/2 are hidden.",
              "tr": "Büyük O, ölçeği belirleyen çarpanın n olduğunu söyler; 1/2 gibi sabitler gizlenir."
            },
            {
              "t": 108.9,
              "en": "The quiz: on a quantum computer, what is the best runtime for the same search?",
              "tr": "Sınav: aynı arama bir kuantum bilgisayarda en iyi hangi sürede biter?"
            },
            {
              "t": 127.2,
              "en": "The options he offers are O(√n), O(log n), O(log log n), and O(1).",
              "tr": "Seçenekleri O(√n), O(log n), O(log log n) ve O(1)."
            },
            {
              "t": 142.6,
              "en": "He has not defined quantum computing yet.",
              "tr": "Kuantum hesaplamayı henüz tanımlamadı."
            },
            {
              "t": 152.1,
              "en": "The question is a gut check, not a grade.",
              "tr": "Soru bir not değil, bir sezgi kontrolü."
            },
            {
              "t": 161.7,
              "en": "In a YouTube poll, in a Stanford lecture, and at the International Math Olympiad, the most common answer is O(1).",
              "tr": "Bir YouTube anketinde, bir Stanford dersinde ve Uluslararası Matematik Olimpiyatı’nda en sık cevap O(1)’dir."
            },
            {
              "t": 181.0,
              "en": "That is wrong, and it comes from the parallel-universe summary: put all n values into a superposition, process them at once, read the answer.",
              "tr": "Bu yanlıştır ve paralel-evren özetinden gelir: n değeri süperpozisyona koy, hepsini birden işle, cevabı oku."
            },
            {
              "t": 205.2,
              "en": "The second most common answer is O(log n), an exponential speedup.",
              "tr": "İkinci sık cevap O(log n), yani üstel bir hızlanma."
            },
            {
              "t": 216.5,
              "en": "That happens for a few special problems.",
              "tr": "Bu, birkaç özel problemde olur."
            },
            {
              "t": 223.3,
              "en": "Shor’s factoring algorithm is the famous case.",
              "tr": "Shor’un çarpanlara ayırma algoritması ünlü örnektir."
            },
            {
              "t": 231.2,
              "en": "Most problems are not like that.",
              "tr": "Problemlerin çoğu böyle değildir."
            },
            {
              "t": 236.7,
              "en": "The correct answer here is O(√n).",
              "tr": "Buradaki doğru cevap O(√n)’dir."
            },
            {
              "t": 242.3,
              "en": "In 1994 it was proved you cannot beat O(√n) on this task.",
              "tr": "1994’te bu işte O(√n)’yi geçemeyeceğin kanıtlandı."
            },
            {
              "t": 250.9,
              "en": "Two years later Lov Grover gave a procedure that achieves it.",
              "tr": "İki yıl sonra Lov Grover bunu başaran bir yöntem verdi."
            },
            {
              "t": 260.1,
              "en": "A million possibilities take on the order of a thousand steps.",
              "tr": "Bir milyon olasılık, bin adım mertebesinde sürer."
            },
            {
              "t": 269.5,
              "en": "The precise count hides a factor of π/4. The puzzle is a stand-in for any problem where a solution is easy to check and hard to find, the NP problems.",
              "tr": "Kesin sayı, π/4 çarpanını gizler. Bulmaca, çözümün kontrolü kolay, bulunması zor olan her problemin vekilidir; NP problemleri."
            },
            {
              "t": 292.1,
              "en": "A square-root speedup is not an exponential one.",
              "tr": "Karekök hızlanma, üstel bir hızlanma değildir."
            },
            {
              "t": 299.3,
              "en": "It is still striking that one method speeds up that whole class.",
              "tr": "Yine de tek bir yöntemin bütün bu sınıfı hızlandırması çarpıcıdır."
            },
            {
              "t": 309.0,
              "en": "The rest of his video walks through Grover.",
              "tr": "Videonun gerisi Grover’ı adım adım anlatır."
            },
            {
              "t": 315.5,
              "en": "This lesson stops at the state vector and the minus sign.",
              "tr": "Bu ders, durum vektörü ve eksi işarette durur."
            },
            {
              "t": 324.1,
              "en": "He wants the first part of the video to be mathematics, not analogy.",
              "tr": "Videonun ilk kısmının benzetme değil matematik olmasını istiyor."
            },
            {
              "t": 343.1,
              "en": "Classical data is a string of bits, which might mean an integer, which might mean a voltage.",
              "tr": "Klasik veri bir bit dizisidir; bu bir tamsayı anlamına gelebilir, o da bir gerilim anlamına gelebilir."
            },
            {
              "t": 368.9,
              "en": "Quantum computing has the same layers.",
              "tr": "Kuantum hesabın da aynı katmanları vardır."
            },
            {
              "t": 379.5,
              "en": "The new fact at the middle layer: the state of the memory is not the same object as what you read out.",
              "tr": "Orta katmandaki yeni olgu: belleğin durumu, okuduğun şeyle aynı nesne değildir."
            },
            {
              "t": 408.1,
              "en": "What you read is a bit string, and it is random.",
              "tr": "Okuduğun şey bir bit dizisidir ve rastgeledir."
            },
            {
              "t": 419.3,
              "en": "A program does not pick one output.",
              "tr": "Bir program tek bir çıktı seçmez."
            },
            {
              "t": 427.4,
              "en": "It determines a probability distribution over all possible outputs.",
              "tr": "Bütün olası çıktılar üzerinde bir olasılık dağılımı belirler."
            },
            {
              "t": 443.0,
              "en": "On a 4-bit readout there are 16 possible strings.",
              "tr": "4 bitlik bir okumada 16 olası dizgi vardır."
            },
            {
              "t": 454.4,
              "en": "A k-qubit computer has 2^k possible readouts.",
              "tr": "k kübitlik bir bilgisayarın 2^k olası okuması vardır."
            },
            {
              "t": 464.8,
              "en": "You never see the distribution itself.",
              "tr": "Dağılımın kendisini hiç görmezsin."
            },
            {
              "t": 473.7,
              "en": "You see one string, drawn from it.",
              "tr": "Ondan çekilmiş bir dizgi görürsün."
            },
            {
              "t": 481.6,
              "en": "You never see all strings coexisting.",
              "tr": "Bütün dizgilerin bir arada durduğunu görmezsin."
            },
            {
              "t": 490.2,
              "en": "After you read a value, the state changes so that all the probability sits on that value.",
              "tr": "Bir değer okuduktan sonra durum değişir; bütün olasılık o değerde toplanır."
            },
            {
              "t": 505.9,
              "en": "Read again and you see the same string.",
              "tr": "Tekrar okursan aynı dizgiyi görürsün."
            },
            {
              "t": 512.8,
              "en": "The distribution is delicate: looking collapses it.",
              "tr": "Dağılım naziktir: bakmak onu çökertir."
            },
            {
              "t": 521.8,
              "en": "Where does the distribution come from?",
              "tr": "Dağılım nereden gelir?"
            },
            {
              "t": 528.5,
              "en": "From a big vector, one component per possible bit string.",
              "tr": "Büyük bir vektörden, olası her bit dizgisi için bir bileşen."
            },
            {
              "t": 538.6,
              "en": "For 4 bits the vector has 16 components.",
              "tr": "4 bitte vektörün 16 bileşeni vardır."
            },
            {
              "t": 545.7,
              "en": "The vector is not the probability distribution.",
              "tr": "Vektör, olasılık dağılımı değildir."
            },
            {
              "t": 554.0,
              "en": "The rule, the strange one: the probability of a string is the square of the magnitude of its component.",
              "tr": "Kural, tuhaf olanı: bir dizginin olasılığı, bileşeninin büyüklüğünün karesidir."
            },
            {
              "t": 572.2,
              "en": "If the component for 0011 is 0.5, the probability of reading 0011 is 0.25. Components may be negative.",
              "tr": "0011’in bileşeni 0,5 ise 0011 okuma olasılığı 0,25’tir. Bileşenler negatif olabilir."
            },
            {
              "t": 597.2,
              "en": "The square does not change, so the probabilities do not change.",
              "tr": "Kare değişmez, dolayısıyla olasılıklar değişmez."
            },
            {
              "t": 612.6,
              "en": "The state is still a different state.",
              "tr": "Durum yine de başka bir durumdur."
            },
            {
              "t": 621.7,
              "en": "Flipping signs is central to Grover’s algorithm.",
              "tr": "İşaret çevirmek, Grover algoritmasının merkezindedir."
            },
            {
              "t": 633.4,
              "en": "He then shrinks the picture to a single qubit, two possible readouts, 0 and 1.",
              "tr": "Sonra resmi tek kübite indirir: iki olası okuma, 0 ve 1."
            },
            {
              "t": 652.5,
              "en": "A qubit’s state vector is an arrow in a plane.",
              "tr": "Bir kübitin durum vektörü, düzlemde bir oktur."
            },
            {
              "t": 660.9,
              "en": "The horizontal coordinate is the amplitude of 0; its square is the probability of reading 0. The vertical coordinate is the amplitude of 1. Because the probabilities add to 1, x² + y² = 1. The arrow has length 1 and lives on the unit circle.",
              "tr": "Yatay koordinat 0’ın genliğidir; karesi 0 okuma olasılığıdır. Dikey koordinat 1’in genliğidir. Olasılıklar toplamı 1 olduğu için x² + y² = 1. Okun uzunluğu 1’dir ve birim çemberin üstünde yaşar."
            },
            {
              "t": 704.7,
              "en": "In more qubits it lives on a high-dimensional unit sphere.",
              "tr": "Daha çok kübitte yüksek boyutlu bir birim kürenin üstünde yaşar."
            },
            {
              "t": 715.3,
              "en": "A qubit is not a bit that is both values.",
              "tr": "Kübit, iki değer birden olan bir bit değildir."
            },
            {
              "t": 722.7,
              "en": "It is this unit vector.",
              "tr": "It is this unit vector."
            },
            {
              "t": 726.9,
              "en": "On measurement it collapses onto the axis you saw.",
              "tr": "Bu birim vektördür. Ölçülünce gördüğün eksene çöker."
            },
            {
              "t": 736.0,
              "en": "He names this the Born rule: square the magnitudes, get probabilities.",
              "tr": "Buna Born kuralı der: büyüklüklerin karesini al, olasılıkları bul."
            },
            {
              "t": 749.1,
              "en": "The same pattern shows up for electron spin and photon polarization.",
              "tr": "Aynı kalıp elektron spini ve foton polarizasyonunda da vardır."
            },
            {
              "t": 761.7,
              "en": "A qubit is the abstraction over those systems, the way a bit abstracts over voltages and magnets.",
              "tr": "Kübit, bu sistemlerin soyutlamasıdır; bitin gerilim ve mıknatıs soyutlaması olması gibi."
            },
            {
              "t": 779.8,
              "en": "The ket symbol denotes a unit vector in that space.",
              "tr": "Ket sembolü, o uzaydaki bir birim vektörü gösterir."
            },
            {
              "t": 789.4,
              "en": "|0⟩ is the horizontal unit vector, the state that always reads 0. |1⟩ is the vertical unit vector.",
              "tr": "|0⟩ yatay birim vektördür, hep 0 okunan durum. |1⟩ dikey birim vektördür."
            },
            {
              "t": 807.6,
              "en": "A general qubit is a weighted sum of those two.",
              "tr": "Genel bir kübit, bu ikisinin ağırlıklı toplamıdır."
            },
            {
              "t": 816.4,
              "en": "Classical gates such as AND, OR, and NOT process bits.",
              "tr": "AND, OR ve NOT gibi klasik kapılar bit işler."
            },
            {
              "t": 825.4,
              "en": "Quantum gates process qubits, and they look like rotations or flips of the state vector.",
              "tr": "Kuantum kapılar kübit işler ve durum vektörünün dönmesi ya da çevrilmesi gibi görünürler."
            },
            {
              "t": 840.0,
              "en": "His example is the Hadamard.",
              "tr": "Örneği Hadamard’dır."
            },
            {
              "t": 844.6,
              "en": "It sends the horizontal |0⟩ arrow to the northeast diagonal, and the vertical |1⟩ arrow to the southeast diagonal.",
              "tr": "Yatay |0⟩ okunu kuzeydoğu köşegenine, dikey |1⟩ okunu güneydoğu köşegenine gönderir."
            },
            {
              "t": 863.6,
              "en": "You use it to turn a definite 0 or 1 into a 50-50 state, and back.",
              "tr": "Onu, kesin bir 0 ya da 1’i 50-50 bir duruma çevirmek ve geri almak için kullanırsın."
            },
            {
              "t": 874.5,
              "en": "An algorithm is a sequence of such moves that steers the vector until it points almost entirely along one coordinate axis, the answer you wanted.",
              "tr": "Bir algoritma, vektörü neredeyse bütünüyle tek bir koordinat eksenine, istediğin cevaba yönlendiren bu hareketlerin dizisidir."
            },
            {
              "t": 898.6,
              "en": "With one qubit there are only two axes, so you can only answer a yes-no question.",
              "tr": "Tek kübitte yalnız iki eksen vardır, yani ancak evet-hayır sorusu cevaplanır."
            },
            {
              "t": 910.8,
              "en": "With k qubits there are 2^k axes, one per bit string.",
              "tr": "k kübitte 2^k eksen vardır, her bit dizgisi için bir tane."
            },
            {
              "t": 918.7,
              "en": "If you can point the vector along one of them, the readout can carry more information: a factor of a large number, or the secret key from the opening puzzle.",
              "tr": "Vektörü bunlardan biri boyunca yönlendirebilirsen okuma daha fazla bilgi taşıyabilir: büyük bir sayının çarpanı ya da açılış bulmacasının gizli anahtarı."
            },
            {
              "t": 942.3,
              "en": "He then says the reason there is any extra power at all is that the state vector grows exponentially, while you still cannot read its entries directly.",
              "tr": "Sonra, ekstra bir güç varsa sebebinin durum vektörünün üstel büyümesi olduğunu, buna rağmen bileşenlerini doğrudan okuyamadığını söyler."
            },
            {
              "t": 965.0,
              "en": "This lesson stops here.",
              "tr": "Bu ders burada durur."
            },
            {
              "t": 968.5,
              "en": "The reflections that implement Grover start later in the video, around 24 minutes.",
              "tr": "Grover’ı uygulayan yansımalar videonun ilerisinde, yaklaşık 24. dakikada başlar."
            },
            {
              "t": 980.8,
              "en": "What you need from this video for the logo: a marked pixel is a basis state whose amplitude has been multiplied by −1. Every readout probability stays the same.",
              "tr": "Bu videodan logo için gereken: işaretli bir piksel, genliği −1 ile çarpılmış bir baz durumudur. Her okuma olasılığı aynı kalır."
            },
            {
              "t": 1051.3,
              "en": "The state vector does not.",
              "tr": "Durum vektörü kalmaz."
            },
            {
              "t": 1062.8,
              "en": "Stop the video.",
              "tr": "Videoyu durdur."
            },
            {
              "t": 1064.0,
              "en": "The next lesson has no Nielsen film, because he never recorded the reversible-computing episodes.",
              "tr": "Sonraki dersin Nielsen filmi yok, çünkü tersinir hesap bölümlerini hiç çekmedi."
            },
            {
              "t": 1071.4,
              "en": "It is the recipe that turns a classical yes-no check into that minus sign.",
              "tr": "O ders, klasik bir evet-hayır kontrolünü bu eksi işarete çeviren tariftir."
            }
          ]
        },
        {
          "id": "oracle",
          "title": "Bayrak yaz, Z uygula, sil",
          "kicker": "Ders 8 · ders notu, video yok",
          "meta": "25 dk · Shor notu",
          "lead": "Nielsen bu videoyu çekmedi. Tarif, Peter Shor’un Grover notundaki cümledir: siyah mı diye bir kâğıda yaz, kâğıda Z uygula, kâğıdı sil. Koordinatlar yerinde kalır, işaret genliğe geçer.",
          "reading": "Bu dersin videosu yok. Nielsen, tersinir hesap ve Grover bölümlerini çekmeden seriyi bıraktı. Aşağıdaki iki sütun ders notudur, bir konuşmanın transkripti değil. Kaynak Shor’un notu; cümleler burada yeniden kuruldu.",
          "note": "Geçiş sorusunu ancak notu kendi cümlelerinle tekrar edebiliyorsan işaretle. Sonraki ders, bu tarifi logonun boyutuna ve 6 ancilla bütçesine bağlar.",
          "links": [
            {
              "label": "Shor, Lecture 24 (Grover)",
              "href": "https://math.mit.edu/~shor/435-LN/Lecture_24.pdf"
            },
            {
              "label": "MIT 2003, ders 11 · oracle tanımı",
              "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec11/"
            },
            {
              "label": "IBM · klasik hesabı devreye çevirmek",
              "href": "https://quantum.cloud.ibm.com/learning/en/courses/fundamentals-of-quantum-algorithms/quantum-algorithmic-foundations/simulating-classical-computations"
            }
          ],
          "quiz": {
            "q": "Faz oracle’ının üç adımı hangi sıradadır?",
            "options": [
              "Ölç, sonra X uygula, ancillayı 1 bırak",
              "Bayrağı ancillaya yaz, bayrağa Z uygula, yazan devreyi tersten çalıştır",
              "Hadamard, ölç, tekrar Hadamard"
            ],
            "answer": 1,
            "why": "Z, bayrak |1⟩ iken bütün duruma eksi verir. Yazma devresi tersten çalışınca ancilla |0⟩’a döner ve koordinatlar eski haline gelir. Ancilla kirli kalırsa grader devreyi eler."
          },
          "cues": [
            {
              "en": "You already know the target. A basis state |x⟩|y⟩ should be multiplied by −1 when the pixel (x, y) is black, and left alone when it is white. x and y are 6-bit numbers, so each is a 6-qubit register. Nothing is measured. The grader looks at the state vector.",
              "tr": "Hedefi zaten biliyorsun. Bir baz durumu |x⟩|y⟩, (x, y) pikseli siyahsa −1 ile çarpılmalı, beyazsa olduğu gibi kalmalı. x ve y 6 bitlik sayılardır, yani her biri 6 kübitlik bir yazmaçtır. Hiçbir şey ölçülmez. Grader durum vektörüne bakar."
            },
            {
              "en": "A classical check “is this pixel black?” throws information away. AND has two inputs and one output; from a 0 you cannot tell which input was 0. A quantum gate cannot do that. The result has to be written onto a fresh ancilla that starts at |0⟩. The Toffoli gate is the reversible AND: |a⟩|b⟩|c⟩ goes to |a⟩|b⟩|c XOR (a AND b)⟩. If c starts at |0⟩, it ends holding the AND.",
              "tr": "Klasik “bu piksel siyah mı?” kontrolü bilgi atar. AND’in iki girdisi ve bir çıktısı vardır; 0’dan hangi girdinin 0 olduğunu anlayamazsın. Bir kuantum kapısı bunu yapamaz. Sonuç, |0⟩’dan başlayan taze bir ancillaya yazılmalıdır. Toffoli, tersinir AND’dir: |a⟩|b⟩|c⟩ gider |a⟩|b⟩|c XOR (a AND b)⟩. c, |0⟩’dan başlarsa sonda AND’i tutar."
            },
            {
              "en": "Shor’s construction, in Lecture 24: build a circuit that sets an ancilla to |1⟩ when the input is a solution and to |0⟩ otherwise. Apply Z to that ancilla. Z sends |1⟩ to −|1⟩ and leaves |0⟩ alone, so the minus sign appears exactly on the marked inputs. Then run the flag circuit backward. The ancilla returns to |0⟩. The data register still carries the minus sign, because a global-looking phase that depends on the data is a relative phase on the data.",
              "tr": "Shor’un Lecture 24’teki kurulumu: girdi bir çözümsə ancillayı |1⟩, değilse |0⟩ yapan bir devre kur. O ancillaya Z uygula. Z, |1⟩’i −|1⟩ yapar, |0⟩’a dokunmaz; eksi işaret tam işaretli girdilerde belirir. Sonra bayrak devresini tersten çalıştır. Ancilla |0⟩’a döner. Veri yazmacı eksi işareti taşımaya devam eder, çünkü veriye bağlı görünen bu faz, verinin üzerinde göreli bir fazdır."
            },
            {
              "en": "Doing it with two flags is the same idea. Write “x is in range” onto ancilla a0 and “y is in range” onto ancilla a1. A CZ between them multiplies by −1 only when both flags are |1⟩. That is the AND of the two predicates. Then uncompute both flags. CZ is not a measurement. The probabilities do not change.",
              "tr": "İki bayrakla yapmak aynı fikirdir. “x aralıkta”yı a0 ancillasına, “y aralıkta”yı a1 ancillasına yaz. Aralarındaki CZ, yalnız iki bayrak da |1⟩ iken −1 ile çarpar. Bu, iki yüklemin VE’sidir. Sonra iki bayrağı da sil. CZ bir ölçüm değildir. Olasılıklar değişmez."
            },
            {
              "en": "A rectangle is two range checks. The identity worth memorizing: ℓ ≤ v ≤ h is exactly (v ≥ ℓ) XOR (v ≥ h+1). XOR matters. If a pixel is marked twice, the two minus signs multiply to +1 and the pixel comes out white. Overlapping pieces of the logo have to be counted once, either inside the Boolean expression or by cutting the picture into disjoint regions.",
              "tr": "Bir dikdörtgen, iki aralık kontrolüdür. Ezberlenecek kimlik: ℓ ≤ v ≤ h tam olarak (v ≥ ℓ) XOR (v ≥ h+1)’dir. XOR önemlidir. Bir piksel iki kez işaretlenirse iki eksi çarpımı +1 olur ve piksel beyaz çıkar. Logonun üst üste binen parçaları ya Boolean ifadenin içinde bir kez sayılmalı ya da resim örtüşmeyen bölgelere kesilmelidir."
            },
            {
              "en": "Uncomputation works cleanly when the writing circuit is its own inverse, the way X and CNOT are. You run the same gates again, in reverse order. The scratch ends at |0⟩. If it does not, the ancilla is still entangled with the data and the oracle is wrong even when the minus signs on a few basis states look plausible.",
              "tr": "Silme, yazma devresi X ve CNOT gibi kendi tersiyse temiz işler. Aynı kapıları ters sırada bir kez daha çalıştırırsın. Karalama |0⟩’da biter. Bitmezse ancilla veriyle dolanık kalır ve birkaç baz durumundaki eksiler makul görünse bile oracle yanlıştır."
            }
          ]
        },
        {
          "id": "budget",
          "title": "Derinlik, CX ve logo",
          "kicker": "Ders 9 · ders notu, video yok",
          "meta": "20 dk · problem",
          "lead": "İlk blok burada probleme değer. Doğru işaret yetmez. Grader derinliği sayar, kapı kümesi u3 ve cx’tir, ancilla en fazla 6’dır.",
          "reading": "Bu ders de nottur. Projenin kendi anlatımı docs/index.html içindedir. Formülü oradan ezberleme; önce bu sayfadaki üç cümleyi kur.",
          "note": "Bu dersi bitirince soldaki sıradaki blok hâlâ kilitli. Transkripti yok. Sohbette “sıradaki bloğu aç” dersen genel kapılar, Toffoli ve logonun devresi aynı sayfaya eklenir.",
          "links": [
            {
              "label": "Bu projenin problem anlatımı",
              "href": "notes.html"
            },
            {
              "label": "MIT ders notları listesi",
              "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/pages/lecture-notes/"
            }
          ],
          "quiz": {
            "q": "Grader derinliği nasıl sayar?",
            "options": [
              "Her kapı, dokunduğu kübitlerin o ana kadarki en büyük derinliğine 1 ekler; kesişmeyen kübitlerdeki kapılar aynı katmanda durabilir",
              "Devredeki kapı sayısı, sıra ne olursa olsun, derinliğin kendisidir",
              "Yalnız ölçüm sayısı sayılır"
            ],
            "answer": 0,
            "why": "All-to-all bağlantı var, yani komşu olmak için SWAP harcamazsın. Sayaç, yazdığın sırayı ölçer. Başka bir araç sonradan katmanları yeniden dizmez."
          },
          "cues": [
            {
              "en": "The register map is fixed. q[0] through q[5] are x, little-endian, so q[0] is the least significant bit. q[6] through q[11] are y, also little-endian. q[12] through q[17] are the ancillas: at most six, clean at the start, clean at the end. The circuit is one qreg in OpenQASM 2.0. The only gates are u3 and cx. u3 is the general single-qubit rotation; X, H, and Z are special cases of it.",
              "tr": "Yazmaç haritası sabittir. q[0]’dan q[5]’e kadar x’tir, little-endian, yani q[0] en küçük bittir. q[6]’dan q[11]’e kadar y’dir, o da little-endian. q[12]’den q[17]’ye ancillalardır: en fazla altı, başta temiz, sonda temiz. Devre, OpenQASM 2.0’da tek bir qreg’dir. İzinli kapılar yalnız u3 ve cx’tir. u3, genel tek kübit dönüşüdür; X, H ve Z onun özel halleridir."
            },
            {
              "en": "Depth is a layer count. A gate adds 1 to the maximum depth so far of the qubits it touches. Two gates that do not share a qubit can sit in the same layer. CX count is the tie-break. The closing prize band was the top five, around depth 108, with the leader near 95 depth and 272 CX. A correct oracle at a few thousand layers is a finished homework and a poor score.",
              "tr": "Derinlik bir katman sayısıdır. Bir kapı, dokunduğu kübitlerin o ana kadarki en büyük derinliğine 1 ekler. Kübit paylaşmayan iki kapı aynı katmanda durabilir. CX sayısı eşitlikte bakar. Kapanış ödülü ilk beşti, derinlik yaklaşık 108; lider 95 derinlik ve 272 CX civarındaydı. Birkaç bin katmanlı doğru bir oracle, bitmiş bir ödev ve zayıf bir skordur."
            },
            {
              "en": "The picture is not a mysterious bitmap. It is four shapes. A vertical rectangle, 2 ≤ x ≤ 26 and 29 ≤ y ≤ 53. A horizontal bar, 26 ≤ x ≤ 49 and 39 ≤ y ≤ 43. A disk on the right, (x−55)² + (y−41)² ≤ 42. A disk on top, (x−40)² + (y−19)² ≤ 72. A pixel is black if it lies in at least one shape. The counts are 625, 120, 137, and 225, with two overlaps of 5 pixels each, and the union is 1,097 black pixels.",
              "tr": "Resim gizemli bir bitmap değil. Dört şekil. Dikey bir dikdörtgen, 2 ≤ x ≤ 26 ve 29 ≤ y ≤ 53. Yatay bir şerit, 26 ≤ x ≤ 49 ve 39 ≤ y ≤ 43. Sağda bir disk, (x−55)² + (y−41)² ≤ 42. Üstte bir disk, (x−40)² + (y−19)² ≤ 72. Bir piksel, şekillerden en az birinin içindeyse siyahtır. Sayılar 625, 120, 137 ve 225’tir; iki örtüşme de 5’er pikseldir ve birleşim 1.097 siyah pikseldir."
            },
            {
              "en": "The rectangles are range checks, which you can build from comparisons and XOR. The disks are arithmetic: subtract, square, add, compare. Each intermediate value wants an ancilla. Six clean ancillas is the whole budget. That is why the next block is not more pop science. It is reversible arithmetic and multi-controlled gates that fit in six scratch qubits and then uncompute.",
              "tr": "Dikdörtgenler aralık kontrolüdür; karşılaştırmadan ve XOR’dan kurulabilir. Diskler aritmetiktir: çıkar, kare al, topla, karşılaştır. Her ara değer bir ancilla ister. Altı temiz ancilla bütün bütçedir. Sonraki blok daha fazla popüler bilim değildir. Altı karalama kübitine sığıp sonra silinen tersinir aritmetik ve çok kontrollü kapılardır."
            },
            {
              "en": "When you can say the three steps of the oracle, draw X–CZ–X to mark a single basis state, and state the depth rule, this block is done. The locked lessons on the left are the continuation: general single-qubit gates and unitaries, universal computation, the Toffoli in detail, multi-controlled X, Qmod’s control and phase, and only then a cheap circuit for this logo.",
              "tr": "Oracle’ın üç adımını söyleyebildiğinde, tek bir baz durumunu işaretlemek için X–CZ–X çizebildiğinde ve derinlik kuralını kurabildiğinde bu blok biter. Soldaki kilitli dersler devamdır: genel tek kübit kapıları ve üniterler, evrensel hesap, Toffoli’nin ayrıntısı, çok kontrollü X, Qmod’da control ve phase, ancak ondan sonra bu logo için ucuz bir devre."
            }
          ]
        }
      ]
    },
    {
      "title": "Kaynak rafı · MIT, makale, güncel yayın",
      "lessons": [
        {
          "id": "mit-state",
          "free": true,
          "title": "MIT: durum bir birim vektördür",
          "kicker": "18.435J · ders 2",
          "meta": "Shor · Feldman notu",
          "lead": "Peter Shor’un 2003 güz dersinde hesap, dört postüla ile kurulur. İlki: kapalı bir sistemin durumu, sonlu boyutlu bir Hilbert uzayında uzunluğu 1 olan vektördür.",
          "reading": "Notu öğrenciler tutmuştur. Ders 2’yi Vitaly Feldman yazmıştır. PDF’yi açınca önce postüla 1’i, sonra küresel fazın durumu değiştirmediğini, sonra bileşik sistemin tensör çarpımı olduğunu oku. Kapı ve ölçüm aynı notun devamındadır; numarayı ezberleme, cümleyi kur.",
          "note": "Bu raf video sırasını kilitlemez. Soldaki Nielsen dersleri kendi sırasında durur. Buradaki notlar istediğin zaman açılır.",
          "links": [
            {
              "label": "Ders notlarının listesi",
              "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/pages/lecture-notes/"
            },
            {
              "label": "Ders 2 · Basics of Quantum Mechanics",
              "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec02/"
            },
            {
              "label": "Dersin sayfası",
              "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/"
            }
          ],
          "quiz": {
            "q": "Shor’un ders 2 notunda postüla 1 ne der?",
            "options": [
              "Durum, sonlu boyutlu bir Hilbert uzayında uzunluğu 1 olan bir vektördür",
              "Durum, ölçümden önce 0 ile 1 arasında klasik bir olasılıktır",
              "Durum, ancak laboratuvardaki aletin voltajı yazılırsa tanımlanır"
            ],
            "answer": 0,
            "why": "Feldman’ın notu, kapalı sistemin durumunu birim vektör diye yazar. Kübit, bu uzayın iki boyutlu örneğidir."
          },
          "cues": [
            {
              "en": "18.435J was taught by Peter Shor at MIT in fall 2003. The scribed notes are student write-ups, used with permission. Not every lecture was scribed. Lecture 2, Basics of Quantum Mechanics, was written by Vitaly Feldman.",
              "tr": "18.435J’yi 2003 güzünde MIT’de Peter Shor verdi. Ders notlarını öğrenciler tuttu; izinle yayımlanmışlar. Her dersin notu yok. Ders 2, kuantum mekaniğinin temeli, Vitaly Feldman’ın notudur."
            },
            {
              "en": "The lecture abstracts computation with four postulates and assumes finite-dimensional Hilbert spaces. Postulate 1 says that an isolated system has a complex inner-product space, and that its state is a unit vector in that space. A qubit is the two-dimensional case.",
              "tr": "Ders, hesabı dört postülayla kurar ve Hilbert uzaylarını sonlu boyutlu sayar. Postüla 1: kapalı bir sistemin karmaşık, iç çarpımlı bir uzayı vardır ve durumu o uzayda bir birim vektördür. Kübit, bunun iki boyutlu halidir."
            },
            {
              "en": "A global phase does not give a new state. Feldman notes that multiplying by e to the iθ leaves the physical state unchanged, so e to the iθ times a ket is the same state as the ket.",
              "tr": "Küresel faz yeni bir durum değildir. Feldman, e üzeri iθ ile çarpmanın fiziksel durumu değiştirmediğini yazar. Yani e üzeri iθ çarpı bir ket, o ketin aynı durumudur."
            },
            {
              "en": "Postulate 2 in that note is the composite system. If you have several systems, the joint state space is the tensor product of their spaces. A product state is what you get when each piece is prepared on its own. Entangled states live in the same big space and are not product states.",
              "tr": "O notta postüla 2, bileşik sistemdir. Birden fazla sistemin ortak durum uzayı, tek tek uzayların tensör çarpımıdır. Çarpım durumu, her parçayı ayrı hazırlayınca elde ettiğindir. Dolanık durumlar aynı büyük uzayda durur ve çarpım durumu değildir."
            },
            {
              "en": "Read the PDF for how a state moves and how a measurement answers. Do not memorize postulate numbers from another book and paste them onto this note. Shor’s scribe put the tensor product second. Nielsen’s textbook orders the same ideas differently.",
              "tr": "Durumun nasıl ilerlediğini ve ölçümün nasıl cevap verdiğini PDF’den oku. Başka kitaptaki postüla numaralarını bu nota yapıştırma. Shor’un notu tensör çarpımını ikinci sıraya koymuş. Nielsen’in kitabı aynı fikirleri başka sırada dizer."
            }
          ]
        },
        {
          "id": "mit-circuits",
          "free": true,
          "title": "MIT: kapı ve Deutsch–Jozsa",
          "kicker": "18.435J · ders 4 ve 5",
          "meta": "Liskov · Harmon",
          "lead": "Ders 4 klasik hesabı ve kuantum kapıyı kurar. Ders 5 ilk kuantum algoritmayı işler: Deutsch–Jozsa.",
          "reading": "İki PDF de kısa. Ders 4’te klasik devre modelinden kapıya geç. Ders 5’te Harmon, Nielsen ve Chuang’ın devre bölümlerine ve Deutsch–Jozsa’ya atıf verir. Algoritmanın vaadi şu: fonksiyonun sabit mi yoksa dengeli mi olduğunu, fonksiyonu her girdide çağırmadan ayırt etmek.",
          "note": "Bu ders, Nielsen videosundaki X, H ve CNOT’un ders notundaki yerini gösterir. Yeni bir kapı kümesi icat etmez.",
          "links": [
            {
              "label": "Ders 4 · Classical models and quantum gates",
              "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec04/"
            },
            {
              "label": "Ders 5 · Circuits and a simple algorithm",
              "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec05/"
            }
          ],
          "quiz": {
            "q": "Deutsch–Jozsa neyi ayırt eder?",
            "options": [
              "Söz verilen bir fonksiyonun sabit mi, dengeli mi olduğunu",
              "Bir sayının asal çarpanlarını",
              "Bir veri tabanındaki işaretli elemanın adresini"
            ],
            "answer": 0,
            "why": "Sabit fonksiyon her girdide aynı cevabı verir. Dengeli fonksiyon girdilerin yarısında 0, yarısında 1 verir. Arama ve çarpanlara ayırma başka algoritmalardır."
          },
          "cues": [
            {
              "en": "Lecture 4 is Classical Computation Models and Quantum Gates, scribed by Moses Liskov. It is the bridge from ordinary circuits to the quantum gate. Lecture 5 is Quantum Circuits and a Simple Quantum Algorithm, scribed by Dion Harmon on 18 September 2003.",
              "tr": "Ders 4, klasik hesap modelleri ve kuantum kapılar, Moses Liskov’un notudur. Sıradan devreden kuantum kapıya köprü odur. Ders 5, kuantum devreler ve basit bir kuantum algoritma, 18 Eylül 2003’te Dion Harmon’ın notudur."
            },
            {
              "en": "Harmon’s outline points at the Nielsen and Chuang sections on classical circuits, quantum programs, and gates, then at the Deutsch–Jozsa algorithm. The promise is a function that is either constant or balanced. Constant means the same answer on every input. Balanced means zero on half the inputs and one on the other half.",
              "tr": "Harmon’ın planı, Nielsen ve Chuang’ta klasik devre, kuantum program ve kapı bölümlerini, sonra Deutsch–Jozsa’yı gösterir. Söz şu: fonksiyon ya sabittir ya dengeli. Sabit, her girdide aynı cevap demektir. Dengeli, girdilerin yarısında 0, diğer yarısında 1 demektir."
            },
            {
              "en": "A classical check may have to read the function many times. The quantum circuit queries a reversible version of the function once, in superposition, and the interference leaves a single bit that says which promise holds. The lecture is the place to see the circuit, not a slogan.",
              "tr": "Klasik kontrol, fonksiyonu çok kez okumak zorunda kalabilir. Kuantum devre, fonksiyonun tersinir halini süperpozisyonda bir kez sorgular ve girişim, sözün hangisi olduğunu söyleyen tek bir bit bırakır. Devreyi sloganın yerine derste gör."
            },
            {
              "en": "The gates in that circuit are the ones already on this page: Hadamard, and a reversible embedding of a classical yes-no function. Deutsch–Jozsa is a promise problem. It is not Grover’s search and it is not Shor’s factoring.",
              "tr": "O devredeki kapılar bu sayfada zaten duranlardır: Hadamard ve klasik bir evet-hayır fonksiyonunun tersinir gömülmesi. Deutsch–Jozsa bir söz problemidir. Grover araması değildir, Shor’un çarpanlara ayırması da değildir."
            }
          ]
        },
        {
          "id": "mit-grover",
          "free": true,
          "title": "MIT: Grover’ın uygulamaları",
          "kicker": "18.435J · ders 11",
          "meta": "Cheng notu",
          "lead": "Grover’ın kendisi ders 10’dur ve o dersin notu tutulmamıştır. Tutulan not ders 11’dir: aramanın uygulamaları. Dersin kapağındaki kuantum sayım şekli bu notun yazarınındır.",
          "reading": "Yuan-Chung Cheng’in PDF’inde Grover yinelemesinin nereye uygulandığını izle. Kuantum sayım, işaretli elemanların sayısını, elemanları tek tek dökmeden kestirir. İşaret hâlâ bir eksi fazdır. Bu sitedeki logo oracle’ı da bir evet-hayır işaretidir; sayım ondan sonraki konudur.",
          "note": "Ders 8, 9 ve 10’un scribe notu yok. Eksik dersi uydurma. Liste, hangi notun durduğunu söyler.",
          "links": [
            {
              "label": "Ders 11 · Applications of Grover",
              "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/resources/qc_lec11/"
            },
            {
              "label": "Hangi derslerin notu var",
              "href": "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/pages/lecture-notes/"
            }
          ],
          "quiz": {
            "q": "18.435J’de Grover uygulamalarının tutulmuş notu hangi derstir?",
            "options": [
              "Ders 11, Yuan-Chung Cheng",
              "Ders 10, çünkü arama orada anlatılır ve notu tamdır",
              "Ders 2, postülaların içindedir"
            ],
            "answer": 0,
            "why": "Ders 10 Grover’ın aramasıdır ve scribe notu yoktur. Uygulamalar ders 11’dedir. Kuantum sayım şekli Cheng’in notuna aittir."
          },
          "cues": [
            {
              "en": "The lecture list gives Grover’s search as lecture 10 and its applications as lecture 11. Lecture 10 was not scribed. Lecture 11 was scribed by Yuan-Chung Cheng. The course front page credits him for the quantum-counting figure.",
              "tr": "Ders listesi Grover aramasını ders 10, uygulamalarını ders 11 diye koyar. Ders 10’un notu yoktur. Ders 11’i Yuan-Chung Cheng tutmuştur. Dersin kapağı, kuantum sayım şeklini ona bağlar."
            },
            {
              "en": "Grover’s iterate marks the solutions with a phase and reflects the state so the amplitude on those solutions grows. Quantum counting uses that iterate to estimate how many solutions there are, without listing them. The mark is still a minus sign on the yes answers.",
              "tr": "Grover yinelemesi çözümleri bir fazla işaretler ve durumu yansıtır; çözümlerin üzerindeki genlik büyür. Kuantum sayım, o yinelemeyle kaç çözüm olduğunu, onları tek tek dökmeden kestirir. İşaret hâlâ evet cevaplarındaki eksi fazdır."
            },
            {
              "en": "The logo oracle on this site is that same kind of mark: a pixel is black or it is not, and the circuit multiplies the black basis states by minus one. Counting how many black pixels there are would be the application in lecture 11. Building the cheap mark is the problem in lesson 9.",
              "tr": "Bu sitedeki logo oracle aynı türden bir işarettir: piksel ya siyahtır ya değildir, devre siyah baz durumlarını eksi birle çarpar. Kaç siyah piksel olduğunu saymak ders 11’in uygulamasıdır. Ucuz işareti kurmak ders 9’un problemidir."
            },
            {
              "en": "Lectures 8, 9, and 10 have no scribe notes on the public list. Factoring and the first pass of Grover are named there, and the PDF is absent. Use lecture 11 for the applications you can actually read, and do not invent the missing pages.",
              "tr": "Ders 8, 9 ve 10’un açık listede scribe notu yoktur. Çarpanlara ayırma ve Grover’ın ilk geçişi orada adıyla durur, PDF yoktur. Okuyabildiğin uygulama ders 11’dir. Eksik sayfayı uydurma."
            }
          ]
        },
        {
          "id": "papers-classic",
          "free": true,
          "title": "Dört referans makale",
          "kicker": "Kapı, arama, çarpan, teleport",
          "meta": "1993–1997",
          "lead": "Bu sayfadaki kapı, işaret ve dolanıklık cümlelerinin kaynakları dört makaledir. Her birinin tek cümlesini ayır.",
          "reading": "Önce başlığı ve sonucu oku, sonra ispatı. Barenco, tek kübit kapı ile CNOT’un yeterli olduğunu söyler. Grover, N elemanda aramayı kabaca karekök N sorguya indirir. Shor, çarpanlara ayırmayı kuantum bilgisayarda polinom zamanda kurar. Bennett ve arkadaşları, bilinmeyen bir kübiti iki klasik bit ve paylaşılan bir dolanık çift ile gönderir.",
          "note": "Makale, ders videosunun yerine geçmez. Video modeli kurar. Makale, modelin yayınlandığı yerdir.",
          "links": [
            {
              "label": "Barenco ve arkadaşları, 1995",
              "href": "https://arxiv.org/abs/quant-ph/9503016"
            },
            {
              "label": "Grover, 1996",
              "href": "https://arxiv.org/abs/quant-ph/9605043"
            },
            {
              "label": "Shor, 1997",
              "href": "https://arxiv.org/abs/quant-ph/9508027"
            },
            {
              "label": "Bennett ve arkadaşları, 1993",
              "href": "https://doi.org/10.1103/PhysRevLett.70.1895"
            }
          ],
          "quiz": {
            "q": "Barenco, Bennett, Cleve, DiVincenzo, Margolus, Shor, Sleator, Smolin ve Weinfurter’in 1995 makalesi neyi yeter diye gösterir?",
            "options": [
              "Tek kübit kapılar ile CNOT, kuantum devre için yeter",
              "Yalnız Hadamard, bütün hesabı kurar",
              "Ölçüm, kapının yerine geçer"
            ],
            "answer": 0,
            "why": "Makalenin başlığı temel kapılardır. Sonuç, tek kübitlik üniterler ile CNOT’tan genel bir kuantum devre kurulabileceğidir. Yarışmadaki u3 ve cx bu ailenin içindedir."
          },
          "cues": [
            {
              "en": "Barenco, Bennett, Cleve, DiVincenzo, Margolus, Shor, Sleator, Smolin, and Weinfurter, Elementary gates for quantum computation, Physical Review A 52, 3457 (1995). The arXiv id is quant-ph/9503016. One-qubit unitaries together with CNOT are enough to build a general quantum circuit.",
              "tr": "Barenco, Bennett, Cleve, DiVincenzo, Margolus, Shor, Sleator, Smolin ve Weinfurter, Elementary gates for quantum computation, Physical Review A 52, 3457 (1995). arXiv numarası quant-ph/9503016. Tek kübit üniterler ile CNOT, genel bir kuantum devre kurmaya yeter."
            },
            {
              "en": "Lov Grover, A fast quantum mechanical algorithm for database search, arXiv quant-ph/9605043, presented at STOC in 1996. For an unstructured list of N items, the number of queries drops from order N to order square root of N. The precise count carries a factor of π/4. The mark inside the iterate is the phase oracle.",
              "tr": "Lov Grover, A fast quantum mechanical algorithm for database search, arXiv quant-ph/9605043, 1996 STOC. Yapısız N elemanlık bir listede sorgu sayısı N mertebesinden karekök N mertebesine iner. Kesin sayının içinde π/4 çarpanı vardır. Yinelemenin içindeki işaret, faz oracle’ıdır."
            },
            {
              "en": "Peter Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer, SIAM Journal on Computing, 1997. The arXiv id is quant-ph/9508027. Factoring and the discrete logarithm move into polynomial time on a quantum computer. That is a different promise from Grover’s square-root speedup.",
              "tr": "Peter Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer, SIAM Journal on Computing, 1997. arXiv numarası quant-ph/9508027. Çarpanlara ayırma ve ayrık logaritma, kuantum bilgisayarda polinom zamana iner. Bu, Grover’ın karekök hızlanmasından başka bir sözdür."
            },
            {
              "en": "Bennett, Brassard, Crépeau, Jozsa, Peres, and Wootters, Teleporting an unknown quantum state via dual classical and Einstein-Podolsky-Rosen channels, Physical Review Letters 70, 1895 (1993). An unknown qubit is sent using two classical bits and a shared entangled pair. The qubit is not copied. The entangled pair is used up.",
              "tr": "Bennett, Brassard, Crépeau, Jozsa, Peres ve Wootters, Teleporting an unknown quantum state via dual classical and Einstein-Podolsky-Rosen channels, Physical Review Letters 70, 1895 (1993). Bilinmeyen bir kübit, iki klasik bit ve paylaşılan bir dolanık çift ile gönderilir. Kübit kopyalanmaz. Dolanık çift harcanır."
            }
          ]
        },
        {
          "id": "papers-now",
          "free": true,
          "title": "Çok atıf alan güncel yayınlar",
          "kicker": "NISQ’tan eşiğin altına",
          "meta": "2012–2025",
          "lead": "Atıfı biriken çizgi şu: gürültülü cihaz, sonra yüzey kodu, sonra eşiğin altında bir mantıksal bellek. Her makalenin ölçtüğü şeyi, vaat ettiği şeyden ayır.",
          "reading": "Sırayla oku. Preskill NISQ çağının adını koyar. Fowler yüzey kodunu uygulanabilir bir plan diye yazar. Arute 53 kübitte rastgele devre örneklemesi gösterir. Kim 127 kübitte, hata düzeltmesiz, beklenti değeri ölçer. Google 2023 ve 2025, yüzey kodunda mesafeyi büyütünce mantıksal hatanın düştüğünü ölçer.",
          "note": "Atıf sayısı her gün değişir. Burada sayı yazılmadı. Bu altı yayın, deneysel kuantum hesap literatüründe en çok dönülenlerdendir. Başlığı tıklayıp özeti oku.",
          "links": [
            {
              "label": "Preskill, NISQ, 2018",
              "href": "https://arxiv.org/abs/1801.00862"
            },
            {
              "label": "Fowler ve arkadaşları, yüzey kodu, 2012",
              "href": "https://arxiv.org/abs/1208.0928"
            },
            {
              "label": "Arute ve arkadaşları, Nature, 2019",
              "href": "https://www.nature.com/articles/s41586-019-1666-5"
            },
            {
              "label": "Kim ve arkadaşları, Nature, 2023",
              "href": "https://www.nature.com/articles/s41586-023-06096-3"
            },
            {
              "label": "Google, yüzey kodunu büyütmek, 2023",
              "href": "https://arxiv.org/abs/2207.06431"
            },
            {
              "label": "Google, eşiğin altı, 2025",
              "href": "https://arxiv.org/abs/2408.13687"
            }
          ],
          "quiz": {
            "q": "Google’ın 2025 Nature makalesi neyi ölçer?",
            "options": [
              "Yüzey kodunda mesafe artınca mantıksal hatanın düştüğünü, eşiğin altında",
              "Shor ile büyük bir sayının çarpanlarını",
              "Logo piksellerinin oracle derinliğini"
            ],
            "answer": 0,
            "why": "Willow işlemcisinde mesafe 5 ve mesafe 7 bellek vardır. Mesafe iki artınca döngü başına mantıksal hata yaklaşık 2,14 kat baskılanır. 101 kübitlik mesafe 7 kodda bu oran yüzde 0,143’tür. Bu bir çarpanlara ayırma deneyi değildir."
          },
          "cues": [
            {
              "en": "John Preskill, Quantum Computing in the NISQ era and beyond, Quantum 2, 79 (2018), arXiv 1801.00862. NISQ means noisy intermediate-scale quantum: tens to hundreds of qubits, too noisy for long fault-tolerant algorithms, still useful as laboratory devices. He treats fully fault-tolerant machines as a later goal, not as the machine already on the bench.",
              "tr": "John Preskill, Quantum Computing in the NISQ era and beyond, Quantum 2, 79 (2018), arXiv 1801.00862. NISQ, gürültülü orta ölçek demektir: onlarca ila yüzlerce kübit, uzun hataya dayanıklı algoritmalar için fazla gürültülü, laboratuvar aleti olarak yine işe yarar. Tam hataya dayanıklı makineyi tezgahtaki alet diye değil, sonraki hedef diye koyar."
            },
            {
              "en": "Fowler, Mariantoni, Martinis, and Cleland, Surface codes: Towards practical large-scale quantum computation, Physical Review A 86, 032324 (2012), arXiv 1208.0928. It is the working introduction to the surface code: stabilizers on a two-dimensional grid, logical qubits, and a logical CNOT made by braiding. Later experiments cite this plan.",
              "tr": "Fowler, Mariantoni, Martinis ve Cleland, Surface codes: Towards practical large-scale quantum computation, Physical Review A 86, 032324 (2012), arXiv 1208.0928. Yüzey kodunun çalışan girişidir: iki boyutlu ızgarada stabilizatörler, mantıksal kübitler ve örgüyle kurulan mantıksal CNOT. Sonraki deneyler bu planı anar."
            },
            {
              "en": "Arute and collaborators, Quantum supremacy using a programmable superconducting processor, Nature 574, 505–510 (2019). The processor ran random circuits on 53 working qubits. The claim is a sampling task that was, at the time, far cheaper on that chip than on classical supercomputers. The paper itself says factoring still needs fault-tolerant logical qubits.",
              "tr": "Arute ve çalışma arkadaşları, Quantum supremacy using a programmable superconducting processor, Nature 574, 505–510 (2019). İşlemci, çalışan 53 kübitte rastgele devreler koştu. İddia, o tarihte klasik süperbilgisayarda çipten çok daha pahalı olan bir örnekleme görevidir. Makalenin kendisi, çarpanlara ayırmanın hâlâ hataya dayanıklı mantıksal kübit istediğini söyler."
            },
            {
              "en": "Kim and collaborators, Evidence for the utility of quantum computing before fault tolerance, Nature 618 (2023). On a 127-qubit noisy processor they measure expectation values for circuits past brute-force classical simulation, and they check those values on circuits that can still be verified exactly. This is evidence before fault tolerance. It is not an error-corrected logical qubit.",
              "tr": "Kim ve çalışma arkadaşları, Evidence for the utility of quantum computing before fault tolerance, Nature 618 (2023). 127 kübitlik gürültülü bir işlemcide, kaba kuvvet klasik simülasyonu aşan devrelerin beklenti değerlerini ölçerler ve hâlâ tam doğrulanabilen devrelerde o değerleri kontrol ederler. Bu, hata düzeltmesinden önceki bir kanıttır. Hata düzeltilmiş bir mantıksal kübit değildir."
            },
            {
              "en": "Google Quantum AI, Suppressing quantum errors by scaling a surface code logical qubit, arXiv 2207.06431, published in Nature 614, 676–681 (2023). The logical error falls as the code distance grows. The 2025 follow-up is Quantum error correction below the surface code threshold, Nature 638, 920–926 (2025), arXiv 2408.13687. On Willow, a distance-7 memory uses 101 qubits and has 0.143 percent error per cycle. Increasing the distance by 2 suppresses the error by a factor Λ of 2.14. The logical memory outlives its best physical qubit by a factor of about 2.4.",
              "tr": "Google Quantum AI, Suppressing quantum errors by scaling a surface code logical qubit, arXiv 2207.06431, Nature 614, 676–681 (2023). Kod mesafesi büyüyünce mantıksal hata düşer. 2025 devamı, Quantum error correction below the surface code threshold, Nature 638, 920–926 (2025), arXiv 2408.13687. Willow’da mesafe 7 bellek 101 kübit kullanır ve döngü başına yüzde 0,143 hata verir. Mesafe 2 artınca hata, Λ çarpanı 2,14 ile baskılanır. Mantıksal bellek, en iyi fiziksel kübitinden yaklaşık 2,4 kat uzun yaşar."
            }
          ]
        }
      ]
    },
    {
      "title": "Sırada · transkript sonra işlenecek",
      "lessons": [
        {
          "id": "gates-general",
          "title": "Genel tek kübit kapısı ve üniterler",
          "meta": "Nielsen 6–8 · kilitli"
        },
        {
          "id": "universal",
          "title": "Evrensel hesaplama",
          "meta": "Nielsen 10 · kilitli"
        },
        {
          "id": "toffoli",
          "title": "Tersinir VE ve Toffoli",
          "meta": "IBM notu · kilitli"
        },
        {
          "id": "mcx",
          "title": "Aralık ve çok kontrollü X",
          "meta": "Barenco 1995 · kilitli"
        },
        {
          "id": "qmod",
          "title": "Qmod: control ve phase",
          "meta": "Classiq · kilitli"
        },
        {
          "id": "logo",
          "title": "Logoyu ucuz oracle yapmak",
          "meta": "Derinlik · kilitli"
        }
      ]
    }
  ]
};
