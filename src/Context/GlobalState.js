import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initalState ={
    transactions:[
        {id:"1", desc:"salary", amount:50000},
        {id:"2", desc:"book", amount:-500},
        {id:"3", desc:"calculator", amount:300}
    ]
}

export const GlobalContext = createContext(initalState);

export const GlobalProvider = ({children}) => {

    const[state, dispatch] = useReducer(AppReducer, initalState);

    function deleteTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}