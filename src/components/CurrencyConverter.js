import React, { useEffect, useState } from 'react';
import CurrencyDisplay from './CurrencyDisplay'
import { Card, Button  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=05a30093e4bf0babea0056584359f583'
//const BASE_URL = 'https://api.exchangeratesapi.io/latest?access_key=243a6baba190aebcd28de3852c8aa39e'
//const BASE_URL = 'http://api.currencylayer.com/live?access_key=243a6baba190aebcd28de3852c8aa39e'

console.log(BASE_URL)

const CurrencyConverter = () => {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate 
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate || 0
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])

  useEffect(() => {
    if (
      fromCurrency === toCurrency &&
      fromCurrency !== undefined &&
      toCurrency !== undefined
    ) {
      setExchangeRate(1)
      return
    }

    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}&base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <div className="text-center py-5">
    <Card >
        <Card.Header as="h4" >Currency Converter</Card.Header>
            <Card.Body>
              <h5>Sending</h5>
                <CurrencyDisplay
                        currencyOptions={currencyOptions}
                        selectedCurrency={fromCurrency}
                        onChangeCurrency={e => setFromCurrency(e.target.value)}
                        onChangeAmount={handleFromAmountChange}
                        amount={fromAmount}
                    />
                    <div className="equals py-3">=</div>

                    <h5>Receiver gets</h5>

                    <CurrencyDisplay class
                        currencyOptions={currencyOptions}
                        selectedCurrency={toCurrency}
                        onChangeCurrency={e => setToCurrency(e.target.value)}
                        onChangeAmount={handleToAmountChange}
                        amount={toAmount}
                    />
                    <LinkContainer className="py-2 mt-3" to='/send/sendcost'>
                        <Button variant="dark"> Done</Button>
                    </LinkContainer>
                      
            </Card.Body>
            <Card.Footer className="text-muted">Latest Exchange Rate</Card.Footer>
    </Card>
      
      
    </div>
  );
}

export default CurrencyConverter;