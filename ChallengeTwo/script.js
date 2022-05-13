function expenseControl(){
    
    let controlFamily = {
        recipes  : [100, 50, 200, 500] ,
        expenses : [300, 800, 900, 10] ,

    }
    
    let sumRecipes = 0
    let sumExpenses = 0


    for (let i = 0; i < controlFamily.recipes.length; i++) {
        sumRecipes += controlFamily.recipes[i];
        
    }

    for (let i = 0; i < controlFamily.expenses.length; i++) {
        sumExpenses += controlFamily.expenses[i];
     
    }

    let calcFamily = sumRecipes - sumExpenses


    console.log(`Family Balance: ${calcFamily}`)
    
}
expenseControl()