//function building section

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
function updateBalance(newAmountEdit, isAdd) {
    const balanceAmount = document.getElementById('balance-total');
    const balanceAmountText = balanceAmount.innerText;
    const balanceAmountNum = parseFloat(balanceAmountText);
    if (isAdd == true) {
        balanceAmount.innerText = balanceAmountNum + newAmountEdit;
    }
    else {
        balanceAmount.innerText = balanceAmountNum - newAmountEdit;
    }
}
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const newDepositAmount = getInputValue('deposit-input');
    getPreviousAmount('deposit-total', newDepositAmount);
    //update account balance
    updateBalance(newDepositAmount, true);
});
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get the withdraw amount
    const withdrawInputNum = getInputValue('withdraw-input');
    getPreviousAmount('withdraw-total', withdrawInputNum);
    //reduce balance
    updateBalance(withdrawInputNum, false);
});