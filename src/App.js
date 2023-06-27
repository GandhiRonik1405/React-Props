import React from 'react';

import './App.css';
import ExpensItems from './components/ExpensItems';
function App() {
  // let expensDate = new Date(2003, 5, 14);
  // let expensTittle = "Collage Fees";
  // let expensAmount = 40000;

  let expenses=[
    {
      id:'e1',
      tittle: 'Collage fees',
      amount: 12300,
      date: new Date( 2021 , 5 , 14 )

  },

  {
    id:'e2',
    tittle: 'Hostel fees',
    amount: 13300,
    date: new Date( 2021 , 5 , 14 )

},

{
  id:'e3',
  tittle: 'Abcdgf fees',
  amount: 5000,
  date: new Date( 2021 , 5 , 14 )

},

{
  id:'e4',
  tittle: ' Foodss fees ',
  amount: 3000,
  date: new Date( 2021 , 5 , 14 )

},
];

  return (

    <div className='app-container'>
      <h1>Lets Get Started.</h1>
      <ExpensItems
        date={expenses[0].date} tittle={expenses[0].tittle} amount={expenses[0].amount} />

      <ExpensItems
        date={expenses[1].date} tittle={expenses[1].tittle} amount={expenses[1].amount} />

      <ExpensItems
        date={expenses[2].date} tittle={expenses[2].tittle} amount={expenses[2].amount} />

      <ExpensItems
        date={expenses[3].date} tittle={expenses[3].tittle} amount={expenses[3].amount} />
        </div>
  )
}

export default App;
