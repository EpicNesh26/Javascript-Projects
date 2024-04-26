


function adjective(){
    let a="Crazy"
    let b= "Amazing"
    let c= "Fire"
    return randomWord(a,b,c)
    }   
function shopName(){
    let a="Engine"
    let b= "Foods"
    let c= "Garments"
    return randomWord(a,b,c)
}
function anotherWord(){
    let a="Bros"
    let b= "Limited"
    let c= "Hub"
    return randomWord(a,b,c)
}

function randomWord(a,b,c){
    let r=Math.floor(Math.random()*3)
    return r == 0 ? a : r == 1 ? b : c
}

console.log("Business Name\n" , adjective(),shopName(),anotherWord() )

