console.log("Merhaba Kodalma.İO")
//Değişken tanımlama (Eski js de "var" ile tanımlanıyor ama Yeni Js de "let" ile tanımlanıyor)
let dolarDun = 9.20 //Değerini Vermessek'de Değeri Tanımlanmamış Olarak Sayılır . 
//dolarDun = "Ankara" //Açık Olursa Değeri Ankara Olarak Alacak Ama Kapalıyken 9.20 Olarak Alacak.

//JS Type safe Değildir.
let dolarBugun = 9.30
dolarDun = "9.20"
{//Bu bloğu Başka bir yer olarak görüyor ondan dolayı değeri değiştirmez (let ile yapılırsa ) (var ile yapılırsa Değiştirir)
    let dolarDun = 9.10   
}


console.log(dolarDun)
//var dolarDun = 9.20 //DolarDun Değeri Eğer Burada Tanımlanıp Bir Üst Satırda yazdırılmak İstenirse Program O değeri Tanımlanmamış Olarak Sayar . 

 const euroDun = 11.2 //Const ile Sabit Bir Veri Tanımlıyabiliriz . Yani Değerini Değiştiremeyiz.
 //euroDun = 11

 console.log(euroDun)

 //Array (Dizi) Tanımlama
 //Değişken İsimlendirme Şekilleri
 //camelCassing
 //PascalCasing
 let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredileri"]
 //let konutKredileri = [12,"Emlak Konut Kredisi",["a","b","c"]] //Bu Şekildede Tanımlanabilir
 
 //Alttaki Htmll Kodunun Uyarlanmış Hali
 console.log("<ul>")
 for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
 }
 console.log("</ul>")
 
//  <ul>
//     <li>Konut Kredisi</li>
//     <li>Emlak Konut Kredisi</li>
//     <li>Kamu Konut Kredisi</li>
//  </ul>

 console.log(konutKredileri)