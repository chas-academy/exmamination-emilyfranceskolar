//get & handle all the html elements
const desc = document.getElementById("desc");
const amount = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");

const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const transactionList = document.getElementById("transactionList");
const balance = document.getElementById("balance");

//arrays to keep all transactions, income, expenses 
let transaction = [];
let income = [];
let expense = [];

//to keep track of total balance
let total = 0;

function addIncome(){
    const incomeDesc = desc.value;
    const incomeAmount = Number(amount.value);
    
    const newTransaction = {
        desc: incomeDesc,
        amount: incomeAmount,
        type: "income" || "expense",
    };
    
    total += incomeAmount;
    //console.log(total);
    let isIncome = false;

    for (let item of income){
        if (item.desc === incomeDesc){
            item.type = "income";
            isIncome = true;
        }
    } if (!isIncome){
        //console.log(income);
        //console.log(transaction);
        income.push(newTransaction);
        transaction.push(newTransaction);
    }
    //clear earlier entries
    desc.value = "";
    amount.value = "";
    //call the show income function
    showIncome();
}

function addExpense(){
    const incomeDesc = desc.value;
    const incomeAmount = Number(amount.value);
    
    const newTransaction = {
        desc: incomeDesc,
        amount: incomeAmount,
        type: "income" || "expense",
    };
    
    let isExpense = false;
    total -= incomeAmount;
    //console.log(total);
    
    for (let item of expense){
        if (item.desc === incomeDesc){
            item.type = "expense";
            isExpense = true;
        }
    } if (!isExpense){
        //console.log(expense);
        //console.log(transaction);
        expense.push(newTransaction);
        transaction.push(newTransaction);
    }
    //clear earlier entries
    desc.value = "";
    amount.value = "";
    //call the show the expense function
    showExpense();
}
//function to print out all the income as a list
function showIncome(){
    //clear earlier entries
    incomeList.innerHTML = ""; 
    for (let item of income){
        const li = document.createElement("li");
        li.textContent = `${item.desc}: ${item.amount}kr`;
        incomeList.appendChild(li);
    }
}
//function to print out all the expenses as a list
function showExpense(){
    //clear earlier entries
    expenseList.innerHTML = ""; 
    for (let item of expense){
        const li = document.createElement("li");
        li.textContent = `${item.desc}: ${item.amount}kr`;
        expenseList.appendChild(li);
    }
}
//function to show all transactions
function showTransaction(){
    //clear earlier entries
    transactionList.innerHTML = ""; 
    for (let item of transaction){
        const li = document.createElement("li");
        li.textContent = `${item.desc}: ${item.amount}kr`;
        transactionList.appendChild(li);
    }
}
//show the total balance kept in the variable total
function showBalance(){
    balance.innerText = "";
    const text = document.createElement("p");
    text.textContent = "Saldo: " + total + " kr";
    balance.appendChild(text);
}

incomeBtn.addEventListener("click", () => {
    addIncome();
    showTransaction();
    showBalance();
})

expenseBtn.addEventListener("click", () => {
    addExpense();
    showTransaction();
    showBalance();
})


