"use strict";
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activarBatiseñal = () => {
        return "Batiseñal Activada!";
    };
    console.log(typeof activarBatiseñal);
    const heroName = returnName();
})();
