"use strict";var accountControl=document.querySelector(".account-control"),balance=document.querySelector(".balance"),actionState=document.querySelector(".action-state"),accBalance=0;function updateBalance(t){var a=t.target;a.classList.contains("deposit")?0<(accBalance+=10)?actionState.textContent="Deposit Confirmed.🎉":accBalance<=0&&(actionState.textContent="Credit balance updated.🙂"):a.classList.contains("clear")?(accBalance=0,actionState.textContent="Your account is empty.😲"):a.classList.contains("withdraw")&&(0<(accBalance-=10)?actionState.textContent="Withdrawal Successful.🙂":accBalance<0&&(actionState.textContent="Debiting from credit line.😑")),0<accBalance?balance.style.color="#1fc990":accBalance<0?balance.style.color="#c90c4b":0===accBalance&&(balance.style.color="#808080"),balance.textContent="$ ".concat(accBalance,".00")}accountControl.addEventListener("click",updateBalance);