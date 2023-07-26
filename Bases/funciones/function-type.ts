(() => {
  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hola ${name}`;
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

  let myFunction: () => string;
  myFunction = saveTheWorld;
  console.log(myFunction());
})();
