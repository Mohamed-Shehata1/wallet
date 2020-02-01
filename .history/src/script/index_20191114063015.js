

const addcardFormContainer = document.querySelector('.add-card-modal');
const addCardBtn = document.querySelector('.add-card-button');
const addCardForm = addcardFormContainer.querySelector('form');
const cardsList = document.querySelector('.left-side-container');
const transactionsLists = document.querySelector('.right-side-container');

addCardBtn.addEventListener('click', e => {
    addcardFormContainer.classList.add('open');
});

addcardFormContainer.addEventListener('click', e => {
    if (e.currentTarget == e.target) {
        e.currentTarget.classList.remove('open');
    }
});

document.querySelectorAll('.credit-card').forEach(card => {
    card.addEventListener('click', onSelectCard);
})

const onSelectCard = e => {
    console.log(e.currentTarget);
    
}

addCardForm.addEventListener('submit', e => {
    e.preventDefault();
    const cardType = document.querySelector('[name=card_type]:checked').value;
    const cardNumber = document.querySelector('[name=card_number]').value;
    const expiryMo = document.querySelector('[name=expiray_month]').value;
    const expiryYe = document.querySelector('[name=expiray_year]').value;
    const newCardId = document.querySelectorAll('.credit-card').length + 1;
    
    generateCard(newCardId, cardType, cardNumber.slice(-4) , expiryMo, expiryYe)
    generateCardTransactions(newCardId);
    addCardForm.reset();
    addcardFormContainer.click();
});

const generateCard = (id, type, num, ye, mo) => {
    const card = document.createElement('div');
    card.classList.add('credit-card');
    card.setAttribute('id', id);
    card.innerHTML =  `
        <div class="card-logo ${type}"></div>
        <p class="card-text">**** **** **** ${num}</p>
        <p class="card-text">Valid thru: ${mo}/${ye}</p>
    `;
    cardsList.appendChild(card);
    card.addEventListener('click', onSelectCard);
}

const generateCardTransactions = (cardId) => {
    const list = document.createElement('div');
    list.classList.add('tranasctions-list');
    list.setAttribute('card-id', cardId);
    let newValues = generateRandomsArr(2);

    newValues.forEach(val => {
        let tranasctionCard = document.createElement('div');
        tranasctionCard.classList.add('transaction', 'flex', 'items-center');
        if(val > 0) {
            tranasctionCard.classList.add('plus')
        } else {
            tranasctionCard.classList.add('minus')
        }
        tranasctionCard.innerHTML = `
        <span class="icon"></span>
        <div class="data grow">
          <h2 class="transaction-name">Payments</h2>
          <p class="transaction-hint">Payment #6544 - 13 Nov 2019</p>
        </div>
        <div class="balance bold" data-value="${val}">$<span class="amount">${Math.abs(val)}</span>.<sup class="fraction">00</sup></div>
        `;
        list.appendChild(tranasctionCard);
    });
    transactionsLists.appendChild(list);
}

generateRandomsArr = length => {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 201) - 100);
    }
    return arr;
}
