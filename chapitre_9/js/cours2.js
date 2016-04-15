var Film = {
    init: function (titre, annee) {
        this.titre = titre;
        this.annee = annee;
    },

    decrire: function () {
        var description = this.titre + "(" + this.annee + ")";
    }
};

var film1 = Object.create(Film);
film1.init("Alien", 2000);

var film2 = Object.create(Film);
film1.init("Alien 2", 2002);

var film3 = Object.create(Film);
film1.init("Alien 3", 2003);

var films = [];

films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
    console.log(film.decrire());
});
