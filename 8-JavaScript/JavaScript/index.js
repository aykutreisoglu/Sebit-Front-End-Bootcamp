let email = "areisoglu29@hotmail.com";
let email2 = "areisoglu29@hotmail.com";

//birleştirme

let ad = "aykut";
let soyad = "reisoglu";
let adSoyad = ad + " " + soyad;
console.log(adSoyad);

//Karakter uzunlugu

console.log(adSoyad.length);

//String Metodları

console.log(adSoyad.toUpperCase()); //Büyük harfle yaz
console.log(adSoyad.toLowerCase()); //Küçük harfle yaz
console.log(adSoyad.indexOf("r")); //Karakterin kaçıncı indexte olduğunu bulmak için
console.log(adSoyad.lastIndexOf("u")); //sondan başlayarak yeri belirliyor.
console.log(adSoyad.slice(2, 8)); //başlangıc ve bitiş indexlerini yazdıktan sonra kesme işlemi yapıyor.(2 den öncesi 8 den sonrasını keser)
console.log(adSoyad.replace(" ", "")); // ilk space i alıp, space silindi ama sadece ilk gördüğü için yapıyor.
console.log(adSoyad.replaceAll(" ", "")); //Bütün spaceleri birleştiriyor.

//Number Metodları

let yaricap = 15;
const pi = 3.14;

let daireAlan = pi * yaricap ** 2;
console.log(daireAlan);

let kalan = yaricap % 4;
console.log(kalan); //kalan hesaplama (mod)
let sonuc = 6 * (15 - 4) ** 2;
console.log(sonuc);

let sayi = 13;
//sayı artırma yöntemleri

sayi = sayi + 1;
sayi++;
++sayi;

console.log(sayi);

let sayim = sayi++;
console.log(sayim); //ilk sayi değerini alıyor sonra ekliyor o yüzden artırılmış değeri göremiyoruz
let newsay = ++sayi;
console.log(newsay); //sayiyi direk ekliyip gösteriyor.

//NaN  kullanımı
console.log(15 / 4);
console.log(15 / "Aykut");

let birlestirme = "Dersi " + sayi + " kere tekrar ettim."; //burda sayı string e dönüştü.
console.log(birlestirme);

let age = "33";
console.log(age + 1);
console.log(typeof age);

age = Number(age); // number a cevirme

// == ve === arasında ki fark

console.log(age == 33); //sadece değere bakılıyor
console.log(age === "33"); // değer ve tip e bakılıyor
