// class Department{
//     name:String;
//     constructor(n:string){
//       this.name = n;
//     }

//     describe(){
//         console.log(`Department ${this.name}`);
//     }

// }

// const accounting = new Department("Accounting");
// accounting.describe()

// Inheritance -------------------------------

// class Department{
//     name:string;
//     protected employee:string[];
//     constructor(n:string){
//         this.name = n;
//         this.employee = [];
//     }
//     describe(){
//         console.log(`Department ${this.name}`);
//     }

//     addEmployee(emp:string){
//         this.employee.push(emp)
//     }
//     showEmployee(){
//         console.log(`Length Of Employee ${this.employee.length}`);
//         console.log(`employees ${this.employee}`);
//     }

// } 


// const accounting = new Department("--Accounting");
// accounting.showEmployee() 


// class AccountingDepartment extends Department{
//     id:string;
//     reports:string[];
//     constructor(id:string){
//         super("admin")
//         this.id = id;
//         this.reports = [];

//     }

//     addReports(rep:string){
//        this.reports.push(rep)
//     }

//     addEmployee(emp: string): void {
//          if(emp==="Ankit"){
//             return;
//          }
//          this.employee.push(emp)
//     }

//     printReports(){
//         console.log(` reports ${this.reports}`);
//     }

//     get getReport(){
//          if(this.reports.length > 0 ){
//             return this.reports
//          }
//           throw new Error("report not found ")
//     }

//     set setReport(val:string){
//           if(!val){
//             throw new Error("please provide value")
//           }
//           this.reports.push(val)
//     }
// }

// const accDep = new AccountingDepartment("abcd");
// accDep.showEmployee()
// console.log(accDep.setReport = "bug");
//  console.log(accDep.getReport);
// accDep.setReport = "not found error";
// console.log(accDep.getReport);


// class School{
//   name:string;
//   courses : string[] = [];

//     constructor(n:string,c:string){
//         this.name = n;
//         this.courses.push(c)
//     }

//      static getDetail(){
//          return (`static function`)
//     }
// }

// const result = School.getDetail();
// console.log(result);

//_-----------------------------Abstraction--------------------

abstract  class Payment{

       name:string;
       amount:number;

       constructor(n:string, a:number){
        this.name = n;
        this.amount = a;
       }

       abstract pay(amount:number) :  void;
       
}

class PaymentThroughUPI extends Payment{
    readonly id : number;
    constructor(id:number){
        super("priyanshu",999);
        this.id = id;
    }

     pay(amount:number) : void {
       console.log(`${this.name} payed you ${amount}`);
    }

}

const paymentObj = new PaymentThroughUPI(123);

paymentObj.pay(199)
paymentObj.pay(299)







