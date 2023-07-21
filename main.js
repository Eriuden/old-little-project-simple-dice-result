const dice = [1,2,3,4,5,6]
const throwDice = document.querySelector("button");
const resultCase = document.querySelector("p");

function diceFace(){

    //Il faut s'y prendre d'une manière un peu détournée
    //avec .length il récupère juste l'index
    //donc: de 0 à 5
    //donc on lui demande d'afficher l'array selon l'index
    //du coup il mettra la valeur qu'il aura pioché au lieu de son index

    let results = dice[Math.floor(Math.random()*dice.length)];
    resultCase.textContent = `le résultat est ${results}`

}

throwDice.addEventListener('click', diceFace);

