document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("expense-form");
    const descriptionInput = document.getElementById("expense-description");
    const amountInput = document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const description = descriptionInput.value;
        const amount = parseFloat(amountInput.value);

        if (!description || isNaN(amount)) {
            return;
        }

        const expense = { description, amount };
        addExpenseToList(expense);
        saveExpenseToLocalstorage(expense);

        descriptionInput.value = "";
        amountInput.value = "";
    });

    function addExpenseToList(expense) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${expense.description}</span>
            <span>$${expense.amount.toFixed(2)}</span>
        `;
        expenseList.appendChild(li);
    }

    function saveExpenseToLocalstorage(expense) {
        let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
        expenses.push(expense);
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    function loadExpensesFromLocalstorage() {
        const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
        expenses.forEach(addExpenseToList);
    }

    loadExpensesFromLocalstorage();
});
