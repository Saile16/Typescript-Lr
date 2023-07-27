(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      //   console.log("CONSTRUCTOR AVENGER LLAMADO");
    }

    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      //   console.log("Constructor Xmen llamado");
    }

    get fullName() {
      return `${this.name}  - ${this.realName}`;
    }

    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error("El nombre es muy corto ");
      }
      this.name = name;
    }
    getFullNameDesdeXmen() {
      //   console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);
  wolverine.fullName = "nuads";
  //   console.log(wolverine.fullName);
  //   wolverine.getFullNameDesdeXmen();

  //   const nuevoAvenger = new Avenger("Hola", "mundo");
})();
