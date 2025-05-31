//get all the html elements
const descriptionInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const transactionList = document.getElementById("transactionList");
const balance = document.getElementById("balance");

//arrays for income, expenses and transactions
let income = [];
let expense = [];

//to keep track of total balance
let total = 0;

//function to add an entry with type as parameter
function addEntry(type){

    //get user input for desc & amount
    const description = descriptionInput.value
    const amount = Number(amountInput.value);  

    //new object to place all new entries
    const newEntry = {
        description: description, 
        amount: amount, 
        type: type};

    // if newEntry's type === "income", <add> newEntry's amount to the total, add to income, transaction arrays w/ push method
    // then show the array for income
    if (newEntry.type === "income"){
        total += newEntry.amount;
        income.push(newEntry);
        //console.log(income);
       
        const li = document.createElement("li");  
        li.textContent = `${description} - ${amount} kr (Inkomst)`;
        incomeList.appendChild(li);
      
    } else {
    //otherwise <subtract> newEntry's amount from total, add to expense and transaction arrays w/ push method, then show the array for expense
        total -= newEntry.amount;
        expense.push(newEntry);
        //console.log(expense);

        const li = document.createElement("li");  
        li.textContent = `${description} - ${amount} kr (Utgift)`;
        expenseList.appendChild(li);
    }
    //call function to clear input & show balance
     clearInput();
     showBalance();
}

//function to clear input
function clearInput(){
    descriptionInput.value = "";
    amountInput.value = "";
}

function showBalance(){
    //clear so not all entries show, just the final end total
    balance.innerHTML = "";

    const text = document.createElement("p");
    text.textContent = total;
    balance.appendChild(text);
}

incomeBtn.addEventListener("click", () => {
    addEntry("income");
})
expenseBtn.addEventListener("click", () => {
    addEntry("expense");
})