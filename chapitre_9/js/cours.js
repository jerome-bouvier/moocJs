var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];
var tableauVide = [];

console.log(films.length); // Affiche 3
console.log(tableauVide.length); //affiche 0

console.log(films[0]); // Affiche WallStreet

for (var i = 0; i < films.length; i++) {

    console.log(films[i]);

}

// équivalent à 

films.forEach(function (film) {
    console.log(film);
});

films.push("Les Bronzés");
console.log(films[3]);
