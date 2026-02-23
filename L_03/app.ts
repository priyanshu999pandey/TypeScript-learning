// Type alias 

type User1  = {
    name:string,
    age:number,

}

const user0 : User1 = {
    name:"ajay",
    age:22
}

function greet0(user:User1){
   return `hello ${user.name}`
}
 const result0  = greet0(user0)
 console.log(result0);