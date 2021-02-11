// class Company{
//     constructor(){
//         this.departments = []
//     }
//     addEmployee(username,salary,position,department){
//         for(let arg of [username,salary,position,department]){
//             this.validate(arg)
//         }
//         if(!this.departments[department]){
//             this.departments[department] = []
//         }
//         this.departments[department].push({username,salary,position,department})
//         //console.log(`New employee is hired. Name: ${username}. Position: ${position}`)
//         return `New employee is hired. Name: ${username}. Position: ${position}`

//     }
//     bestDepartment(){
//         let departments = {}
//         Object.entries(this.departments).forEach(([dep, employees])=>{
//             let totalSalary = employees.map(e=>e.salary).reduce((acc,item)=> acc += item);
//             departments[dep] = totalSalary /employees.length
//         })
//         let maxSalary = 0;
//         let bestDepartment;
//         Object.entries(departments).forEach(([department,avgSalary])=>{
//             if(avgSalary > maxSalary){
//                 maxSalary = avgSalary;
//                 bestDepartment = department
//             }
//         })
//         let output = `Best department is: ${bestDepartment}\n`
//         output += `Average salary: ${maxSalary.toFixed(2)}\n`
//         this.departments[bestDepartment]
//         .sort((a,b)=> b.salary - a.salary || a.username.localeCompare(b.username))
//         .forEach(employee => {
//             output += `${employee.username} ${employee.salary} ${employee.position}\n`
//         })
//         // it still gives 50%
//         return output.trim()
//     }

//     validate(value){
//         if(!value || value < 0){
//             throw new Error('Invalid input!')
//         }
//     }
// }
class Company{
    constructor(){
        this.departments = []
    }

    addEmployee(username,salary, position, department){
        for(let arg of [username,salary,position,department]){
            this.validate(arg);
        }
        if(!this.departments[department]){
            this.departments[department] = []
        }
        this.departments[department].push({username, salary, position, department});
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment(){
        let deprtments = {}
        let message = ''
        Object.entries(this.departments).forEach(([dep, employees]) => {
            let totalSalaries = employees.map(e => e.salary).reduce((acc,item) => acc + item)
            deprtments[dep] = totalSalaries / employees.length
        })     
        
        let max = 0
        let bestDep = ''
        Object.entries(deprtments).forEach(el => {
            if(el[1] > max){
                max = el[1]
                bestDep = el[0]
            }
        })
        //console.log(bestDep + ': ' + max)
        message += 'Best Department is: ' + bestDep + '\n';
        message += 'Average salary: ' + max.toFixed(2) + '\n';
        this.departments[bestDep].sort((a,b) => b.salary - a.salary || a.username.localeCompare(b.username)).forEach(el => {
            //{employee3} {salary} {position}
            message += el.username + ' ' + el.salary + ' ' + el.position + '\n';
            //console.log(el)
        });
        return message.trim();
    }

    validate(item){
        if(item == '' || item == null || item == undefined || item < 0){
            throw new Error('Invalid input!')
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
console.log(c.bestDepartment());
// Best department is: {best department's name}
// Average salary: {best department's average salary}
// {employee1} {salary} {position}
// {employee2} {salary} {position}
// {employee3} {salary} {position}
