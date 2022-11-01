import { useState } from "react";

function ExpenseDate(props){
    let month=props.date.toLocaleString('en-US',{month:'long'});
    let date=props.date.toLocaleString('en-US',{day:'2-digit'});
    let year=props.date.getFullYear();

    // const[title,setTitle]=useState(month)
    // function b(){
    //     // setTitle('Update')
    //     // console.log(title);
    // }

    return(
        <div id="date">
            <h2 className="d">{month}</h2>
            <h2 className="dc">{year}</h2>
            <h2 className="dd">{date}</h2>
            {/* <button className="b" onClick={b}>Click Me!</button> */}
        </div>
    )
}
export default ExpenseDate;