import './App.css';
import { Balance } from './Components/Balance';
import {Header} from './Components/Header';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className='container'>
        <Header/>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
