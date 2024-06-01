import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Interface to define the structure of the response from CurrencyAPI
interface ExchangeRates {
  data: {
    [key: string]: number;
  };
}

// Your CurrencyAPI key
const API_KEY = 'cur_live_WeM6eXGSUkbAwLN6YoidkJWx8q7znrHtluU27N5H';

const Converter: React.FC = () => {
  const [amount, setAmount] = useState<number>(1); // State to store the amount to convert
  const [fromCurrency, setFromCurrency] = useState<string>('USD'); // State to store the source currency
  const [toCurrency, setToCurrency] = useState<string>('EUR'); // State to store the target currency
  const [exchangeRate, setExchangeRate] = useState<number | null>(null); // State to store the exchange rate
  const [currencies, setCurrencies] = useState<string[]>([]); // State to store the list of available currencies

  // Fetch the available currencies and the initial exchange rate
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        // Fetch available currencies
        const response = await axios.get('https://api.currencyapi.com/v3/latest', {
          params: { apikey: API_KEY, base_currency: 'USD' }
        });
        const data = response.data.data;
        setCurrencies(Object.keys(data)); // Set the currencies state
        setExchangeRate(data[toCurrency]); // Set the initial exchange rate
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };

    fetchCurrencies();
  }, [toCurrency]);

  // Handle changes to the amount input
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  // Handle changes to the source currency selection
  const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(e.target.value);
  };

  // Handle changes to the target currency selection
  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(e.target.value);
    axios.get('https://api.currencyapi.com/v3/latest', {
      params: { apikey: API_KEY, base_currency: e.target.value }
    })
    .then(response => {
      const data = response.data.data;
      setExchangeRate(data[toCurrency]); // Update the exchange rate when the target currency changes
    })
    .catch(error => {
      console.error('Error fetching exchange rate:', error);
    });
  };

  // Convert the amount using the exchange rate
  const convert = (amount: number, rate: number | null) => rate ? (amount * rate).toFixed(2) : '0';

  return (
    <div>
      <input type="number" value={amount} onChange={handleAmountChange} />
      <select value={fromCurrency} onChange={handleFromCurrencyChange}>
        {currencies.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      <select value={toCurrency} onChange={handleToCurrencyChange}>
        {currencies.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      <p>{amount} {fromCurrency} is {convert(amount, exchangeRate)} {toCurrency}</p>
    </div>
  );
};

export default Converter;
