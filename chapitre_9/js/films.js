var Film = {
    init: function (titre, annee, real) {
        this.titre = titre;
        this.annee = annee;
        this.real = real;
    }
};


var film1 = Object.create(Film);
film1.init("alien 1", 2000, "Ridley Scott");

var film2 = Object.create(Film);
film2.init("Wall Street", 2013, "Martin Scorsese");

var film3 = Object.create(Film);
film3.init("Vice-Versa", 2015, "Pete Docter");

var films = [film1, film2, film3];

films.forEach(function (film) {
    console.log(film.titre + "(" + film.annee + ", " + film.real + ")")
});