(() => {
  const hero: string = "Flash";

  function returnName(): string {
    return hero;
  }

  const activarBatiseñal = () => {
    return "Batiseñal Activada!";
  };

  console.log(typeof activarBatiseñal);

  const heroName = returnName();
})();
