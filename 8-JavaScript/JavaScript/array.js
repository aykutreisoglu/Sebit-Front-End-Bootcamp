let names = ["aykut", "aykut1", "aykut2"];
console.log(names);

let ages = [29, 30, 31];
console.log(ages[0]);

let random = ["aykut", "reis", 33];
console.log(random);
console.log(random.length);

let tireli = names.join("_"); //diziyi _ işaretli olarak ayırıyor ve birleştiriyor
console.log(tireli);

let sira = names.indexOf("aykut"); //dizinin kacıncı elemanı olduğunu gösteriyor.
console.log(sira);

//concat metodu
let added = names.concat(["gandalf", "legolas"]); // ana dizi etkilenmez yeni dizi oluşur.
console.log(added);
console.log(names);

names.push("leyla"); // diznin sonuna eleman ekler
console.log(names);
names.pop(); // son ekleneni siler
console.log(names);
