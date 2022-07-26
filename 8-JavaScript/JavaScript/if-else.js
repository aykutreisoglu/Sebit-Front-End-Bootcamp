let sifre = "aykutcan2sd";

if (sifre.length > 12) {
  console.log("Şifre güçlü");
} else if (sifre.length >= 8 && sifre.length < 12) {
  console.log("Yeterli Şifre");
} else if (sifre.length < 8) {
  console.log("Yetersiz Şifre");
} else {
  console.log("Lütfen geçerli şifre giriniz.");
}

// Break Continue ..
const notlar = [15, 45, 32, 0, 100, 90, 7];
for (let i = 0; i < notlar.length; i++) {
  if (notlar[i] === 32) {
    continue;
  }
  console.log(notlar[i]);
  if (notlar[i] === 100) {
    console.log("Bravo En yüksek notu sen aldın");
    break;
  }
}

// Switch -- Case

const not = "AA";
switch (not) {
  case "AA":
    console.log("Sensin..");
    break;
  case "BB":
    console.log("iyisin");
  case "CC":
    console.log("ehh ");
  case "DD":
    console.log("sınırdasın");
  case "FF":
    console.log("battın ");
  default:
    break;
}

// Global -- Local

let yas = 31;

if (true) {
  let yas = 33;
  console.log("içerideki" + yas);
  if (true) {
    let yas = 40;
    console.log("içeridekinin içindeki" + yas);
  }
}
console.log(yas); // Dışarda ki yas
