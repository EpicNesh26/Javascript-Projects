const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('closebtn');


function openModal(event){
    modal.style.display = 'flex';
    modalImg.src = event.target.src;
}

function closeModal(){
    modal.style.display = 'none';

}

galleryImages.forEach(img => {
    img.addEventListener('click', openModal);
});

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
    if(event.target !== modalImg){
        closeModal();
    }
})