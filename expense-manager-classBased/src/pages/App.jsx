import{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../resources/css/custom.css';
import mainImge from "../resources/img/m1.png";
import ExpenseTable from "../components/ExpenseTable";
import ExpenseForm from "../components/ExpenseForm";

class App extends Component{
render(){
 return( 
      <div className="container mt-5">
    <div className="row">
      <div className="col-sm-6">
        <img src={mainImge} className="img-fluid" alt=""/>
      </div>
      <ExpenseForm />
    </div> 
   <ExpenseTable />
    </div>
)};
}
export default App;