/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

//Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var saisie = Number(prompt("Entrer un nombre"));
while (saisie !== solution) {
    if (saisie < solution) {
        console.log(saisie + " est trop petit");
    } else {
        console.log(saisie + " est trop grand");
        }
    var saisie = Number(prompt("nouvel essai"));
}
console.log("Bravo, la solution était " + solution );
