// Try 1:

let thumbnail = prompt("Enter the image Url: ")
let title = prompt("Enter the title: ");
let cName = prompt("Enter the channel name: ");
let monthsOld = prompt("Enter the upload time of the video: ");
let duration = prompt("Enter the video duration: ");
let views = parseInt(prompt("Enter the number of views: "));






function createCard(title,cName,views,monthsOld,duration,thumbnail){
    // Correcting input: 
    if (views.toString().length > 3 && views.toString().length < 7) {
        if (views.toString().length == 4) { var views = `${views.toString[0]}${K}` }
        if (views.toString().length == 5) { var views = `${views.toString[0]}${views.toString[1]}K` }
        if (views.toString().length == 6) { var views = `${String(views).charAt(0)}${String(views).charAt(1)}${String(views).charAt(2)}K` }
    }
    if (views.toString().length > 6) {
        if (views.toString().length == 7) { var views = `${String(views).charAt(0)}M` }
        if (views.toString().length == 8) { var views = `${String(views).charAt(0)}${String(views).charAt(1)}M` }
        if (views.toString().length == 9) { var views = `${String(views).charAt(0)}${String(views).charAt(1)}${String(views).charAt(2)}M` }
    }
    monthsOld = `${monthsOld} months ago`


    let card = document.createElement("div")
    card.setAttribute("class","container")
    // Create Container
    document.querySelector(".container").setAttribute("style", "background-color: black;  color: white;  height: 188px;  border-radius: 15px;  font-family: 'Segoe UI';")

    // Create Image div
    let image = document.createElement("div");
            image.innerHTML = `<img src="${thumbnail}"> <div class="duration">${duration}</div>`
            image.setAttribute("class", "card image")
            document.querySelector(".container").append(image)
            document.querySelector("img").setAttribute("style", "position: absolute;  z-index: 0;  width: 250px;  padding: 20px;")
            document.querySelector(".duration").setAttribute("style", "font-weight: 500; padding: 1px; border-radius: 4px; position: absolute; z-index: 2; margin: 134px auto auto 228px; background-color: black;")

    let til = document.createElement("div")
    til.innerHTML = title
    til.setAttribute("class", "card title")
    til.setAttribute("style", "margin: 0px 0px 0px 288px; padding-top: 16px; font-weight: 500; font-size: xx-large; overflow: hidden;")
    document.querySelector(".container").append(til)

    let cnam = document.createElement("div")
    cnam.innerHTML = `$(cName) • `
    cnam.setAttribute("class", "card cName")
    cnam.setAttribute("style", "color: rgba(255, 255, 255, 0.582);margin: 0px 0px 0px 290px;padding-top: 17px;")
    document.querySelector(".container").append(cnam)

    let viw = document.createElement("div")
    viw.innerHTML = `${views} • `
    viw.setAttribute("class", "card views")
    viw.setAttribute("style", "color: rgba(255, 255, 255, 0.582); margin: -21px 0px 0px 415px;")
    document.querySelector(".container").append(viw)


    let month = document.createElement("div")
    month.innerHTML = monthsOld
    month.setAttribute("class", "card time")
    month.setAttribute("style", "color: rgba(255, 255, 255, 0.582); margin: -22px 0px 0px 468px; font-size: medium;")
    document.querySelector(".container").append(month)}


createCard();


