/**
 * 1. add withdraw button event handler
 * 2. get withdraw amount by using getInputValueById function
 * 3. get previous withdraw amount by using getTextElementValueById function
 * 4. calculate new withdraw total and set the value
 * 4.5-set new withdraw total by using setTextElementValueById function
 * 5. get previous balance total by using getTextElementValueById function
 * 6. calculate new balance total
 * 7. set balance total
 */

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  // ----------if the value is NaN-------------
  if (isNaN(newWithdrawAmount)) {
    alert("please provide a valid number!!!");
    return;
  }
  // ------------------------------------------
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");

  const previousBalanceTotal = getTextElementValueById("balance-total");

  //------if the withdraw money is higher than the main balance---------
  if (newWithdrawAmount > previousBalanceTotal) {
    alert("ato tk nai!!!");
    return;
  }
  //--------------------------------------------------------------------
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
