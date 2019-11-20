// usage of this keyword
var _this = this;
function hello(thing) {
    console.log(this);
    console.log(this + " Say Hello " + thing);
}
var helloArrow = function (thing) {
    console.log(_this);
    console.log(_this + " Say Hello " + thing);
};
var myName = {
    firstName: "Sandip",
    lastName: "Daphal",
    calculateFullName: function () {
        console.log(this);
        return this.firstName + " " + this.lastName;
    }
};
// Arrow Function
var myNameArrow = {
    firstName: "Sandip",
    lastName: "Daphal",
    calculateFullName: function () {
        console.log(_this);
        return _this.firstName + " " + _this.lastName;
    }
};
//  Some another example 
var myFullName = {
    firstName: "Sandip",
    lastName: "Daphal",
    calculateFullName: function () {
        return function () {
            console.log(this);
            return this.firstName + " " + this.lastName;
        };
    }
};
var myArrowFullName = {
    firstName: "Sandip",
    lastName: "Daphal",
    calculateFullName: function () {
        var _this = this;
        return function () {
            console.log(_this);
            return _this.firstName + " " + _this.lastName;
        };
    }
};
hello("world");
helloArrow("Woord"); //display same answer;
var someName = myName.calculateFullName();
var someArrowName = myNameArrow.calculateFullName();
var someAnotherName = myFullName.calculateFullName();
someAnotherName();
var someAnotherArrowName = myArrowFullName.calculateFullName();
someAnotherArrowName();
