const Employee = require("./employee");

class ShareHolder extends Employee{

    // initialisation constructor
    constructor(id, fName, lName, position,salary, age, shares, dividend){
        super(id, fName, lName, position, salary, age);
        this.shares = shares
        this.dividend = dividend
    }

    // methods
    printShareHolder(){
        this.printEmployeeJoinDate();
        console.log(`${this.firstName} ${this.lastName} has ${this.shares} shares`);
    }

}

const shareHolderOne = new ShareHolder(1, "John", "Doe", "Director", "20000", 18, 10, 4);

shareHolderOne.printShareHolder();