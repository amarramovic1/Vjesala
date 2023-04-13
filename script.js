// niz objekata koji predstavljaju oblast i ponudjene rijeci
const pitanja = [
    {
      oblast: "Pogodite grad u Crnoj Gori",
      ponudjeno: [
        "podgorica",
        "budva",
        "bar",
        "kolašin",
        "danilovgrad",
        "tivat",
        "kotor"
      ]
    },
    {
      oblast: "Pogodite programski jezik",
      ponudjeno:[
        "javascript",
        "php",
        "python",
        "cpp",
        "csharp",
        "kotlin"
      ]
    }
  ];
let abeceda = ['a','b','c','č','ć','d','dž','đ','e','f','y','g','h','i','j','k','l','lj','m','n','nj','o','p','r','s','š','t','u','v','z','ž'];

var brojac = 0
var br = 0
var randomPitanje;
var randomPonudjeno;

function prikaziSlova() {     
  let buttons = '';                                   //id="dugme-' + slovo + '" dodato za disabled
  abeceda.forEach(function(slovo) {                   //onclick="provjeriDugme(\'' + slovo + '\')" da se provjeri koje je dugme kliknuto
    buttons += '<button id="dugme-' + slovo + '" class="dugme btn btn-primary ms-2" onclick="provjeriDugme(\''+slovo+'\')">' + slovo + '</button>';
  });
  document.getElementById('slovo').innerHTML = buttons;
  krajIgre()
  prikaz()
}

function prikaz(){
    randomPitanje = pitanja[Math.floor(Math.random() * pitanja.length)];
    randomPonudjeno = randomPitanje.ponudjeno[Math.floor(Math.random() * randomPitanje.ponudjeno.length)];
    document.getElementById('naziv').innerHTML = randomPitanje.oblast 
    dCrta()
}

function dCrta(){
    let prikaz = ''
    for(let i=0; i<randomPonudjeno.length; i++){
        prikaz += '_'+' '
    }
    document.getElementById('donjaCrta').innerHTML = prikaz
}
 
//novi metod
function provjeriDugme(slovo) {
  let pogodak = false;
  let prikazano = document.getElementById('donjaCrta').innerHTML.split(' '); //dobijamo niz karaktera
  for (let i = 0; i < randomPonudjeno.length; i++) {
    if (slovo === randomPonudjeno[i] && prikazano[i] === '_') { //ako su oba uslova zadovoljena
      prikazano[i] = slovo; // zamijeni karakter u nizu
      pogodak = true;
      break;
    }
  }

  if (pogodak) {
    br++;
    if(br === randomPonudjeno.length){
      alert(`Kraj igre! Da li ste tacan odgovor!`);
      abeceda.forEach(function(slovo) { //dodato za disabled 
        document.getElementById("dugme-" + slovo).disabled = true;
      });
      krajIgre()
    }
    document.getElementById('donjaCrta').innerHTML = prikazano.join(' '); // ažuriraj prikazano
  } else {
    brojac++;
    document.getElementById('slika').innerHTML = '<img src="./' + brojac + '.png">';
    if (brojac > 6){
      alert(`Kraj igre! Tacna vrijednost je bila: ${randomPonudjeno}`);
      krajIgre()
      prikaz();
    } 
  }
}
//novi metod
function krajIgre(){
  br = 0;
  brojac = 0;
  document.getElementById('slika').innerHTML = '<img src="./' + brojac + '.png">';
}
