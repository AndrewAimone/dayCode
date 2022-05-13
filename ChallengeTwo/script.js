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


// Other Form

let family = {
    incomes :   [2500, 3000.6, 300.78],
    expenses:   [1500, 300.98, 100.5],
}

function sum(array){
    let total = 0

    for (const value of array) {
        total += value
    }

    return total
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses
    
    const itsOk = total >= 0
    
    let balanceText = "Negative"
    
    if (itsOk){
        balanceText = "Positive"
    }

    console.log(`Your Balance is ${balanceText}: ${total.toFixed(2)} R$`);

}

calculateBalance()