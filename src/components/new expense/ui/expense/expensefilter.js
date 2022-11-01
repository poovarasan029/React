
import './expensefilter.css';
function ExpenseFilter(props){
   function ca(event){
    props.c(event.target.value)
   }
//    function see(event){
//               console.log(event.target.value);
//     }
    return(
        <div>
            <select className='se'onChange={ca} value={props.Say}>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            </select>
            <h2 className="fi">Filter by Year</h2>
        </div>
    )
}
export default ExpenseFilter;