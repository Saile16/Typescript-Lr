"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 23,
        powers: ["Super Velocidad", "Viajar en el Tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super Fuerza"],
        getName() {
            return this.name;
        },
    };
})();
