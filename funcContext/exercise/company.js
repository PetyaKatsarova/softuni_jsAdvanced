class Company{
    constructor(){
        this.departments = []
    }
    addEmployee(username,salary,position,department){
        for(let arg of [username,salary,position,department]){
            this.validate(arg)
        }
        if(!this.departments[department]){
            this.departments[department] = []
        }
        this.departments[department].push({username,salary,position,department})
        console.log(`New employee is hired. Name: ${username}. Position: ${position}`)
    }
    bestDepartment(){
        let departments = {}
        Object.entries(this.departments).forEach(([dep, employees])=>{
            let totalSalary = employees.map(e=>e.salary).reduce((acc,item)=> acc += item);
            departments[dep] = totalSalary /employees.length
        })
        let maxSalary = 0;
        let bestDepartment;
        Object.entries(departments).forEach(([department,avgSalary])=>{
            if(avgSalary > maxSalary){
                maxSalary = avgSalary;
                bestDepartment = department
            }
        })
        console.log(`Best department is: ${bestDepartment}`)
        console.log(`Average salary: ${maxSalary.toFixed(2)}`)
        this.departments[bestDepartment]
        .sort((a,b)=> b.salary - a.salary || a.username.localeCompare(b.username))
        .forEach(employee => {
          //  {employee1} {salary} {position}
            console.log(`${employee.username} ${employee.salary} ${employee.position}`)
        })
        
    }

    validate(value){
        if(!value || value < 0){
            throw new Error('Invalid input')
        }
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
c.bestDepartment();
// Best department is: {best department's name}
// Average salary: {best department's average salary}
// {employee1} {salary} {position}
// {employee2} {salary} {position}
// {employee3} {salary} {position}
