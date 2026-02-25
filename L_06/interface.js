"use strict";
console.log("interface");
const user = {
    name: "priyashu",
    age: 22,
};
console.log(user);
class Dog {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
    showDetail() {
        console.log(` name :${this.name} age:  ${this.age} color ${this.color}`);
    }
}
const d1 = new Dog("german shefered", "white", 22);
d1.showDetail();
class PersonDetail {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    showInfo() {
        console.log(`${this.name} ${this.age}`);
    }
}
const p1 = new PersonDetail("prince", 25);
p1.showInfo();
