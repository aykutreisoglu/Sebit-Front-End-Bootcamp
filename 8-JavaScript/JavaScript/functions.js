function Hello() {
  console.log("Hello");
}
Hello();
Hello();
Hello();

//Fonksiyonlara parametre gönderme ..

const aykut = function (ad, soyad) {
  // default parametre olarak ad="aykut" verseydik Aşağıdaki parametre default u ezecekti.
  console.log(`Ad Soyad ${ad} ${soyad}`);
};

aykut("Aykut", "Reisoglu"); // parametre gönder

const kareAlani = function (kenar) {
  return kenar * kenar;
};

let sonuc = kareAlani(6);
console.log(sonuc);
//Arrow Function

// const kare = (kenar) => {
//   return kenar * kenar;
// };
// let sonuc2 = kare(6);
// console.log(sonuc2);

// const kare = (kenar) => kenar ** 2;

// console.log(kare(7));

// const string = () => "Aykut";
// console.log(string());

//Uygulama

//Ürünlerin ham fiyatını verip vergili halinin toplamını bulan bir hesaplama

const urunSatis = function (urunler, vergi) {
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};

console.log(urunSatis([10, 20, 30], 0.25));

//arrow function ile hesap
const urunSatis2 = (urunler, vergi) => {
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};

console.log(urunSatis([10, 20, 30], 0.25));
