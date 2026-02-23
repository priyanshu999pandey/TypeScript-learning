// function return type 
function add1(num1:number, num2:number) : number{
    return num1+num2;
}

const output1 = add1(10,20);
console.log(output1);

let combinedFunction : (a:number,b:number)=>number ;
combinedFunction = add1;
console.log(combinedFunction(2,9));

// function type and callbacks 

function addHandle(n1:number, n2:number, cb :(n3:number)=>void){
  const result = n1 + n2;
  cb(result)
}

addHandle(100,200,(result:number)=>{
   console.log(result);
})
 
