"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `Nice`;
    //   let myFunction: Function;
    // let myFunction: (y: number, z: number) => number;
    // myFunction = addNumbers;
    // console.log(myFunction(1, 2));
    //   myFunction = 10;
    //   console.log(myFunction);
    // let myFunction: (y: string) => string;
    // myFunction = greet;
    // console.log(myFunction("Alexander"));
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
