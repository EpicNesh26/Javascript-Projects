const colorcontainer = document.getElementById('color-change')
const colorbutton = document.getElementById('colorbutton')
// const invertext = document.getElementsByTagName('p')

const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#6f42c1', '#e83e8c', '#fd7e14', '#343a40'];


function changecolor(){
    const randomIndex = Math.floor(Math.random()* colors.length);
    const randomColor = colors[randomIndex];
    // invertext.style.color.filter(invert)
    colorcontainer.style.backgroundColor = randomColor;

}

colorbutton.addEventListener('click', changecolor)