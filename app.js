const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');


let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

confirmBtn.addEventListener('click', () => {
    console.log('It works!');
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if(enteredReason.trim().length <= 0 || enteredAmount.trim().length <= 0 || enteredAmount <= 0) {
        const alert = document.createElement('ion-alert');
            alert.cssClass = 'my-custom-class';
            alert.header = 'Alert';
            alert.subHeader = 'Subtitle';
            alert.message = 'This is an alert message.';
            alert.buttons = ['OK'];
        document.body.appendChild(alert);
        alert.present();
        return;
    }
    console.log(enteredReason, enteredAmount);
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;
    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenses;
    expensesList.appendChild(newItem);
    clear();
});

cancelBtn.addEventListener('click', clear);



