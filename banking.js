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
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const newDepositAmount = getInputValue('deposit-input');
    getPreviousAmount('deposit-total', newDepositAmount);

    //update account balance
    const previousBalanceTotal = getPreviousAmount('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    document.getElementById('balance-total').innerText = newBalanceTotal;
    //clear the deposit input field
});
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get the withdraw amount
    const withdrawInputNum = getInputValue('withdraw-input');
    getPreviousAmount('withdraw-total', withdrawInputNum);

    //reduce balance
    const balanceTotalNumber = getPreviousAmount('balance-total');
    const newBalanceTotal = balanceTotalNumber - withdrawInputNum;
    document.getElementById('balance-total').innerText = newBalanceTotal;
});