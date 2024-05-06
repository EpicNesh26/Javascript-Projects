// The Password Validator : Build a password validation feature. Create a function that checks if the given password meets the follwoing conditions.
// 1. It must have a length of at least 6 characters and a maximum of 24 characters.
// 2. Must contain atleast 1 lowercase or uppercase letter.
// 3. And must include atleast one digit

function passwordvalid(password){
    if(password.length >= 6 && password.length <= 24){
        if(password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/)){
            console.log("Password is valid")
            return true;
        }else{
            consosle.log("Password is not valid")
            return false;
        }
    }else{
        console.log("Password is not valid")
        return false;
}}

passwordvalid("Cocoisbest123")