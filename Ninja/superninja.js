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
      this.drinkSake(); // Llama al método drinkSake() de Ninja
      console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
  }
  
  // Ejemplo de uso
  const superSensei = new Sensei("Master Splinter");
  superSensei.speakWisdom(); // Output: "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
  superSensei.showStats();   // Output: Nombre: Master Splinter | Salud: 210 | Velocidad: 10 | Fuerza: 10
  