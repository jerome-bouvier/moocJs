var motSaisi = prompt("saisir un mot");

function compterVoyelles(mot) {
    var nbVoyelles = 0;
    var i = 0;
    for (i = 0; i < mot.length; i++) {
        var lettre = mot[i].toLowerCase();
        if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') || (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
            nbVoyelles++;
        }
    }
    return nbVoyelles;
}

function inverser(mot) {
    var motInverse = "";
    var i = 0;
    for (i = 0; i < mot.length; i++) {
        motInverse  = mot[i] + motInverse;
    }
    return motInverse;
}

function convertirEnLeet(mot){
    var motEnLeet = "";
    var i = 0;
    for (i = 0; i < mot.length; i++) {
        motEnLeet = motEnLeet + trouverLettreLeet(mot[i]);
    }

    return motEnLeet;
}

function trouverLettreLeet (lettre){
    var lettreEnLeet = lettre.toLowerCase();
    switch (lettreEnLeet) {
        case "a" :
            lettreEnLeet = "4";
            break;
        case "b" :
            lettreEnLeet = "8";
            break;
        case "e" :
            lettreEnLeet = "3";
            break;
        case "l" :
            lettreEnLeet = "1";
            break;
        case "o" :
            lettreEnLeet = "0";
            break;
        case "s" :
            lettreEnLeet = "5";
            break;
    }
    return lettreEnLeet;
}


console.log("Le mot " + motSaisi + " contient " + motSaisi.length + " caractères");
console.log("Il s'écrit en minuscules "+ motSaisi.toLowerCase());
console.log("Il s'écrit en majuscules "+ motSaisi.toUpperCase());
console.log("Il contient " + compterVoyelles(motSaisi) + " voyelles et " + (motSaisi.length - compterVoyelles(motSaisi)) + " consonnes") ;
console.log("Il s'écrit " + inverser(motSaisi) + " à l'envers");
if (motSaisi.toLowerCase() === inverser(motSaisi).toLowerCase()) {
    console.log("Il s'agit d'un palindrome");
} else {
        console.log("Il ne s'agit pas d'un palindrome");

}
console.log("En l33t sp34k : " + convertirEnLeet(motSaisi));
