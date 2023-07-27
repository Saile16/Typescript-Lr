(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };

  //   const { poder, vision } = avengers;
  //   console.log(poder, vision.toUpperCase());

  const printAvenger = ({ vision, activo, ...resto }: Avengers) => {
    console.log(vision, "activo ? ", activo, resto);
  };

  //   printAvenger(avengers);

  const avengersArr: string[] = ["Cap. América", "Iron man", "Hulk"];
  const [cap, ironman] = avengersArr;
  console.log(cap, ironman);
})();
