//function building section

function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputNumber = parseFloat(inputText);
    input.value = '';
    return inputNumber;
}


document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const newDepositAmount = getInputValue('deposit-input');
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const totalDepositAmount = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = totalDepositAmount;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clear the deposit input field
});
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get the withdraw amount
    const withdrawInputNum = getInputValue('withdraw-input');
    const previousTotalWithdrawText = document.getElementById('withdraw-total').innerText;
    const withdrawTotalNum = parseFloat(previousTotalWithdrawText);
    const newTotalWithdraw = withdrawInputNum + withdrawTotalNum;
    document.getElementById('withdraw-total').innerText = newTotalWithdraw;

    //reduce balance
    const previousBalanceTotal = document.getElementById('balance-total');
    const balanceTotalText = previousBalanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);
    const newBalanceTotal = balanceTotalNumber - withdrawInputNum;
    previousBalanceTotal.innerText = newBalanceTotal;
});