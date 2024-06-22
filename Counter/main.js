document.addEventListener('DOMContentLoaded', () => {
    const generatenum = document.getElementById('generatenumber')
    const numberDisplay = document.getElementById('NumberPrint')


    generatenum.addEventListener('click', () => {
        const randomnumber = Math.floor(Math.random()*100);


        numberDisplay.classList.remove('even', 'odd')

        if (randomnumber % 2 == 0){
            numberDisplay.classList.add('even')
        } else {
            numberDisplay.classList.add('odd')

        }

        numberDisplay.textContent = randomnumber
    });
})