// access form controls
const accountControl = document.querySelector('.account-control');
const balance = document.querySelector('.balance');
const actionState = document.querySelector('.action-state');

let accBalance = 0;

function updateBalance(event) {
  // variable for clicked element
  const clickedControl = event.target;

  // element class names for conditional testing
  const deposit = 'deposit';
  const clear = 'clear';
  const withdraw = 'withdraw';

  // conditional test for deposit/clear/withdraw actions
  // i.e increase/decrease/clear accBalance value
  // and display action messgae
  if (clickedControl.classList.contains(deposit)) {
    accBalance += 10;
    if (accBalance > 0) {
      actionState.textContent = 'Deposit Confirmed.🎉';
    } else if (accBalance <= 0) {
      actionState.textContent = 'Credit balance updated.🙂';
    }
  } else if (clickedControl.classList.contains(clear)) {
    accBalance = 0;
    actionState.textContent = 'Your account is empty.😲';
  } else if (clickedControl.classList.contains(withdraw)) {
    accBalance -= 10;

    if (accBalance > 0) {
      actionState.textContent = 'Withdrawal Successful.🙂';
    } else if (accBalance < 0) {
      actionState.textContent = 'Debiting from credit line.😑';
    }
  }

  // conditional to style balance display
  if (accBalance > 0) {
    balance.style.color = '#1fc990';
  } else if (accBalance < 0) {
    balance.style.color = '#c90c4b';
  } else if (accBalance === 0) {
    balance.style.color = '#808080';
  }

  // update balance field with accBalance
  balance.textContent = `$ ${accBalance}.00`;
}

accountControl.addEventListener('click', updateBalance);
