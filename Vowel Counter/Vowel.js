// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and Lowercase vowels.


let vowel = ['a','e','i','o','u']

let a =[]

function vowelcounter(v){
    for(let i = 0; i < vowel.length; i++){
        if(v.includes(vowel[i].toLowerCase())){
            a.push(vowel[i])
        }
}}

vowelcounter("Minecraft")
console.log(a)