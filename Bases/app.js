"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    console.log(parejaHeroes);
    console.log(typeof parejaHeroes[0]);
    console.log(batman === "batman");
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let fuerzaHeroe;
    (function (fuerzaHeroe) {
        fuerzaHeroe[fuerzaHeroe["minimo"] = 0] = "minimo";
        fuerzaHeroe[fuerzaHeroe["humano"] = 1] = "humano";
        fuerzaHeroe[fuerzaHeroe["velocista"] = 5] = "velocista";
        fuerzaHeroe[fuerzaHeroe["superHumano"] = 100] = "superHumano";
    })(fuerzaHeroe || (fuerzaHeroe = {}));
    // const fuerzaFlash = 5;
    // const fuerzaSuperman = 100;
    // const fuerzaBatman = 1;
    // const fuerzaAcuaman = 0;
    const fuerzaFlash = fuerzaHeroe.velocista;
    const fuerzaSuperman = fuerzaHeroe.superHumano;
    const fuerzaBatman = fuerzaHeroe.humano;
    const fuerzaAcuaman = fuerzaHeroe.minimo;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
