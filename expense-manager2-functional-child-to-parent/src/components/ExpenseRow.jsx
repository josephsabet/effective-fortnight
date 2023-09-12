import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-regular-svg-icons';
function ExpenseRow(props) {
    let onDeleteHandler=()=>{
props.onDeleteExpense(props.expense.id);

    };
    return( <tr>
        <td> {props.expense.title}</td>
        <td>{props.expense.date}</td>
        <td>{props.expense.value} </td>
        <td colSpan="2">{props.expense.description}</td>
        <td className="text-right">
            <a href="#" onClick={onDeleteHandler} className="delete" >
          <FontAwesomeIcon icon={faTrashCan} />
          </a>
          </td>
      </tr>);
}
export default ExpenseRow;