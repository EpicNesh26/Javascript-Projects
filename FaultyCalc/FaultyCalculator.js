let random = Math.random();

let a = prompt("Enter your first number: ")
let b = prompt("Enter your second number: ")
let c = prompt("Enter Operator: ")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}


if (random > 0.1){
    // correct operations
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    // Wrong operations
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}