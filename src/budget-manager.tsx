import { useReducer } from "react"
import { budgetManagerReducer, BudgetManagerState} from "./budgetmanage-reducer"
import { UnpaidExpensesList } from "./unpaid-expenses-list";
import { PaidExpensesList } from "./paid-expenses-list";

const initialBudgetState: BudgetManagerState = {
    nameInput: "",
    costInput: 0,
    isEssentialInput: false,
    unpaidExpenses: [],
    paidExpenses: [],
    totalCost:0,
    paidCost:0,
    unpaidCost:0


}


export default function BudgetManager(){

    const [budgetState, dispatch] = useReducer(budgetManagerReducer, initialBudgetState);

return<>
 <div style={{ backgroundColor: "lightblue", height: "100vh", maxWidth: "800px" }}>
    
    <h1 style={{ backgroundColor: 'blue', color: 'white', padding: '2px', textAlign: "center" }}>Budget Manager</h1>
    <h3>New Expense</h3>
    <label htmlFor="name">Expense Name</label>
    <input id="name" type="text" onChange={(event) => dispatch({type:"SET_EXPENSE_NAME", payload:event.target.value})}/>

    <label htmlFor="cost">Expense Cost</label>    
    <input id="cost" type="number" onChange={(ev) => dispatch({type:"SET_COST_INPUT", payload: parseFloat(ev.target.value)})} />

    <label htmlFor="is_essential">Mark Essential</label>
    <input id="is_essential" type="checkbox" value={'true'} onChange={(ev) => dispatch({type:"MARK_IS_ESSENTIAL", payload:ev.target.checked})}/>
    <button style={{ backgroundColor: 'lightgrey', color: 'green', padding: '10px', alignItems: "center" }}  onClick={() => dispatch({type:"ADD_EXPENSES"})}>Add Expense</button>
   
    <div style={{ backgroundColor: 'lightsalmon' , maxWidth: "800px" }} >
    
    <h3>Unpaid Expenses</h3>
     <UnpaidExpensesList unpaidExpenses={budgetState.unpaidExpenses} dispatch={dispatch}/>  
    </div>
   
     {/* <ul>
        {budgetState.unpaidExpenses.map(ex => 
          <li>
            <button onClick={() =>dispatch({type:"DELETE_UNPAID_EXPENSES", payload:ex.id})}>Delete</button>
            {`Expense Name: ${ex.name} Expense Cost: $${ex.cost} Is Essential: ${ex.isEssential}`}
            <button onClick={() =>dispatch({type:"MARK_IS_PAID", payload:ex.id})}>Mark Paid</button>
          </li>  )}
    </ul>  */}
    
    <div style={{ backgroundColor: 'lime' , maxWidth: "800px" }} >
    <h3>Paid Expenses</h3>
    <PaidExpensesList paidExpenses={budgetState.paidExpenses} dispatch ={dispatch}/>
    </div>
    {/* <ul>
        {budgetState.paidExpenses.map (ex => 
          <li>
            <button onClick={() =>dispatch({type:"DELETE_PAID_EXPENSES", payload:ex.id})}>Delete</button>
            {`Expense Name: ${ex.name} Expense Cost: $${ex.cost} Is Essential: ${ex.isEssential}`}
          </li>  )}

    </ul> */}
    <h3>Total Costs</h3>
    <h5 style={{ backgroundColor: 'lightgray', height: "30px", maxWidth: "150px" }}>${budgetState.totalCost}</h5>
    <h3>Total Paid Costs</h3>
    <h5 style={{ backgroundColor: 'lightgray', height: "30px", maxWidth: "150px" }}>${budgetState.paidCost}</h5>
    <h3>Total Unpaid Costs</h3>
    <h5 style={{ backgroundColor: 'lightgray', height: "30px", maxWidth: "150px" }}>${budgetState.unpaidCost}</h5>
    </div>
</>
}



