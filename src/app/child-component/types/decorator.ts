@callme
export class Decorator {
  name: string;
  age: string;

  constructor(name: string, age: string) {
    this.name = name;
    this.age = age;
  }
}

function callme(constructor: Function) {
    console.log(constructor) // it will log class Decorator 
}
