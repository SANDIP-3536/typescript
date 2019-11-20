var multiply = function (x, y) {
    return x * y;
};
var multiplyTs = function (x, y) {
    return x * y;
    // return "Sandip"; /--beacuse your return type should be number
};
// Arrow function in typescript
var arrMultiplyTs = function (x, y) {
    return x + y;
};
// only function defibation
var divideTs;
divideTs = function (x, y) {
    return x / y;
    // return "x/y"; /-- showing error
};
// optional parameters
var multiplyOrSquare = function (x, y) {
    if (y) {
        return x * y;
    }
    else {
        return x * x;
    }
};
// Rest Parameter
var allPeopleIWantToInvite = [];
var pushToPartyList = function () {
    var people = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        people[_i] = arguments[_i];
    }
    console.log(people);
    var newPeopleArray = people;
    allPeopleIWantToInvite = allPeopleIWantToInvite.concat(newPeopleArray);
    console.log(allPeopleIWantToInvite);
    return allPeopleIWantToInvite;
};
// Appling types to functions
var numberOfFrriend = function (friends) {
    if (typeof friends == 'string') {
        return "you have 1 friend";
    }
    else {
        var msg = "You have " + friends.length + " friends";
        return msg;
    }
};
console.log(multiply(2, 3));
console.log(multiplyTs(4, 5));
console.log(arrMultiplyTs(4, 5));
console.log(multiplyOrSquare(2));
console.log(multiplyOrSquare(2, 6));
pushToPartyList("Amruta", "Bagla", "Kavla");
pushToPartyList("Sandip", "Pradnya", "Kunjika");
console.log(numberOfFrriend("Sandip"));
console.log(numberOfFrriend(["Sandip", "Akash"]));
