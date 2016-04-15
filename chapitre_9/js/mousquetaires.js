var mousquetaires = ["Athos", "Porthos", "Aramis"];

console.log("Voici les trois mousquetaires \n");

for (var i = 0; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i] + "\n");
};

mousquetaires.push("D'Artagnan");

console.log("Maintenant ils sont quatre \n");

mousquetaires.forEach(function (mousquetaire) {
    console.log(mousquetaire);
});
