import { act } from "@testing-library/react";

//1. Create a state type
export type Expense ={
    id: number,
    name: string,
    cost: number,
    isEssential: boolean
}
export type BudgetManagerState = {
    isEssentialInput: boolean;
    nameInput: string,
    costInput: number,

    unpaidExpenses: Expense[],
    paidExpenses: Expense[],
    totalCost: number
    paidCost: number
    unpaidCost: number
}

//2. Actions
export type ExpenseName = {type:"SET_EXPENSE_NAME", payload:string}; 
export type CostInput = {type:"SET_COST_INPUT", payload:number};
export type MarkIsEssential = {type:"MARK_IS_ESSENTIAL", payload:boolean};
export type AddExpenses= {type:"ADD_EXPENSES"};
export type DeletePaidExpenses = { type: "DELETE_PAID_EXPENSES"; payload: number };
export type DeleteUnpaidExpenses = {type: "DELETE_UNPAID_EXPENSES";payload: number;};
export type MarkIsPaid = { type: "MARK_IS_PAID"; payload: number };
export type SetTotalCost = { type: "SET_TOTAL_COST"; payload: number };

export type BudgetManagerAction = ExpenseName | CostInput | MarkIsEssential | AddExpenses | DeletePaidExpenses | DeleteUnpaidExpenses | MarkIsPaid| SetTotalCost;

export function budgetManagerReducer(state: BudgetManagerState, action: BudgetManagerAction): 
BudgetManagerState{
    
    const newState: BudgetManagerState = JSON.parse(JSON.stringify(state));
    
    switch(action.type){

        case "SET_EXPENSE_NAME":{
            newState.nameInput = action.payload;
            return newState;
        }

        case "SET_COST_INPUT":{
            newState.costInput = action.payload;
            return newState;
        }

        case "MARK_IS_ESSENTIAL":{
            console.log(action.payload)
            newState.isEssentialInput = action.payload;
            return newState;
        }

            
        case "ADD_EXPENSES":{
            const expense: Expense = {
               id: Math.random(),
               name: newState.nameInput,
               cost: newState.costInput,
               isEssential: newState.isEssentialInput
            }
            newState.unpaidExpenses.push(expense);
            updateTotalCosts(newState)
            console.log(newState);
            return newState;
            
            }
        case "DELETE_PAID_EXPENSES":{
            newState.paidExpenses = newState.paidExpenses.filter(expense => expense.id !== action.payload);
            updateTotalCosts(newState)
            return newState;
            }
            
        case "DELETE_UNPAID_EXPENSES":{
            newState.unpaidExpenses = newState.unpaidExpenses.filter(expense => expense.id !== action.payload);
            updateTotalCosts(newState)
            return newState;

            }
       
        case "MARK_IS_PAID":{
                const expense: Expense | undefined = newState.unpaidExpenses.find(expense => expense.id === action.payload);
                if (!expense){
                    return newState;
                }
                newState.unpaidExpenses = newState.unpaidExpenses.filter(expense => expense.id !== action.payload);
                newState.paidExpenses.push(expense);
                updateTotalCosts(newState)
                return newState;
            }
        case "SET_TOTAL_COST":{
                newState.totalCost = action.payload;                
                let total = 0;
                newState.unpaidExpenses.forEach(expense => {total += expense.cost; });
                newState.paidExpenses.forEach(expense => {total += expense.cost; });
                state.totalCost = total;
                return newState;
             }

        
 }}

    function updateTotalCosts(state: BudgetManagerState) {
        let total = 0;
        let paidtotal = 0;
        let unpaidtotal = 0;
       
        state.unpaidExpenses.forEach(expense => {unpaidtotal += expense.cost});     
 
        state.paidExpenses.forEach(expense => {paidtotal += expense.cost });

        state.unpaidExpenses.forEach(expense => {total += expense.cost});
        state.paidExpenses.forEach(expense => {total += expense.cost });
        
        state.paidCost = paidtotal;
        state.unpaidCost = unpaidtotal;
        state.totalCost = total;
  }
  
    

