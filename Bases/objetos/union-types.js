"use strict";
(() => {
    let myCustomVariable = "Alexander";
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce",
        age: 12,
        powers: [1],
    };
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
})();
