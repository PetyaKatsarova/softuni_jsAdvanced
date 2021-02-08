class Company{
    constructor(){
        this.departments = []
    }
    AddEmployee(username,salary,position,department){
        if(!username || !salary || !position || !department || salary < 0){
            throw new Error('Invalid input!')
        }else{
           let employee = {
               username,
               salary,
               position,
               department
           }
           if(!)
           department.push(employee)
        }
    }
}