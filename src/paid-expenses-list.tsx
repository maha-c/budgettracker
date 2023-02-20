import { Expense, BudgetManagerAction } from "./budgetmanage-reducer";

type PaidExpenseProps = {
    paidExpenses: Expense[],
    dispatch: React.Dispatch<BudgetManagerAction>
}
export function PaidExpensesList(props: PaidExpenseProps) {
return<ul>

        {props.paidExpenses.map(e => <li>{`Expense Name: ${e.name} Cost: $${e.cost} IsEssenstial: ${e.isEssential}`}
        <button onClick={() => props.dispatch({type: "DELETE_PAID_EXPENSES", payload: e.id})}>Delete</button>
        </li>)}

    </ul>
}