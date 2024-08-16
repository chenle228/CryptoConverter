import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [previousAmount, setPreviousAmount] = useState(null);
  const [priceChange, setPriceChange] = useState(0);
  const [debouncedAmount, setDebouncedAmount] = useState(amount);

  // Debounce Logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedAmount(amount);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [amount]);

  // Data Fetching, Price Calculation and Error Handling
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.frontendeval.com/fake/crypto/${currency}`
        );
        const data = await response.json();
        const newConvertedAmount = debouncedAmount / data.value;

        if (previousAmount !== null) {
          setPriceChange(newConvertedAmount - previousAmount);
        }
        setPreviousAmount(newConvertedAmount);
        setConvertedAmount(newConvertedAmount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId);
  }, [debouncedAmount, currency]);

  // UI Rendering
  return (
    <div className="App">
      <div className="converter-container">
        <div className="input-group">
          <label htmlFor="amount-input">Amount to convert</label>
          <input
            id="amount-input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            aria-label="Amount to convert"
          />
        </div>
        <div className="input-group">
          <label htmlFor="currency-select">Select currency</label>
          <select
            id="currency-select"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            aria-label="Select currency"
          >
            <option value="usd">USD - US Dollar</option>
            <option value="eur">EUR - Euro</option>
            <option value="gbp">GBP - British Pound</option>
            <option value="jpy">JPY - Japanese Yen</option>
            <option value="aud">AUD - Australian Dollar</option>
            <option value="cny">CNY - Chinese Yuan</option>
            <option value="sgd">SGD - Singapore Dollar</option>
            <option value="cad">CAD - Canadian Dollar</option>
            <option value="chf">CHF - Swiss Franc</option>
            <option value="inr">INR - Indian Rupee</option>
            <option value="rub">RUB - Russian Ruble</option>
            <option value="brl">BRL - Brazilian Real</option>
          </select>
        </div>
      </div>
      <div className="result-container">
        <span aria-live="polite" aria-label="Converted amount">
          {convertedAmount
            ? convertedAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : "Loading..."}
        </span>
        <span aria-hidden="true"> WUC</span>
        <span
          aria-live="polite"
          className={
            priceChange > 0 ? "price-up" : priceChange < 0 ? "price-down" : ""
          }
          aria-label={`Price change ${
            priceChange > 0 ? "increased" : "decreased"
          } by ${Math.abs(priceChange).toFixed(6)}`}
        >
          {priceChange !== 0 && (
            <>
              {priceChange > 0 ? "↑" : "↓"}
              {Math.abs(priceChange).toFixed(6)}
            </>
          )}
        </span>
      </div>
    </div>
  );
}
