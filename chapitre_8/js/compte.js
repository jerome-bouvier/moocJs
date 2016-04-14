var CompteBancaire = {
    initCB: function (nom, solde, taux) {
        this.nom = nom;
        this.solde = solde;
    },

    debiter: function (montant) {
        this.solde = this.solde - montant;
    },

    crediter: function (montant) {
        this.solde = this.solde + montant;
    },

    decrire: function () {
        var description = this.nom + ", solde : " + this.solde;
        return description;
    }
};

var CompteEpargne = Object.create(CompteBancaire);
// Initialise le compte épargne
CompteEpargne.initCE = function (titulaire, solde, tauxInteret) {
    this.initCB(titulaire, solde);
    this.tauxInteret = tauxInteret;
};
// Calcule et ajoute les intérêts au solde cu compte
CompteEpargne.ajouterInterets = function () {
    var interets = this.solde * this.tauxInteret;
    this.solde += interets;
};


var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);

var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));

compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte

compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());
