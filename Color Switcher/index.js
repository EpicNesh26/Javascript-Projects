const colorcontainer = document.getElementById('color-change')
const colorbutton = document.getElementById('colorbutton')

const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8'];

function changecolor(){
    const randomIndex = Math.floor(Math.random()* colors.length);
    const randomColor = colors[randomIndex];
    colorcontainer.style.backgroundColor = randomColor;

}

colorbutton.addEventListener('click', changecolor)