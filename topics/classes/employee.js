class Employee{
    
    // a way at which a property of a class is set to private
    #age;

    constructor(id = 0, fName = "", lName = "", position = "", salary = 0, age = 0){
        
        this.id = id;
        this.firstName = fName;
        this.lastName = lName;
        this.position = position;
        this.salary = salary;
        this.dateJoined = new Date("10/12/2022");
        this.#age = age;
    }

    printEmployeeJoinDate(){
        var summary = `${this.firstName} ${this.lastName} joined us on ${this.dateJoined}.`; 
        console.log(summary)   
    }

    editJoinDate(editDate){
        this.dateJoined = new Date(editDate);
        console.log(`${this.firstName} ${this.lastName} join date has been updated.`)
        console.log(`The join date has been updated to ${this.dateJoined}.`)
    }

    getStaffAge(){
        const age = this.#age;
        return age;
    }
    
}

module.exports = Employee;