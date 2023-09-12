import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-regular-svg-icons';
import { useContext } from 'react';
import { AppContext } from '../context/app-context';
function ExpenseRow(props) {
   let appContext=useContext(AppContext); 
    let onDeleteHandler=()=>{
// appContext.removeExpense(props.expense.id);
deleteExpense();
    };

let deleteExpense =()=>{
    fetch(`https://react-expense-manager1-default-rtdb.firebaseio.com/expenses/${props.expense.id}.json`,
   { method:"delete",
headers:{
    "content-type":"appliction/json",
    Accept:"appliction/json",
},
 }).then((response)=>{
    return response.json();
 })
 .then((data)=>{
appContext.removeExpense(props.expense.id);
console.log(data);
 });
};

    return( <tr>
        <td> {props.expense.title}</td>
        <td>{props.expense.date}</td>
        <td>{props.expense.value}$ </td>
        <td colSpan="2">{props.expense.description}</td>
        <td className="text-right">
            <a href="#" onClick={onDeleteHandler} className="delete" >
          <FontAwesomeIcon icon={faTrashCan} />
          </a>
          </td>
      </tr>);
}
export default ExpenseRow;