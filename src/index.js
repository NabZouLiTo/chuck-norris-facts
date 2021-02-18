import "./styles.css";

const factMessageHTMLElement = document.querySelector(".factMessage");
//TODO récupérer l'élément html avec la classe .factMessage

const nextButtonElement = document.querySelector(".nextButton");

// TODO récupérer l'élément html avec la classe .nextButton
const previousFacts = [];

// TODO: appeller l'api Chuck Norris Fact
// Url: https://api.chucknorris.io/jokes/random
const fetchFact = () =>
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((fact) => {
      factMessageHTMLElement.innerText = fact.value;
    });

// TODO: faites en sorte qu'un  fact s'affiche dès le chargement de la page
fetchFact();
// TODO: brancher vous sur l'événement click du nextButtonElement
nextButtonElement.onclick = () => fetchFact();

// TODO: deployer le site web sur netlify

// TODO: insérer un li pour chaque fact dans .previousFacts
