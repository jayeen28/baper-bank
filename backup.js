document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newdepositAmountText);
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
    depositInput.value = '';
});
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get the withdraw amount
    const withdrawInputText = document.getElementById('withdraw-input').value;
    const withdrawInputNum = parseFloat(withdrawInputText);
    const previousTotalWithdrawText = document.getElementById('withdraw-total').innerText;
    const withdrawTotalNum = parseFloat(previousTotalWithdrawText);
    const newTotalWithdraw = withdrawInputNum + withdrawTotalNum;
    document.getElementById('withdraw-total').innerText = newTotalWithdraw;

    //reduce balance
    const previousBalanceTotal = document.getElementById('balance-total');
    const balanceTotalText = previousBalanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);
    const newBalanceTotal = balanceTotalNumber - withdrawInputText;
    previousBalanceTotal.innerText = newBalanceTotal;
    //clear the withdraw input field
    document.getElementById('withdraw-input').value = '';
});