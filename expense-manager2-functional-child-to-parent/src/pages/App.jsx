import 'bootstrap/dist/css/bootstrap.css';
import '../resources/css/custom.css';
import mainImg from '../resources/m1.png';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import { useState } from 'react';
function App(){
    // statefull array
    let [expensess ,setExpenses]=useState([]);

let onNewExpenseHandler =(expense)=>{
    // setExpenses([expense]);
    setExpenses((prevState)=>{
        return[expense, ...prevState];
    });
    console.log(expensess.length);
};
let onDeleteExpenseHandler =(id)=>{
let newExpenses=expensess.filter((element) => element.id != id);
setExpenses(newExpenses);
};


    return(<div className="container mt-5">
    <div className="row">

      <div className="col-sm-6">
        <img src={mainImg} className="img-fluid" alt=""/>
      </div>
      <div className="col-sm-6 mt-5">
        <div className="row tit">
          <h4 className="">wellcom to lorem Expense Manager </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
       <ExpenseForm  onNewExpense={onNewExpenseHandler} />
      </div>
  
    </div>
   <ExpenseTable expensess={expensess} onDeleteExpense={onDeleteExpenseHandler} />
  </div>);
}
export default App;