




let addCardForm = document.querySelector('.add-card-modal form');

addCardForm.addEventListener('submit', e => {
    e.preventDefault();

    console.log(e.currentTarget)
});
