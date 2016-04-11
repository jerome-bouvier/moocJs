var chien = {
    nom : "Miguel",
    race : "Chiwawa",
    taille : 22,
    aboyer : function() {
        return "wouaf";
    }
};
console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());
