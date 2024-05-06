// The Mirror Mirror : Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.



function reverseString(str) {
    // Step 1. Use the split() method to return a new array
        let splitString = str.split("");
        console.log(splitString)
    // Step 2. Use the reverse() method to reverse the new created array
        let reverseArray = splitString.reverse();
        console.log(reverseArray);
    // Step 3. Use the join() method to join all elements of the array into a string
        let joinArray = reverseArray.join("");
    
    //Step 4. Return the reversed string
        return joinArray;
    }

reverseString("Hello")


