import { useState } from 'react';
import './form.css';
function ExpenseForm(props){
    
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('')
    const [date,setDate]=useState('')

    function  add(event){
        event.preventDefault();
        const expensedata={
           date:new Date(date),
           loan:title,
           amount: amount
        }
        props.data(expensedata)
        // console.log(expensedata)
        //    console.log(title,amount,date);
           setTitle('');
           setAmount('');
           setDate('');
           
    }
    function tit(event) {
        setTitle(event.target.value) 
    }
    function amt(event){
        setAmount(event.target.value);
    }
    function dat(event){
        setDate(event.target.value);
    }
  
    return(
        <div>
            <h1 className="fe">Expense App</h1>
       
        <form id="ef">
            <div className='tit'>
                <label>Title</label><br></br>
                <input  type="text" value={title} onChange={tit}></input>
            </div>
            <div className='amt'>
                    <label className='te'>Amount</label><br></br>
                    <input type="number" value={amount} onChange={amt}></input>
           </div>
            <div className='dat'>
                        <label>Date</label><br></br>
                        <input className='at' type="date" value={date} onChange={dat} ></input>
            </div>
            <button className='can'>Cancel</button>

           <button className='add' onClick={add} >Add Expense </button>
        
        </form></div>
        
    ) 
}
export default ExpenseForm;