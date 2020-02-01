

const addcardFormContainer = document.querySelector('.add-card-modal');
const addCardBtn = document.querySelector('.add-card-button');
const addCardForm = addcardFormContainer.querySelector('form');


addCardBtn.addEventListener('click', e => {
    addcardFormContainer.classList.add('open');
});

addcardFormContainer.addEventListener('click', e => {
    if (e.currentTarget == e.target) {
        e.currentTarget.classList.remove('open');
    }
});

addCardForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const formInputs = addCardForm.querySelectorAll('[name]');
    console.log(formInputs)
    // console.dir(e.currentTarget)
});
