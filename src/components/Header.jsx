import React from 'react'
import img from '../img/money.png'

function Header() {
  return (
    <div>
      <img src={img} alt="" className="money-img" />
      <h1>Exchange Rate Calculator</h1>
      <p>Choose the currency and the amounts to get the exchange rate</p>
    </div>
  )
}

export default Header
