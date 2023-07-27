"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500,
    };
    const printAvenger = (_a) => {
        var { vision, activo } = _a, resto = __rest(_a, ["vision", "activo"]);
        console.log(vision, "activo ? ", activo, resto);
    };
    const avengersArr = ["Cap. América", "Iron man", "Hulk"];
    const [cap, ironman] = avengersArr;
    console.log(cap, ironman);
})();
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Amorsuit",
    };
    const captainAmerica = {
        name: "Capitán América",
        weapon: "Escudo",
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir",
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
(() => {
})();
//# sourceMappingURL=main.js.map