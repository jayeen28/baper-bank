//functions
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputNumber = parseFloat(inputText);
    input.value = '';
    return inputNumber;
}
function getPreviousAmount(total, inputAmount) {
    const previousTotal = document.getElementById(total);
    const previousTotalText = previousTotal.innerText;
    const previousTotalNumber = parseFloat(previousTotalText);
    previousTotal.innerText = previousTotalNumber + inputAmount;
    return previousTotalNumber;
}
function getCurrentBalance() {
    const balanceAmount = document.getElementById('balance-total');
    const balanceAmountText = balanceAmount.innerText;
    const balanceAmountNum = parseFloat(balanceAmountText);
    return balanceAmountNum;
}
function updateBalance(newAmountEdit, isAdd) {
    const balanceAmount = document.getElementById('balance-total');
    const balanceAmountNum = getCurrentBalance();
    if (isAdd == true) {
        balanceAmount.innerText = balanceAmountNum + newAmountEdit;
    }
    else {
        balanceAmount.innerText = balanceAmountNum - newAmountEdit;
    }
}
//event handelers
document.getElementById('deposit-button').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        getPreviousAmount('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
        const secondHead = document.getElementById('second-head');
        secondHead.style.display = 'none';
    }
});
//withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputNum = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawInputNum >= 0 && withdrawInputNum <= currentBalance) {
        getPreviousAmount('withdraw-total', withdrawInputNum);
        updateBalance(withdrawInputNum, false);
    }
    else {
        const secondHead = document.getElementById('second-head');
        secondHead.style.display = 'block';
    }
});