import { Component } from "react";
import ExpenseRow from "./ExpenseRow";

class ExpenseTable extends Component{
    render(){
        return( 
        <div className="row mt-5 mb-5">
        <div className="custom-card ">
          <table className="table ">
            <thead>
              <tr>
                <th> Title</th>
                <th> Date</th>
                <th>value</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
             <ExpenseRow />
            </tbody>
          </table>
        </div>
      </div>);
    }
}
export default ExpenseTable;