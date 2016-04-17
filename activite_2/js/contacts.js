/* 
Activité : gestion des contacts
*/

var Contact = {
    init: function (prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    },
    decrire: function () {
        var description = "Nom : " + this.nom + ", " + "prénom : " + this.prenom;
        return description;
    }
};

function decrireOptions() {
    var description = "1 : " + options[1] + "\n" + "2 : " + options[2] + "\n" + "0 : " + options[0];
    return description;
};

// création & init des contacts
var contact1 = Object.create(Contact);
contact1.init("Carole", "Lévisse");
var contact2 = Object.create(Contact);
contact2.init("Mélodie", "Nelsonne");

var contacts = [contact1, contact2];

// création des options
var options = ["Quitter", "Lister les contacts", "Ajouter un contact"];

// welcome message
console.log("Bienvenue dans le gestionnaire des contacts !");
console.log(decrireOptions());

var choix = Number(prompt("Choisissez une option :"));

while (choix >= 3 || choix < 0) {
    var choix = Number(prompt("Choisissez une option :"));
};

while (choix !== 0) {
    if (choix === 1) {
        // lister les contacts  
        console.log("Voici la liste de vos contacts :")
        contacts.forEach(function (contact) {
            console.log(contact.decrire(contact));

        });
        console.log(decrireOptions());
    } else {
        // ajout d'un contact
        var nouveauPrenom = prompt("Entrer le prénom du contact :");
        var nouveauNom = prompt("Entrer le nom du contact : ");

        var nouveauContact = Object.create(Contact);
        nouveauContact.init(nouveauPrenom, nouveauNom);
        contacts.push(nouveauContact);
        console.log("Le nouveau contact a été ajouté !");
        console.log(decrireOptions());
    };
    choix = Number(prompt("Choisissez une option :"));
    while (choix >= 3 || choix < 0) {
        choix = Number(prompt("Choisissez une option :"));
    };
};

console.log("Bye !");