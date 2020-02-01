

const addcardFormContainer = document.querySelector('.add-card-modal');
const addCardBtn = document.querySelector('.add-card-button');
const addCardForm = addcardFormContainer.querySelector('form');
const cardsList = document.querySelector('.left-side-container')

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
    const cardType = document.querySelector('[name=card_type]:checked').value;
    const cardNumber = document.querySelector('[name=card_number]').value;
    const expiryMo = document.querySelector('[name=expiray_month]').value;
    const expiryYe = document.querySelector('[name=expiray_year]').value;
    
    const newCard = generateCardTemp(cardType, cardNumber.slice(-4) , expiryMo, expiryYe)
    cardsList.appendChild(newCard);
    addCardForm.reset();
    addcardFormContainer.click();
});


const generateCardTemp = (type, num, ye, mo) => {
    const card = document.createElement('div');
    card.classList.add('credit-card');
    const currentCardsCount = document.querySelectorAll('.credit-card').length;
    card.setAttribute('id', currentCardsCount + 1)
    card.innerHTML =  `
        <div class="card-logo ${type}"></div>
        <p class="card-text">**** **** **** ${num}</p>
        <p class="card-text">Valid thru: ${mo}/${ye}</p>
    `;
    console.log(card)
    return card
}
