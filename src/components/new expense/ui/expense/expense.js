import { useState } from 'react';
import Card from "../card";
import "./expense.css";
import ExpenseFilter from "./expensefilter";
import ExpenseItem from "./expenseitem";




function Expense(props){
    const [Say,setSay]=useState("2022")
function c(data){
    setSay(data);
    // console.log(event.target.value);
};
// const say=(filtered) => { setSay(filtered) }
const filteredExpense = props.user.filter((Expense)=>{
    return Expense.date.getFullYear().toString()=== Say;
});

    return(
        <div>
        <Card className="exl">
            <ExpenseFilter  c={c} Say={Say}></ExpenseFilter>
            {filteredExpense.length===0 ? (<h2 style={{color:"red", textAlign:"center"}}>No Expense</h2>) : filteredExpense.map((use)=> (
<ExpenseItem date={use.date} Loan={use.loan} Amount={use.amount}></ExpenseItem>


            ))}
            {/* <ExpenseItem date={props.user[0].date} Loan={props.user[0].loan} Amount={props.user[0].amount}></ExpenseItem>
           <br></br>
             <ExpenseItem date={props.user[1].date} Loan={props.user[1].loan} Amount={props.user[1].amount}></ExpenseItem> */}
        </Card>
</div>
    )
}
export default Expense;