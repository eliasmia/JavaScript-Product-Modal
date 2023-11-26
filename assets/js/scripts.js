const openJsModalBtn = document.querySelectorAll(".js-modal-more")
const jsModal = document.querySelector('.js-modal')
const jsModalOverlay = document.querySelector('.js-modal-overlay')
const jsModalClose = document.querySelector('.js-modal-close')
const openJsModal = function(){
    jsModal.classList.remove("display-none")
    jsModalOverlay.classList.remove("display-none")
}
const closeJsModal = function(){
    jsModal.classList.add("display-none")
    jsModalOverlay.classList.add("display-none")
}

for(let i = 0; i< openJsModalBtn.length; i++ ){
    openJsModalBtn[i].addEventListener("click", openJsModal)
    jsModalClose.addEventListener("click", closeJsModal)
    jsModalOverlay.addEventListener("click", closeJsModal)

    document.addEventListener("keydown", function(e){
        if(e.key === 'Escape'){
            closeJsModal();
        }
    })
}