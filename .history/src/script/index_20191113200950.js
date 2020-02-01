

const addcardFormContainer = document.querySelector('.add-card-modal');
const addCardBtn = document.querySelector('.add-card-button');
const addCardForm = document.querySelector('.add-card-modal form');


addCardBtn.addEventListener('click', e => {
    addcardFormContainer.classList.add('open');
});

addcardFormContainer.addEventListener('click', e => {
    e.currentTarget.classList.remove('open');
})

addCardForm.addEventListener('submit', e => {
    e.preventDefault();

    console.log(e.currentTarget)
});
