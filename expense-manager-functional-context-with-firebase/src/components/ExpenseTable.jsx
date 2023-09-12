import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/app-context';
import ExpenseRow from './ExpenseRow';
export default function ExpenseTable(){
  let appContext=useContext(AppContext);

let fetchData=()=>{
  fetch('https://react-expense-manager1-default-rtdb.firebaseio.com/expenses.json',
  {
method:"get",
headers:{
  "content-type":"application/json",
  Accept:"application/json",
},
  }).then((response)=>{
    return response.json();
  })
  .then((data)=>{
    console.log(data);
    let fethedExpenses=[];
    for(let key in data){
      console.log(key);
      console.log(data[key]);
      let expense=data[key];
      expense.id=key;
      fethedExpenses.push(data[key]);
    }
    // console.log(data);
    appContext.addExpenses(fethedExpenses);

  });
};
// fetchData();
useEffect(fetchData,[]);

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