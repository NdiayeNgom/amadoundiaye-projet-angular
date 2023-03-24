/* let person: string;
person = "Ngoye";

console.log(`${person} Bonjour tout le monde`);

const names = ["SANE", "DIERY", "NDIAYE"];
names.forEach(function (s) {
    console.log(`Bonjour ${s}`);
});
 */

class Rebot {
    prenom: string;
    nom: string;
    age: number;
    
    constructor(prenom: string, nom: string, age: number ) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
    }

    sayHello(){
        console.log(`${this.prenom} ${this.nom}, ${this.age} ans a dit: Bonjour tout le monde!`);
    }
}

const users = [
    { prenom: "Moussa", nom: "FALL", age: 22 },
    { prenom: "Ngoye", nom: "NDIAYE", age: 22 },
];

users.forEach(function (u) {

    let gpt = new Rebot(u.prenom, u.nom, u.age);

    gpt.sayHello();
});


// compilation : npx tsc index.ts
// Execution : node index.js