import { useState } from "react";
import ExpenseForm from "./expenseform";
import "./newexpense.css";

function NewExpense(props){
    const[edit,setEdit]=useState(false);
    function start(){
        setEdit(true)
    }
    function data(exp){
        // console.log('in new exp')
        // console.log(exp);
        const expensedata={
            ...exp
        }
        // console.log(expensedata)
        props.onc(expensedata)
        setEdit(false)
    }
    return(
        <div>
        
        { !edit? <button  id="jafree" onClick={start} >ADD EXPENSES</button> :<ExpenseForm data={data}></ExpenseForm> }
        </div>
    )
}
export default NewExpense;