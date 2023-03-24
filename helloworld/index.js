/* let person: string;
person = "Ngoye";

console.log(`${person} Bonjour tout le monde`);

const names = ["SANE", "DIERY", "NDIAYE"];
names.forEach(function (s) {
    console.log(`Bonjour ${s}`);
});
 */
var Rebot = /** @class */ (function () {
    function Rebot(prenom, nom, age) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
    }
    Rebot.prototype.sayHello = function () {
        console.log("".concat(this.prenom, " ").concat(this.nom, ", ").concat(this.age, " ans a dit: Bonjour tout le monde!"));
    };
    return Rebot;
}());
var users = [
    { prenom: "Moussa", nom: "FALL", age: 22 },
    { prenom: "Ngoye", nom: "NDIAYE", age: 22 },
];
users.forEach(function (u) {
    var gpt = new Rebot(u.prenom, u.nom, u.age);
    gpt.sayHello();
});
// compilation : npx tsc index.ts
// Execution : node index.js
