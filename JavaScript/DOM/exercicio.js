let classe = document.querySelector('.modal-wrapper')

function goToEsc () {
    classe.setAttribute('class', 'modal-wrapper fixed bg-gray-500 w-screen  flex items-center justify-center')
}

const button = document.querySelector('#openModal')
button.addEventListener("click", goToEsc)

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        classe.classList.add('invisible')
    }
})