import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => (transaction.amount));
    const balance = amount.reduce((acc,item)=>(acc += item),0).toFixed(2);

    return(

        <div>
            <h4>Balance</h4>
            <h1>${balance}</h1>
        </div>
    )
}