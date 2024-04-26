// // Faulty Calculator Exercise


// let a = Math.random()

// if (a < 0.1) {
//     function sum(a, b) {
//         return a - b
//     }
//     function sub(a, b) {
//         return a / b
//     }
//     function mul(a, b) {
//         return a + b
//     }
//     function div(a, b) {
//         return a ** b
//     }

// }

// else {
//     function sum(a, b) {
//         return a + b
//     }
//     function sub(a, b) {
//         return a - b
//     }
//     function mul(a, b) {
//         return a * b
//     }
//     function div(a, b) {
//         return a / b
//     }


// }

// let b = sum(2, 4)
// let c = sub(10,5)
// let d = mul(10,10)
// let e = div(50,5)

// console.log("output of sum operation " + b)
// console.log("output of sub operation " + c)
// console.log("output of mul operation " + d)
// console.log("output of div operation " + e)


// Combine 3 different word list to create a business name 

/* Adjectives : 
Crazy
Amazing
Fire */

/* Shop Name:
Engine 
Foods
Garments */

/* Another Word:
Bros
Limited
Hub */

// BUSINESS NAME GENERATOR 

let a = Math.floor(Math.random() * 3)
return a


function adjective() {
    let a = "Crazy"
    let b = "Amazing"
    let c = "Fire"
    let d = Math.floor(Math.random() * 3);
        if (d == 0)
        return a
        else if (d == 1)
        return b
        else if (d == 2)
        return c
}

function shopName(){
    let e = "Engine"
    let f ="Foods"
    let g = "Garments"
    let h = Math.floor(Math.random() * 3);
        if (d == 0)
            return e
        else if (d == 1)
            return f
        else if (d == 2)
            return g
}

function anotherWord(){
    let i = "Bros"
    let j = "Limited"
    let k = "Hub"
    let l = Math.floor(Math.random() * 3)
        if (d == 0)
            return i
        else if (d == 1)
            return j
        else if (d == 2)
            return k
}

console.log("The name of the Business is: \n", adjective(), shopName(), anotherWord())