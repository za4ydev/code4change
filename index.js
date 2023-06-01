const container = document.getElementById("first-speak");
const span = document.querySelector("span");
const world = document.getElementById("world");
const person = document.getElementById("person");

const texts = [
  "¡Hola, mi nombre es Mateo!",
  "Necesito tu ayuda para el cambio climatico...",
  "El cambio climatico es un problema que afecta a todo el mundo.",
  "Esto incluye a los animales, las plantas y a nosotros los humanos.",
  "Estarias dispuesto a ayudarme?",
];

let charIndex = 0;
let i = 1;

span.textContent = texts[0];

const typingEffect = (text) => {
  if (charIndex < text.length) {
    span.textContent = text.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(() => typingEffect(text), 10);
  } else {
    $(document).click(handleClick);
  }
};

const handleClick = (e /**: MouseEvent | TouchEvent */) => {
  if (e.target) {
    if (i !== texts.length) {
      span.textContent = "";
      charIndex = 0;
      typingEffect(texts[i]);
      i++;
    } else {
      $(world).fadeOut(1000, () => {
        const main = document.getElementById("main");
        main.classList.remove("hidden");
      });
    }

    $(document).off("click", handleClick);
  }
};

$(document).click(handleClick);
