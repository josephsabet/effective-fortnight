import { useState } from "react";
import { createContext } from "react";

export const AppContext= createContext({

expensess:[],
addNewExpense:(expense)=>{},
removeExpense:(id)=>{},
addExpenses:(expenses)=>{},

});
export const AppContextProvider =(props)=>{
    let [expensess ,setExpenses]=useState([]);

let addNewExpense=(item)=>{
    setExpenses((prevState)=>{
        return[item,...prevState];
    })
};
let removeExpense =(id)=>{
let data=expensess.filter((element)=>element.id != id);
setExpenses(data);
};

let addExpenses =(array)=>{
setExpenses(array);

}

return (<AppContext.Provider 
value={{
expensess:expensess,
addNewExpense:addNewExpense,
removeExpense:removeExpense,
addExpenses:addExpenses,
}
} >
{props.children}
</AppContext.Provider>)
};