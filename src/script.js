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
let transaction = [];

//to keep track of total balance
let total = 0;

//function to add an entry with type as parameter
function addEntry(type){

    //get user input for desc & amount
    const description = descriptionInput.value
    const amount = Number(amountInput.value);  

    //new object to place all new entries
    const newEntry = {description, amount, type};

    // if newEntry's type === "income", then <add> newEntry's amount to the total, add all of newEntry to expense, transaction []s w/ push method
    // then call the show output function with the lists/arrays for income and transaction and object newEntry as parameters
    if (newEntry.type === "income"){
        total += newEntry.amount;
        income.push(newEntry);
        transaction.push(newEntry);
        showOutput(incomeList, newEntry);
        showOutput(transactionList, newEntry);
    } else {
    //otherwise subtract object's amount from total, add to expense and transaction []s w/ push method, then call the show output function as above
        total -= newEntry.amount;
        expense.push(newEntry);
        transaction.push(newEntry);
        showOutput(expenseList, newEntry);
        showOutput(transactionList, newEntry);
    }
    //call function to clear input
     clearInput();
}

//added function to clear input and reduce previous redundancy
function clearInput(){
    descriptionInput.value = "";
    amountInput.value = "";
}
//function to show output with a list & object as parameters
function showOutput(aList, newEntry){

    //clear so not all entries show, just the final end total
    balance.innerHTML = "";

    //create list element & output for all lists, before I had a lot of redundant code 
    const li = document.createElement("li");                                 
    li.textContent = `${newEntry.description} - ${newEntry.amount} kr (${newEntry.type === "income" ? "Inkomst" : "Utgift"})`; // show inkomst or utgift depending on the objects's type
    aList.appendChild(li);

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