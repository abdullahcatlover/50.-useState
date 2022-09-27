/* import ExpenseDate from "./components/ExpenseDate"; */
/* import ExpenseItem from "./components/ExpenseItem"; */
import Expenses from "./components/Expenses/Expenses";


const App =()=> {

  const expenses = [
    {
      id: 'el1',
      title: 'toilet paper',
      amount: 94.15,
      date: new Date(2020, 1, 14),
    },
    {
      id: 'e2',
      title: 'New Tv',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),

    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]; 
  return (
    <div className="App">
      <Expenses items = {expenses}/>
    </div>
  );  
  
}

export default App;