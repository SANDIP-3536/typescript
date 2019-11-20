// usage of this keyword

function hello(thing){
    console.log(this);
    console.log(this +" Say Hello " + thing);
}

let helloArrow = (thing)=>{
    console.log(this);
    console.log(this+ " Say Hello "+thing);
}

let myName = {
    firstName : "Sandip",
    lastName : "Daphal",

    calculateFullName(){
        console.log(this);
        return this.firstName+" "+this.lastName;
    }
}

// Arrow Function
var myNameArrow = {
    firstName: "Sandip",
    lastName: "Daphal",
    calculateFullName: () => {
        console.log(this);
        return this.firstName + " " + this.lastName;
    }
};

//  Some another example 
let myFullName = {
    firstName : "Sandip",
    lastName : "Daphal",

    calculateFullName(){
        return function(){ // showing windows
            console.log(this);
            return this.firstName+" "+this.lastName;
        }
    }
}

let myArrowFullName = {
    firstName : "Sandip",
    lastName : "Daphal",

    calculateFullName(){
        return () =>{ // showing data
            console.log(this);
            return this.firstName+" "+this.lastName;
        }
    }
}
hello("world");
helloArrow("Woord"); //display same answer;
let someName = myName.calculateFullName();
let someArrowName = myNameArrow.calculateFullName();
let someAnotherName = myFullName.calculateFullName();
someAnotherName();
let someAnotherArrowName = myArrowFullName.calculateFullName();
someAnotherArrowName();