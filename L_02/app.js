// Object 
var person1 = {
    firstName: "Priyanshu",
    lastName: "Pandey",
    age: 21,
    address: {
        streetName: "TulsiMarg",
        pinCode: 201301
    }
};
console.log(person1);
//-------------
var person2 = {
    firstName: "Priyanshu",
    lastName: "Pandey",
    age: 21,
    address: {
        streetName: "TulsiMarg",
        pinCode: 201301
    },
    skills: ["java", "HTML"]
};
console.log(person2);
//-----------------------
var stringArray;
stringArray = ["apple", "mango"];
var anyArray; // loseing power of typeScript 
anyArray = ["apple", 21, false];
//!Touple
var person3 = {
    name: "prince",
    data: ["male", 25, true]
};
person3.data[1] = 27;
console.log(person3);
//--------------
//!enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["HR"] = 1] = "HR";
    Role[Role["EXMPOLYEE"] = 2] = "EXMPOLYEE";
})(Role || (Role = {}));
var person4 = {
    name: "abc",
    age: 22,
    role: Role.ADMIN
};
if (person4.role === Role.ADMIN) {
    console.log("Admin");
}
else if (person4.role === Role.HR) {
    console.log("Hr");
}
