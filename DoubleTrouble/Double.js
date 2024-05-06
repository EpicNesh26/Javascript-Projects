// The Double Trouble : You are tasked with writing a function that doubles each element in an Array. However theres a catch : if the array contains consecutive duplicate elements , only double one of them.


let a = [1,2,4,5,6,6,7,8,8]
let b =[]

for (let i = 0; i < a.length; i++) {
    if(a[i]!=a[i+1]){
        b.push(a[i]*2)
    }else {
        b.push(a[i])
    }    
    
}
console.log(b)