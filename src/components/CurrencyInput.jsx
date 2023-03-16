import React from 'react'

function CurrencyInput({currency, amount, currencyArray, onCurrencyChange, onAmountChange}) {
  return (
    <div className="currency">
        <select 
            onChange={(e)=>onCurrencyChange(e.target.value)} 
            value = {currency}
        >

        {
            currencyArray.map((cur,index) => {
            return <option key={index}>{cur}</option>
            })
        }

        </select>

        <input 
            type="number" id="amount-one" placeholder="0"
            onChange={(e)=>onAmountChange(e.target.value)} 
            value = {amount}
        />

    </div>
  )
}

export default CurrencyInput
