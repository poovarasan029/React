import {  useState  }from 'react';
import './App.css';
import Noo from './class';
// import Expense from './components/new expense/ui/expense';

import NewExpense from './components/new expense/newExpense';
import Expense from './components/new expense/ui/expense/expense';

function App() {
 let user= [
  {
    date: new Date(2022,9,6),
    loan: 'Car Loan',
    amount:500000
  },
  {
    date: new Date(2022,9,5),
    loan:'Personal Loan',
    amount:400000
  },
  {
    date: new Date(2021,0,2),
    loan: "Home Loan",
    amount:2500000
  }
  
]
const [like,setLike]=useState(user)


function any(exp){
  // console.log('in app.js')
  // console.log(exp);
  setLike((prev)=> {
    return [exp, ...prev];
  });
}
return(
  <div>
    <NewExpense onc={any}></NewExpense>    
    <Expense user={like}></Expense>
    {/* <Noo></Noo> */}
    </div>

);
}
export default App;
  
