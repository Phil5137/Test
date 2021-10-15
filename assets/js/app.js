

/* SLIDER */


/* OPRETTELSE AF GLOBALE VARIABLER */
let i = 0;
let timer = 3000; /* ANGIVET I MILLISEKUNDER */
let images = [];

/* BILLEDER OPRETTES I RÆKKEFØLGE */
images[0] = "assets/images/SliderImg1.jpg";
images[1] = "assets/images/SliderImg2.jpg";
images[2] = "assets/images/SliderImg3.jpg";

/* FUNKTION TIL AT UDFØRE SLIDER OPRETTES*/
function changeImg() {
  /* GÅR IND OG FINDER ELEMENTET MED "SLIDER" CLASSEN OG SIGER AT DENS SRC SKAL VÆRE LIGMED BILLEDETS INDEX FRA ARRAYEN */
  document.getElementById("slider").src = images[i];

  /* HVIS BILLEDETS INDEX ER MINDRE END 4 SKAL DEN LÆGGE EN TIL. DET VIL SIGE DEN GÅR FRA BILLEDET 1 (INDEX 0) TIL BILLEDE 5 (INDEX 4) */
  if (i < 2) {
    i++;

    /* DA DER KUN ER OP TIL INDEX 4 (BILLEDE 5) SKAL DEN SIGE AT INDEX ER LIGMED 0, DET VIL SIGE DEN GÅR TILBAGE TIL DET FØRSTE BILLDE I ARRAYEN (INDEX 0) */
  } else {
    i = 0;
  }

  /* DEN BLIVER KOBLET SAMMENMED TIMEREN, SOM ER 3000 MILLISEKUNDER */
  setTimeout("changeImg()", timer);
}

/* ONLOAD OPRETTES*/
window.onload = changeImg();






/* MODAL */

/* OPRETTELSE AF GLOBALE VARIABLER */
const link = document.querySelectorAll(".priceListLink");
const priceListContainer = document.getElementById("priceListContainer");
const closeBtn = document.getElementById("closeBtn");


/* LAVER EN FOR LØKKE SOM LOOPER LINKET IGENNEM OG GIVER DEN ET CLICK EVENT */
for (let index = 0; index < link.length; index++) {
  link[index].addEventListener("click", (event) => {
  
    /* SØRGER FOR AT LINKET IKKE GØR SOM DEN ER VANDT TIL */
    event.preventDefault();

     /* GIVER BEHOLDEREN PÅ PRISLISTEN DISPLAY BLOCK, FOR AT DEN BLIVER VIST */
    priceListContainer.style.display = "block";
  });
}

/* LAVER EN FUNCTION SÅ DET ER MULIGT AT BRUGE KNAPPEN TIL AT LUKKE DEN IGEN */

function closeContact() {
  priceListContainer.style.display = "none";
}






/* BURGER MENU */

/* OPRETTELSE AF GLOBALE VARIABLER */
const nav = document.getElementById("navLinks");
const h1 = document.getElementById("mainHeadline");


/* LAVER EN FUNCTION SOM TOGGLER KLASSEN ACTIVE PÅ UL'EN */
function openMenu() {
  nav.classList.toggle("active");
  h1.style.display = "none";
}

/* GRUNDEN TIL DEN VIRKER ER FORDI BURGERMENU IKONET HAR ET ONCLICK INDE I HTML */
