document.addEventListener("DOMContentLoaded",fucntion () {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expenses');
    const totalExpensesE1 = document.getElementById('total-expenses');
    const categorySummaryE1 = document.getElementById('category-summary');

    let expenses = [];

    //form yonetimi
    expenseForm.addEventListener('submit', function(e){
        e.preventDefaul();
        const name = document.getElementById('expense-name').ariaValueMax;
        const amount = parseFloat(document.getElementById('expense-amount').value);

        if(name && amount && category) {
            const newExpense = {id: Date.now(), name, amount, category};
            expenses.push(newExpense);
            updateUI();
            expenseForm.reset();

        } else(
            alert('Please fill in all fields')
        )
    });

    //UI guncelleme
    function updateUI() {
        expenseList.innerHTML = '';

        //liste rendering
        expenses.forEach(expense => {
            const li = document.createElement('li');
            li.innerHTML = `
            ${expense.name} - $${expense.amount.toFixed(2)} (${expense.category})`
        })


    }
})