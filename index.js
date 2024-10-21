/*
1. Pomocí document.querySelector vyberte element body a uložte si jej do proměnné bodyElement. Pomocí této proměnné nastavte barvu pozadí elementu na hodnotu #e9e9e9.
*/
const bodyElement = document.querySelector("body");
bodyElement.style.backgroundColor = "#e9e9e9";

/*
2. Do jiné proměnné vyberte element s třídou news a nastavte mu barvu pozadí na bílou a maximální šířku na 60rem.
*/
const news = document.querySelector(".news");
news.style.backgroundColor = "white";
news.style.maxWidth = "60rem";

/*
3. Vyberte element h1 a nastavte mu (v JavaScriptu) třídu na news__title. Nadpis by měl změnit styl. Nastavte také obsah nadpisu na text Aktuální novinky.
*/
const heading = document.querySelector("h1");
heading.classList.add("news__title");
heading.textContent = "Aktuální novinky";

/*
4. Pomocí atributu id vyberte element obsahující první zprávu. Přidejte do jeho atributu class třídu post--main. První zpráva by tak měla mírně změnit svůj styl.
*/

const news1 = document.querySelector("#zprava1");
news1.classList.add("post--main");

/*
Pomocí CSS selektoru vyberte obrázek ve třetí zprávě (id zprávy je zprava3) a změňte jeho atribut src na obrázek images/zprava3-novy.jpg.

*/
const pic3 = document.querySelector("#zprava3 img");
pic3.src = "images/zprava3-novy.jpg";
