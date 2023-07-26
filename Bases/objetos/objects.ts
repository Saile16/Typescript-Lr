(() => {
  let flash: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Barry Allen",
    age: 23,
    powers: ["Super Velocidad", "Viajar en el Tiempo"],
  };

  let superman: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Clark Kent",
    age: 60,
    powers: ["Super Fuerza"],
  };

  //   flash = {
  //     name: "Superman",
  //     age: 60,
  //     powers: ["Sper Fuerza"],
  //     getName() {
  //       return this.name;
  //     },
  //   };
  //   console.log(flash);
  //   console.log(flash.getName?.());
})();
