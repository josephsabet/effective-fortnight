import { useContext } from 'react';
import { AppContext } from '../context/app-context';
import ExpenseRow from './ExpenseRow';
export default function ExpenseTable(){
  let appContext=useContext(AppContext);
    return( <div className="row mt-5 mb-5">
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
            {appContext.expensess.map((element)=>( 
            <ExpenseRow key={element.id}
             expense={element} 
          />
            ))}
        </tbody>
      </table>
    </div>
  </div>);
}