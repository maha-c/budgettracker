import { render, screen } from "@testing-library/react";
import { PaidExpensesList } from "../paid-expenses-list"
import {  BudgetManagerAction, Expense } from "../budgetmanage-reducer";


test("Displays tasks", async ()=>{

    const exp: Expense[] = [
        {  name:"Food", id:1, cost:10, isEssential:true},
        {  name:"Clothing", id:2, cost:5, isEssential:true},
    ]
    render(<PaidExpensesList  paidExpenses={exp} dispatch={function (value: BudgetManagerAction): void {
        throw new Error("Function not implemented.");
    } } />)
    
   
    
    const elementDishes = await screen.findByText(/Food/);
    const elementLaundry = await screen.findByText(/Clothing/);

    expect(elementDishes.innerHTML).toBe("Food ");
    expect(elementLaundry.innerHTML).toBe("Clothing ");
    
})