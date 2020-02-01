

const addcardFormContainer = document.querySelector('.add-card-modal');
const addCardBtn = document.querySelector('.add-card-button');
const addCardForm = addcardFormContainer.querySelector('form');


addCardBtn.addEventListener('click', e => {
    console.log(e)

    addcardFormContainer.classList.add('open');
});

addcardFormContainer.addEventListener('click', e => {

    console.log(e.currentTarget, e)

    e.currentTarget.classList.remove('open');
})

addCardForm.addEventListener('submit', e => {
    e.preventDefault();

    console.log(e.currentTarget)
});
