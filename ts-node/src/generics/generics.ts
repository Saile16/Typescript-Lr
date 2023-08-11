export const printObject = (argument: any) => {
  console.log(argument);
};

//Con esto decimos que la funcion es de tipo generico
//por tanto tanto la funcion como el argumento seran del mismo tipo
//en este ejemplo lo hicimos con un print , mirar index.
export function genericFunction<T>(argument: T) {
  return argument;
}

export const genericFunctionArrow = <T>(argument: T) => {
  return argument;
};
