import { useState } from "react";
import { createContext } from "react";

export const AppContext= createContext({

expensess:[],
addNewExpense:(data)=>{},
removeExpense:(id)=>{},
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
return (<AppContext.Provider 
value={{
expensess:expensess,
addNewExpense:addNewExpense,
removeExpense:removeExpense,
}
} >
{props.children}
</AppContext.Provider>)
};