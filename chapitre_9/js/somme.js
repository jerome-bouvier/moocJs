var valeurs = [11, 3, 7, 2, 9, 10];
var somme = 0;
var max = 0;

for (var i = 0; i < valeurs.length; i++) {
    somme += valeurs[i];
    if (valeurs[i] > max) {
        max = valeurs[i];
    }
};


console.log(somme);
console.log(max);
