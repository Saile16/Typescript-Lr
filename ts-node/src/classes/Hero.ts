import powers from "../data/powers";
export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get power(): string {
    // return strnig
    return (
      powers.find((power) => power.id === this.powerId)?.desc || "not found"
    );
  }
}

export class Hero2 {
  constructor(public name: string) {}
}
export class Hero3 {}
