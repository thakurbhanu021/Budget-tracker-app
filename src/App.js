import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Budget from './Components/Budget';
import Remaining from './Components/Remaining';
import ExpenseTotal from './Components/ExpenseTotal';
import ExpenseList from './Components/ExpenseList';

function App() {
  return (
   <div className='container'>
    <h1 className='mt-3'>My Budget Planner</h1>
    <div className='row mt-3'>
      <div className='col-sm'>
        <Budget/>
      </div>
      <div className='col-sm'>
        <Remaining/>
      </div>
      <div className='col-sm'>
        <ExpenseTotal/>
      </div>
    </div>
    <h2 className='mt-3'>Expenses</h2>
    <div className='row mt-3'>
      <div className='col-sm'>
        <ExpenseList/>
      </div>
    </div>
   </div>
  );
};

export default App;
