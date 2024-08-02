// Importar la clase Ninja desde el archivo Ninja.js
const Ninja = require('./ninja');

// Clase Sensei que extiende de Ninja
class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

// Ejemplo de uso
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();