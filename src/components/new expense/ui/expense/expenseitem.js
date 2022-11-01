import { useState } from "react";
import ExpenseDate from "./expensedate";

function ExpenseItem(props){
//     const[title,setTitle]=useState(props.Loan);
//     function clk(){
//         setTitle('updated!')
//         console.log(title);
//     }
    
    return(
        <div className="he">
            <ExpenseDate date={props.date}></ExpenseDate>
        
            <h2 className="loan"> {props.Loan} </h2>
            {/* <button className="ct" onClick={clk}>Change title</button> */}
            <h2 className="amount">{props.Amount}</h2>
        </div>
    )
    }
    export default ExpenseItem;