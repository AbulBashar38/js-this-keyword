// implicit binding
// explicit binding
// new binding
// window binding


// implicit binding

let sakib = {
    name: 'sakib',
    age: 36,
    description: function () {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
sakib.description()




let functionPlayer = function (obj) {
    obj.printPlayer = function(){
        console.log(this.name);
    }
}

let tamim = {
    name: ' tamim',
    age: 34
}

functionPlayer(tamim)
tamim.printPlayer();


// explicit binding


let functionPlayerInfo = function () {
    console.log(this.name);
}

let mushi = {
    name: 'Mushi',
    age: 34
}

functionPlayerInfo.call(mushi)



let functionPlayerInfo = function (v1,v2,v3) {
    console.log(`${this.name} is ${v1} but ${v2} and ${v3}`);
}

let mushi = {
    name: 'Mushi',
    age: 34
}

let v1 = 'short';
let v2 = 'handsome';
let v3 = 'hard worker'

functionPlayerInfo.call(mushi, v1, v2, v3)



let functionPlayerInfo = function (v1,v2,v3) {
    console.log(`${this.name} is ${v1} but ${v2} and ${v3}`);
}

let mushi = {
    name: 'Mushi',
    age: 34
}

let v1 = 'short';
let v2 = 'handsome';
let v3 = 'hard worker'
let V = [v1,v2,v3];
functionPlayerInfo.apply(mushi, V)



let functionPlayerInfo = function (v1,v2,v3) {
    console.log(`${this.name} is ${v1} but ${v2} and ${v3}`);
}

let mushi = {
    name: 'Mushi',
    age: 34
}

let v1 = 'short';
let v2 = 'handsome';
let v3 = 'hard worker'
let aboutMushi = functionPlayerInfo.bind(mushi, v1, v2, v3)
aboutMushi()


// new binding

function Person (name, age) {
    this.name = name;
    this.age = age;
    console.log(`${this.name} is ${this.age} years old`);
}

let riyad = new Person("riyad", 34)