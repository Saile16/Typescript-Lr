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
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + " " + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: "Alexande",
        age: 455,
        address: {
            id: 123,
            zip: "KEY 2 CD",
            city: "Otawa",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: "Melissa",
        age: 60,
        address: {
            id: 123,
            zip: "KEadsasd",
            city: "Canada",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map