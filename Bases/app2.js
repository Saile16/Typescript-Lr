"use strict";
//Funciones Básicas
const sumar = (a, b) => a + b;
const contar = (heroes) => heroes.length;
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log("Batiseñañ activada");
    }
};
llamarBatman();
//Rest ?
const unirHeroes = (...personas) => {
    return personas.join(", ");
};
//Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => { };
//crear el tipo de funcion que acepte la funcion "No hace nada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
