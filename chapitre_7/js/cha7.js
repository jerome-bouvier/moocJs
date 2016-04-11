var perso = {
    nom: "Poney Sauvage",
    pv: 120,
    force: 52,
    xp: 0,
    //description du perso
    decrire : function() {
        var description = this.nom + " a " + this.pv + " points de vie et " + this.force + " en force et " + this.xp + " poinst d'xp" ;
        return description;
    }
};

console.log(perso.decrire());

//se prend une flêche
perso.pv = perso.pv - 20;

// trouve un bracelet de force
perso.force = perso.force + 40 ;

// new compétence
perso.xp = perso.xp + 10;

console.log(perso.decrire());
