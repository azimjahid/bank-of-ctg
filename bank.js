// login button event handler
const loginBtn = document.getElementById("submit");
loginBtn.addEventListener("click", function(){
const loginArea = document.getElementById("login-area");
loginArea.style.display = "none";
const transactionArea = document.getElementById("transaction-area");
transactionArea.style.display = "block";
})

// deposit button event handler
const depositBtn = document.getElementById("deposit-add");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("deposit-amount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("deposit-current").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;

    document.getElementById("deposit-current").innerText = totalDeposit;

    const currentBalance = document.getElementById("balance-current").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById("balance-current").innerText = totalBalance;



    document.getElementById("deposit-amount").value = ""
})