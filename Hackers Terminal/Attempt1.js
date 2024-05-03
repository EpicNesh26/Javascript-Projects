const messages = [
    "Initializing Hacking...",
    "Reading Your Files...",
    "Password Files Detected...",
    "Sending all Password and personal files to the server...",
    "Cleaning up..."
];

let currentmessageindex = 0;
let dots = "";

async function printMessage(){
    const message = messages[currentmessageindex];
    document.getElementById("output").innerHTML = message + dots ;
    currentmessageindex = (currentmessageindex + 1) % messages.length;
    dots = "";
    for (let i = 0; i < 3; i++){
        dots += "<span class='blinking'>.</span>";
    }
    await new Promise(resolve => setTimeout(resolve,Math.floor(Math.random() * 6000) + 1000));
    printMessage();
}


async function fetchData(){
    try{
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    }   catch(error){
        console.log('Error Fetching data:',error);
    }
}

printMessage();
fetchData();