let num = prompt("Enter the number: ")
        num = Number.parseInt(num)

//  Using reduce method
        if(num < 0){
            console.log("factorial is not defined for negative number !!")
        }
        let arr =[]
        for(let i = 1; i <= num; i++){
            arr.push(i)
        }
        let a = arr.reduce((a, b)=>{
            return a * b;
        })
        console.log("Using reduce method: " + a)

        //  Using for loop
        if(num < 0){
            console.log("factorial is not defined for negative number !!")
        }
        let fact = 1
        for(let i1 = 1; i1 <= num; i1++){
             fact = fact * i1
        }
        console.log("Using for loop: " + fact)