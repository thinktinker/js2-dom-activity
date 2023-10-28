class Car{

    // constructor
    constructor(brand="", model=""){
        this.brand = brand; // property
        this.model = model; // property
    }

    // method
    printCarDetails(){
        return `My new ride is ${this.brand} ${this.model}`
    }

}

class SuperCar extends Car{ // Car is the parent class
    
    constructor(brand, model) {
        super(brand);  // super refers to Car's brand
        this.model = "Fit";   // refer's Car's model
        this.celebrity = "Daniel Craig";
    }

    superCarDetails(){
        console.log("The car model is " + this.model + " driven by " + this.celebrity);
    }

    show() {
        return this.printCarDetails() + ', it is a ' + this.model;
    }

}
const myNewCar = new SuperCar("Honda", "Civic"); // instantiate a Car class object


const result = myNewCar.show();

console.log(result);