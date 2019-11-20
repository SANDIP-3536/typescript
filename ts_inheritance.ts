class AnimalGen{
    constructor (public limbs:number,public typeOfAnimal : string, public diet: string){
        this.limbs = limbs;
        this.typeOfAnimal = typeOfAnimal;
        this.diet = diet;
    }

    getAnimalDiet = ()=>{
        return this.diet;
    }
}

class Dog extends AnimalGen{
    constructor(public limbs:number,public typeOfAnimal : string, public diet: string){
        super(limbs,typeOfAnimal,diet);//when need defined constructor for the drived class then we neet use super() function else its given error 
    }
    getBlimOFDog = () =>{
        return this.limbs;
    }
}

let germanDog = new Dog(4,"mammal",'omnivore');
console.log(germanDog.getBlimOFDog());
console.log(germanDog.getAnimalDiet());