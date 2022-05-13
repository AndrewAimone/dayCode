function expenseControl(){
    
    let controlFamily = {
        incomes  : [100, 50, 200, 500] ,
        expenses : [300, 800, 900, 10] ,

    }
    
    let sumIncomes = 0
    let sumExpenses = 0


    for (let i = 0; i < controlFamily.incomes.length; i++) {
        sumIncomes += controlFamily.incomes[i];
        
    }

    for (let i = 0; i < controlFamily.expenses.length; i++) {
        sumExpenses += controlFamily.expenses[i];
     
    }

    let calcFamily = sumIncomes - sumExpenses


    console.log(`Family Balance: ${calcFamily}`)
    
}
expenseControl()