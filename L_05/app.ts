let userName : unknown = 10;
let userEmail: any;

userEmail =  userName;


function generateError(message:string,code:number):never{
    throw{message:message,statusCode:code  }

}

console.log("Internal server error",500);

