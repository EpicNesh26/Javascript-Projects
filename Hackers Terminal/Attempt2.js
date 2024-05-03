async function show(arg){
    let seconds = Math.random()*(7000-1000)+1000;
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(arg)
        }, 2);
    })
}


async function display(){
    let html =`<br>`;
    document.body.append(await show("Initializing Hacking "));
    document.body.innterHTML += await blinking();
    document.body.innterHTML += await blinking();
    document.body.innterHTML += await blinking();
    
    document.body.innerHTML+= html;
    document.body.append(await show("Reading Your Files "))
    document.body.innterHTML += await blinking();
    document.body.innterHTML += await blinking();
    document.body.innterHTML += await blinking();

    document.body.innerHTML+= html;
    document.body.append(await show("Password Files Detected  "))
    document.body.innterHTML += await blinking();
    document.body.innterHTML += await blinking();
    document.body.innterHTML += await blinking();

    document.body.innerHTML+= html;
    document.body.append(await show("Sending All Password and personal files to the server "))
    document.body.innterHTML += await blinking();
    document.body.innterHTML += await blinking();
    document.body.innterHTML += await blinking();

    document.body.innerHTML+= html;
    document.body.append(await show("Cleaning Up "))
    document.body.innterHTML += await blinking();
    document.body.innterHTML += await blinking();
    document.body.innterHTML += await blinking();


}


let blinker =`<div class="dots"></div>`

async function blinker(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(blinker);
        }, 1000);
    })
}

display();