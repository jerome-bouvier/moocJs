var mots = [];
var i = 0;

mots.push(prompt("saisir un mot"));

while (mots[i].toLowerCase !== "stop") {
    i++;
    mots.push(prompt("saisir un mot"));

};

mots.forEach(function (mot) {
    console.log(mot)
});