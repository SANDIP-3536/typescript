let multiply = function(x,y){
    return x*y;
}

let multiplyTs = function(x:number,y:number):number{
    return x*y;
    // return "Sandip"; /--beacuse your return type should be number
}

// Arrow function in typescript
let arrMultiplyTs = (x:number,y:number):number =>{
    return x+y;
}

// only function defibation
let divideTs : (x:number,y:number)=>number;

divideTs = (x:number,y:number)=>{
    return  x/y;
    // return "x/y"; /-- showing error
}


// optional parameters
let multiplyOrSquare = (x:number,y?:number) =>{
    if(y){
        return x*y;
    }else{
        return x*x;
    }
}

// Rest Parameter
let allPeopleIWantToInvite :string[] = [];
let pushToPartyList = (...people:string[])=>{
    console.log(people);
    let newPeopleArray = people;
    allPeopleIWantToInvite = allPeopleIWantToInvite.concat(newPeopleArray);
    console.log(allPeopleIWantToInvite);
    return allPeopleIWantToInvite
}

// Appling types to functions
let numberOfFrriend = function(friends) {
    if(typeof friends == 'string'){
        return `you have 1 friend`;
    }else{
        var msg = `You have ${friends.length} friends`;
        return msg;
    }
}

console.log(multiply(2,3));
console.log(multiplyTs(4,5));
console.log(arrMultiplyTs(4,5));
console.log(multiplyOrSquare(2));
console.log(multiplyOrSquare(2,6));
pushToPartyList("Amruta","Bagla","Kavla");
pushToPartyList("Sandip","Pradnya","Kunjika");
console.log(numberOfFrriend("Sandip"));
console.log(numberOfFrriend(["Sandip","Akash"]));