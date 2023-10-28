class Pokemon{

    constructor(name = "", breed = ""){
        this._name = name;
        this._breed = breed;
    }

    get petName(){
        return this._name;
    }

    set petName(name=""){
        this._name = name
    }

}

var petOne = new Pokemon("Pikachu", "Chinchila");

petOne.PetName = "Onix";
console.log(petOne.petName);