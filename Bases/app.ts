(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  console.log(parejaHeroes);
  console.log(typeof parejaHeroes[0]);
  console.log(batman === "batman");
  const villano: (string | number | boolean)[] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  enum fuerzaHeroe {
    minimo = 0,
    humano = 1,
    velocista = 5,
    superHumano = 100,
  }
  // const fuerzaFlash = 5;
  // const fuerzaSuperman = 100;
  // const fuerzaBatman = 1;
  // const fuerzaAcuaman = 0;
  const fuerzaFlash: fuerzaHeroe = fuerzaHeroe.velocista;
  const fuerzaSuperman: fuerzaHeroe = fuerzaHeroe.superHumano;
  const fuerzaBatman: fuerzaHeroe = fuerzaHeroe.humano;
  const fuerzaAcuaman: fuerzaHeroe = fuerzaHeroe.minimo;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }

  function pedir_ayuda(): void {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})();
