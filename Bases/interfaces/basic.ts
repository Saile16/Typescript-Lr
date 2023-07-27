(() => {
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: "Barry Allen",
    age: 23,
    powers: ["Super Velocidad", "Viajar en el Tiempo"],
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 60,
    powers: ["Super Fuerza"],
    getName() {
      return this.name;
    },
  };
})();
