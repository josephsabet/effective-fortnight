import { Component } from "react";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ExpenseRow extends Component{

    render(){
        return(<tr>
            <td> House rent </td>
            <td> 2022-05-09</td>
            <td>300$ </td>
            <td colSpan="2">any descrption can be here </td>
            <td className="text-right"><a href="#" className="delete" >
                <FontAwesomeIcon icon={faTrashCan} />
              </a></td>
          </tr>);

    }
}
export default ExpenseRow;