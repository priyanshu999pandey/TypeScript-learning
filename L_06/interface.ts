console.log("interface");

//-----------interface-----------------------------------------

// interfcae with Object 
interface Person {
    name:string;
    age:Number
}

const user: Person = {
    name:"priyashu",
    age:22,
}

console.log(user);



//-----------interface with class

interface Animal{
    name:string;
    color:string;
    age:number;
    showDetail:()=> void
}

class Dog implements Animal{
    name: string;
    color: string;
    age: number;

    constructor(name:string,color:string, age:number){
        this.name = name;
        this.color = color;
        this.age = age;
    }

    showDetail(){
        console.log(` name :${this.name} age:  ${this.age} color ${this.color}`);

    }
}

const d1 = new Dog("german shefered", "white",22);

d1.showDetail()


// ------------ interface extends interface------------------

interface User1{
     name:string
}
interface User2 extends User1{
    age:number
    showInfo:()=>void
}

class PersonDetail  implements User2{
    name:string;
    age: number;

    constructor(n:string, a:number){
        this.name = n;
        this.age  = a;
    }

    showInfo(){
        console.log(`${this.name} ${this.age}`);
    }

}

const p1 = new  PersonDetail("prince",25);
p1.showInfo()


