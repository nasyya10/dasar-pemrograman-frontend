//Declarative function
function fooBar(param1, param2, dst) {
    //Function body
}

//Anonymous Function
const fooBar = function (param1, param2,dst){
}
fooBar("abc",123,"etc"); //Pemanggilan function

//Arrow Function
const foobar = (param1, param2, dst) =>{
}
foobar("abc",123,"etc");

//Arrow function jika langsung memberikan return value
const penjumlahan = (bil1, bil2) => bil1 +bil2;
//Setara dengan
function penjumlahan(bil1, bil2){
    return bil1 + bil2;
}

//Required Parameter
const halo = nama =>"Halo ${nama}!";
//halo('Pasya') --> Hallo Pasya!
const penjumlahan1 = (a,b) => a+b;
//penjumalhan(5,4) -->9
const luasLingkaran = radius => {
    const PI = 22/7;
    return PI * radius ** 2;
} 
//luas lingkaran (7) --> 154

//Optional Parameter
const penjumlahan2 = (a,b=0)=>a+b;
//penjumlahan (5,5)-->10
//penjumlahan(5)-->5

//Callback Function
const tampilkanHasil = (hasil) => alert('Hasil = ${hasil}');
const penjumlahan3 = (a,b,display) => {
    let hasil = a + b;
    display(hasil); //callback funstion
}
penjumlahan3(9,6,tampilkanHasil)
penjumlahan3(9,6,(hasil)=>alert("Wah,hasilnya adalah ${hasil}"))

//Overflow Argument 
const penjumlahan4 = (a,b) => a + b
let hasil = penjumlahan4(3,4,5,6)
alert("hasil penjumlahan = &{hasil}")

//Rest Parameters
function jumlahkanSemuanya(...bilangan){
    let total = 0;
    for(let bil of bilangan)
        total += bil;
    return total;
}
let hasil1 = jumlahkanSemuanya(1,2,3,4,5,6)
let hasil2 = jumlahkanSemuanya(9,8,7)
alert(hasil)
alert(hasil2)
