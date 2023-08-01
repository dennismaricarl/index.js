//Tab 1: Is Truthy
    // Write 6 if statements with a console.log
    // If(input value) then console.log(expected print)
    // If the value is truthy, print true
    // If the value is falsy, print expected "falsy" message from chart


if ("I am a string") {
    console.log("true")
} 

if ("false") {
    console.log("The boolean value false is falsey")
}

if("null") {
    console.log("The null value is falsy")
}

if("undefined"){
    console.log("undefined is falsy")
}

if ("0") {
    console.log("The number 0 is falsy (the only falsy number)")
}

if (" ") {
    console.log("The empty string is falsy (the only falsy string)")
}

//Tab2: Number Line
    //Take sum of num1 and num2 using an if statement
    //console.log (expected print)
    //else console.log false

//test1
let num1 = 50
let num2 = 51
if (num1 + num2) {
    console.log("101 is greater than 100")
} else {
    console.log("false")
}

//test2
num1 =99
num2 =-2
if (num1+num2) {
    console.log("97 is greater than 0")
} else {
    console.log(false)
}

//test3
if (0+101) {
    console.log("101 is greater than 100")
} else {
    console.log(false)
}

//test4
const num = 500
if (num) {
    console.log("0 is equal to 0")
} else {
    console.log(false) 
}

//test5
if (-1000+0) {
    console.log("-1000 is a negative number")
} else {
    console.log(false) 
}

//test6
if (-5+0) {
    console.log("-5 is a negative number")
} else {
    console.log(false) 
}


// Tab 3: Greater than 5
    // Write out if/else statement syntax.
    // Use && within syntax to test if both parameters are >= 5. 
    // Test each paramater combo(num1 & num2).
    // See if expected print is correct. 

//test1
if (5 >= 5 && 6 >= 5) {
    console.log(true)
} else {
    console.log(false)
}

//test2
if (10 >= 5 && 11 >= 5) {
    console.log(true)
} else {
    console.log(false)
}

//test3 
if (0 >= 5 && 0 >= 5) {
    console.log(true)
} else {
    console.log(false)
}

//test4
if (1000 >= 5 && -1000 >= 5) {
    console.log(true)
} else {
    console.log(false)
}

//test5
if (6 >= 5 && 4 >= 5) {
    console.log(true)
} else {
    console.log(false)
}

//test6
if (5 >= 5 && 5 >= 5) {
    console.log(true)
} else {
    console.log(false)
}
    

//Tab 4: Pair and Compare
    //Compare param1A and param1B. Then compare param2A and param2B. 
    //If one of the pairs (param1A and param1B) and (param2A and param2B) is strictly equal, then print true. 
    //Else, (if both are false) print false. 

//test1
if ("cat"==="cat" || 6==="6") {
    console.log("true")
} else {
    console.log(false)
}

//test2 
if ("five"===5 || "dog"==="dawg") {
    console.log("true")
} else {
    console.log(false)
}

//test3
if (0===false || "horse"==="horse") {
    console.log("true")
} else {
    console.log(false)
}

//test4
if ("eight"==="eight" || "ate"==="ate") {
    console.log("true")
} else {
    console.log(false)
}

//test5
if (11==="eleven" || "four"==="for") {
    console.log(true)
} else {
    console.log(false)
}

//test6
if ("cake"==="cake" || "pie"==="pie") {
    console.log("true")
} else {
    console.log(false)
}