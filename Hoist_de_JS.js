// GIVEN EXAMPLE
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// 1 GIVEN
console.log(hello);                                   
var hello = 'world';          

// AFTER HOISTING BY THE INTERPRETER
/*
    var hello;
    console.log(hello); //logs undefined
    hello = "world";
*/

// 2 GIVEN
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// AFTER HOISTING BY THE INTERPRETER
/*
    var needle;
    function test(){
        var needle;
        neddle = magnet;
        console.log(needle);} //logs 'magnet'
    needle = "haystack";
    test();
*/

// 3 GIVEN
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// AFTER HOISTING BY THE INTERPRETER
/*
    var brendan;
    function print(){
    brendan = 'only okay';
    console.log(brendan); //logs 'only okay'
    }
    brendan = 'super cool';
    console.log (brendan); // logs 'super cool'
*/

// 4 GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
} 

// AFTER HOISTING BY THE INTERPRETER
/*
    var food;
    function eat(){
        food = 'half-chicken';
        console.log(food); //logs 'half-chicken'
        food = 'gone';
    }
    food = 'chicken';
    console.log(food); //logs 'chicken'
    eat();
*/


// 5 GIVEN
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// AFTER HOISTING BY THE INTERPRETER
/*
    var mean;
    mean();// TypeError: mean is not a function (mean is undefined at this point)
    console.log(food); // logs undefined 
    mean = function() { // Assigning value to mean (function expression)
        var food;
        food = "chicken";
        console.log(food); // logs 'chicken'
        food = "fish";
        console.log(food); //logs 'fish'
    }
    console.log(food); //logs undefined 
*/

// 6 GIVEN

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


// AFTER HOISTING BY THE INTERPRETER
/*
    var genre;
    function rewind(){
        var genre;
        genre = "rock";
        console.log(genre); //logs "rock"
        genre = r&b;
        console.log(genre); //logs "r&b"
    }
    console.log(genre); //logs undefined
    genre = "disco";
    rewind();
    console.log(genre); //logs "disco"
*/

// 7 GIVEN

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// AFTER HOISTING BY THE INTERPRETER
/*  
    var dojo;
    dojo = "san jose"
    console.log(dojo); //logs "san jose"
    learn();
    function learn(){
        var dojo;
        dojo = "seattle";
        console.log(dojo); //logs "seattle"
        dojo = "burbank";
        console.log(dojo); //logs "burbank" 
    }
    console.log(dojo); //logs "san jose"
*/

// 8 GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// AFTER HOISTING BY THE INTERPRETER
/*
    function makeDojo(name, students){  
        const dojo = {};                
        dojo.name = name;               
        dojo.students = students;       
        if(dojo.students > 50){         
            dojo.hiring = true;         
        }
        else if(dojo.students <= 0){ 
        //Error: Assignment to constant variable 'dojo'
            dojo = "closed for now";    
        }
        return dojo; //Returning dojo object
    }
    console.log(makeDojo("Chicago", 65));  //logs { name: 'Chicago', students: 65, hiring: true }
    console.log(makeDojo("Berkeley", 0));  //logs { name: 'Berkeley', students: 0 }
*/