import { boolean } from "mathjs";
import { Expense, BudgetManagerAction } from "./budgetmanage-reducer";

type UnpaidExpenseProps = {
    unpaidExpenses: Expense[],
    dispatch: React.Dispatch<BudgetManagerAction>
}
export function UnpaidExpensesList(props: UnpaidExpenseProps) {
    return<ul>
        {props.unpaidExpenses.map(e => <li>{`Expense Name:${e.name} Cost: ${e.cost} IsEssenstial: ${e.isEssential}`}`
            <button onClick={() => props.dispatch({type: "MARK_IS_PAID", payload:e.id})}>Mark Paid</button>
            <button onClick={() => props.dispatch({type: "DELETE_UNPAID_EXPENSES", payload: e.id})}>Delete</button>
            <button onClick={() => props.dispatch({type: "MARK_IS_ESSENTIAL", payload: e.isEssential=true})}>IsEssenstial</button>          
            
        </li>)}  
    </ul>
}