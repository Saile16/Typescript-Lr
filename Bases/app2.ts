(() => {
  //Funciones Básicas
  const sumar = (a: number, b: number): number => a + b;

  const contar = (heroes: string[]): number => heroes.length;

  const superHeroes: string[] = [
    "Flash",
    "Arrow",
    "Superman",
    "Linterna Verde",
  ];
  contar(superHeroes);

  //Parametros por defecto
  const llamarBatman = (llamar: boolean = false): void => {
    if (llamar) {
      console.log("Batiseñañ activada");
    }
  };

  llamarBatman();

  //Rest ?
  const unirHeroes = (...personas: string[]): string => {
    return personas.join(", ");
  };

  //Tipo funcion
  const noHaceNada = (
    numero: number,
    texto: string,
    booleano: boolean,
    arreglo: string[]
  ) => {};

  //crear el tipo de funcion que acepte la funcion "No hace nada"
  let noHaceNadaTampoco: (
    n: number,
    t: string,
    b: boolean,
    a: string[]
  ) => void;
  noHaceNadaTampoco = noHaceNada;
})();
