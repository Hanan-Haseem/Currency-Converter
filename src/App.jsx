import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [amount,setAmount] = useState(1);
  const [fromCurrency,setFromCurrency] = useState ("USD");
  const [toCurrency,setToCurrency] = useState("LKR");
  const [convertedAmount,setConvertedAmount] = useState(null);
  const [exchangeRate,setExchangeRate] = useState(null);

  useEffect(()=>{
    const getExchangeRate = async() => {
      try{
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response= await axios.get(url);
        setExchangeRate(response.data.rates[toCurrency]);
      
      }catch(error){
        console.error("Error Fetching Exchange Rate: ", error);
      }
    };
    getExchangeRate();
  },[fromCurrency,toCurrency]);

  useEffect(()=> {
    if (exchangeRate !== null){
      setConvertedAmount((amount* exchangeRate).toFixed(2));
    }
  },[amount,exchangeRate]);

  const handleAmountChange=(e)=>{
    const value =parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0: value);
  };

  const handleFromCurrencyChange=(e)=>{
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange=(e)=>{
    setToCurrency(e.target.value);
  };
  

  return (
    <>
      <div className="currency-converter">
        <div className="box"> </div>
        <div className="data">
          <h1>Currency Converter</h1>

          <div className="input-container">
            <label htmlFor="amt">Amount: </label>
            <input type="number" id="amt" value={amount} onChange={handleAmountChange}/>
          </div>

          <div className="input-container">
            <label htmlFor="fromCurrency">From Currency </label>
            <select id="fromCurrency" value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value="USD">USD - United States Dollar</option>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CHF">CHF - Swiss Franc</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="SGD">SGD - Singapore Dollar</option>
            <option value="NZD">NZD - New Zealand Dollar</option>
            <option value="ZAR">ZAR - South African Rand</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="AED">AED - United Arab Emirates Dirham</option>
            <option value="SAR">SAR - Saudi Riyal</option>
            <option value="LKR">LKR - Sri Lankan Rupee</option>
            <option value="PKR">PKR - Pakistani Rupee</option>
            <option value="THB">THB - Thai Baht</option>
            <option value="MYR">MYR - Malaysian Ringgit</option>
            <option value="KRW">KRW - South Korean Won</option>
            <option value="MXN">MXN - Mexican Peso</option>
            <option value="TRY">TRY - Turkish Lira</option>
            <option value="HKD">HKD - Hong Kong Dollar</option>
            <option value="RUB">RUB - Russian Ruble</option>
            <option value="NOK">NOK - Norwegian Krone</option>
            <option value="SEK">SEK - Swedish Krona</option>
            <option value="DKK">DKK - Danish Krone</option>
            </select>

            
          </div>

          <div className="input-container">
            <label htmlFor="toCurrency">To Currency </label>
            <select id="toCurrency" value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="USD">USD - United States Dollar</option>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CHF">CHF - Swiss Franc</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="SGD">SGD - Singapore Dollar</option>
            <option value="NZD">NZD - New Zealand Dollar</option>
            <option value="ZAR">ZAR - South African Rand</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="AED">AED - United Arab Emirates Dirham</option>
            <option value="SAR">SAR - Saudi Riyal</option>
            <option value="LKR">LKR - Sri Lankan Rupee</option>
            <option value="PKR">PKR - Pakistani Rupee</option>
            <option value="THB">THB - Thai Baht</option>
            <option value="MYR">MYR - Malaysian Ringgit</option>
            <option value="KRW">KRW - South Korean Won</option>
            <option value="MXN">MXN - Mexican Peso</option>
            <option value="TRY">TRY - Turkish Lira</option>
            <option value="HKD">HKD - Hong Kong Dollar</option>
            <option value="RUB">RUB - Russian Ruble</option>
            <option value="NOK">NOK - Norwegian Krone</option>
            <option value="SEK">SEK - Swedish Krona</option>
            <option value="DKK">DKK - Danish Krone</option>
            </select>
            
          </div>

          <div className="result">
            <p>{amount} {fromCurrency} is Equal to {convertedAmount} {toCurrency}</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
