(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): void;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Alexande",
    age: 455,
    address: {
      id: 123,
      zip: "KEY 2 CD",
      city: "Otawa",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: "Melissa",
    age: 60,
    address: {
      id: 123,
      zip: "KEadsasd",
      city: "Canada",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };
})();
