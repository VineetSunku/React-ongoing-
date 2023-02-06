
import Expense from "./components/Expenses/Expense";

const App= ()=> {
const expenses=[
  {title:'Dry-Cleaning',
  amount:'100',
  date:new Date(2021,1 ,28)
},
{title:'Wet-Cleaning',
amount:'1000',
date:new Date(2021,1 ,28)
},
{title:'Dry Wet-Cleaning',
amount:'1200',
date:new Date(2021,1 ,28)
},
{title:'Basic-Cleaning',
amount:'1500',
date:new Date(2021,1 ,28)
},

];

  return (
    <div>
     
      <div >
      <Expense dataa={expenses}></Expense></div>
    </div>
  );
}

export default App;
