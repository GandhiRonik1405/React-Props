import React from 'react'

import './ExpensItems.css'

function ExpensItems(props) {
    const month=props.date.toLocaleString('en-Us',{month:'long'});
    const year=props.date.getFullYear();
    const day=props.date.toLocaleString('en-Us',{month:'2-digit'});


  return (
    <div className='expense_items' >
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
<div className='discription'>
    <h1>{props.tittle}</h1>
    <button className='items_price'>{props.amount}</button>
</div>
    </div>
  )
}

export default ExpensItems
