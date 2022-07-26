// console.log("Merhaba");
// console.log("Merhaba");

//Degisken tanımları
// var
// let
// const

let gun = 29;
let ay = 06;
let yıl = 1989;

gun = 15; //let ile tanımladığımızdan dolayı 2.defa tanımlanmaz ama update edilebilir.

console.log(gun, ay, yıl);
console.log(
  "Aykut REİSOĞLU " + gun + "/" + ay + "/" + yıl + " tarihinde doğmuştur."
);

const ikinciElAraba = 200000;
// ikinciElAraba = 150; //const ile tanımlandığından update edilemez. (Console.log u kontrol ettiğimizde hatayı görebiliriz.)
console.log(ikinciElAraba);

var a = 5;
var a = 3;
// aynı değeri tekrar tekrar yazabiliyoruz buda uzun projelerde problem çıkaracaktır.
console.log(a);

var c = 5;
console.log("C değeri dışarda " + c);

{
  var c = 3;
  console.log("C değeri içerde " + c);
  //içerde tanımladığımız C değeri dışarda geçerli oluyor ve kodu bozuyor.Bu yüzden "var " kullanımı uygun değil !
}

console.log("C değeri dışarda " + c);

let d = 5;
console.log("D değeri dışarda " + d);

{
  let d = 3;
  console.log("D değeri içerde " + d);
  //İçerde tanımladığımız D değeri sadece içerde geçerli
}

console.log("D değeri dışarda " + d);
