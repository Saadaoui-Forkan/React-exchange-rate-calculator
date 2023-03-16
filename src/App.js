/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import CurrencyInput from './components/CurrencyInput';
import Header from './components/Header';

function App() {

  const [rates,setRates] = useState([])
  const [currencyOne,setCurrencyOne] = useState('EUR')
  const [currencyTwo,setCurrencyTwo] = useState('TND')
  const [amountOne,setAmountOne] = useState(1)
  const [amountTwo,setAmountTwo] = useState(1)
  const getCurrency = async () => {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    const data = await response.json()
    setRates(data.rates)
  }
  useEffect(() => {
    getCurrency()
  }, [])

  const format = (num) => {
    return num.toFixed(3)
  }

  const handleAmountOneChange = (amountOne) => {
    setAmountOne(amountOne);
    setAmountTwo(format(amountOne * rates[currencyTwo] / rates[currencyOne]))
  }
  const handleCurrencyOneChange = (currencyOne) => {
    setCurrencyOne(currencyOne);
    setAmountTwo(format(amountOne * (rates[currencyTwo] / rates[currencyOne])))
  }

  const handleAmountTwoChange = (amountTwo) => {
    setAmountTwo(amountTwo);
    setAmountOne(format(amountTwo * (rates[currencyOne] / rates[currencyTwo])))
  }
  const handleCurrencyTwoChange = (currencyTwo) => {
    setCurrencyTwo(currencyTwo);
    setAmountOne(format(amountTwo * (rates[currencyOne] / rates[currencyTwo])))
  }
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <CurrencyInput 
          currencyArray = {Object.keys(rates)}
          amount = {amountOne}
          currency = {currencyOne}
          onAmountChange = {handleAmountOneChange}
          onCurrencyChange = {handleCurrencyOneChange}
        />

        <CurrencyInput
          currencyArray = {Object.keys(rates)}
          amount = {amountTwo}
          currency = {currencyTwo}
          onAmountChange = {handleAmountTwoChange}
          onCurrencyChange = {handleCurrencyTwoChange}
        />
      </div>
    </div>
  );
}

export default App;
