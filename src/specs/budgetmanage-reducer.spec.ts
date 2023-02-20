
import {  budgetManagerReducer,BudgetManagerState} from "../budgetmanage-reducer"

test("ADD_EXPENSES", () =>{
    const budgetState: BudgetManagerState ={
    isEssentialInput: false,
    nameInput: "Healthcare",
    costInput: 500,

    unpaidExpenses: [],
    paidExpenses: [],
    totalCost:0,
    paidCost: 0,
    unpaidCost: 0

    };
    const nextState = budgetManagerReducer(budgetState, {type: "ADD_EXPENSES"})
    expect(nextState.unpaidExpenses.length).toBe(1);
    expect(nextState.unpaidExpenses[0].name).toBe("Healthcare");
    expect(nextState.totalCost).toBe(500)
})
   
    
    
    test("MARK_IS_PAID", () =>{
    const budgetState: BudgetManagerState ={
    nameInput: "Childcare",
    costInput: 200,
    isEssentialInput: true,
    

    unpaidExpenses: [{id:101, name: "childcare", cost: 200, isEssential: true}],
    paidExpenses: [{id:200, name: "food", cost: 250, isEssential: false}],
    totalCost: 450,
    paidCost: 250,
    unpaidCost: 200


    };
    const nextState = budgetManagerReducer(budgetState, {type:"MARK_IS_PAID" , payload:101});
    expect(nextState.unpaidExpenses.length).toBe(0)
    expect(nextState.paidExpenses.length).toBe(2)
    expect(nextState.totalCost).toBe(450)
    expect(nextState.paidCost).toBe(450)
  


})