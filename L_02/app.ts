
// Object 
const person1:{
    firstName:string;
    lastName:string;
    age:number;
    address:{
        streetName:string;
        pinCode:number
    }
} ={
    firstName:"Priyanshu",
    lastName:"Pandey",
    age:21,
    address:{
        streetName:"TulsiMarg",
        pinCode:201301
    }
}
console.log(person1);

//-------------


const person2:{
    firstName:string;
    lastName:string;
    age:number;
    address:{
        streetName:string;
        pinCode:number;
    };
    skills:string[]  // Array 
    
} ={
    firstName:"Priyanshu",
    lastName:"Pandey",
    age:21,
    address:{
        streetName:"TulsiMarg",
        pinCode:201301
    },
    skills:["java", "HTML"]
}

console.log(person2);


//-----------------------
let stringArray : string[];
stringArray = ["apple","mango"];

let anyArray : any[];  // loseing power of typeScript 
anyArray = ["apple",21,false]


//!Touple

const person3 : {
    name:string;
    data:[string,number,boolean]
} = {
    name:"prince",
    data:["male",25,true]
}

person3.data[1] = 27;
console.log(person3);

//--------------
//!enum

enum Role {
    ADMIN,HR,EXMPOLYEE
}

const person4 = {
    name:"abc",
    age:22,
    role:Role.ADMIN
}

if(person4.role === Role.ADMIN){
    console.log("Admin");
}
else if(person4.role === Role.HR){
    console.log("Hr");
}


  


