import React, { useCallback, useEffect, useState } from 'react'
import Plot from 'react-plotly.js';

function Stocksquery() {
  const [stockChartXValues, setStockChartXValues] = useState([])
  const [stockChartYValues, setStockChartYValues] = useState([])
  const [symbol, setSymbol] = useState("");

  const fetchStock = useCallback(async (StockSymbol) =>  {
    const API_KEY = '19JF4522MI6LKDM0';
    let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;


    fetch(API_CALL)
      .then((res)=>{
        return res.json()
      })
      .then((data)=>{
        console.log(data);
        const xValues = [];
        const yValues = [];
        for(var key in data['Time Series (Daily)']){
          xValues.push(key);
          yValues.push(data['Time Series (Daily)'][key]['1. open']);
        }
        setStockChartXValues(xValues);
        setStockChartYValues(yValues);

        // console.log("xValues: ", xValues)
        // console.log("yValues: ", yValues)
      })
  }, [symbol]);

  useEffect(() => {
    const initialSymbol = 'AMZN'
    fetchStock(initialSymbol);
    
  }, [])
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetchStock(symbol);
  }

  return (
    <>
      <div>Stocksquery</div>
      {/* <p>x-values: {stockChartXValues}</p>
      <p>x-values: {stockChartYValues}</p> */}
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="symbol" value={symbol} onChange={(e)=>{setSymbol(e.target.value)}} />
        <input type="submit" value="search" />
      </form>
      <Plot
        data={[
          {
            x: stockChartXValues,
            y: stockChartYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'green'},
          },
        ]}
        layout={ {width: 720, height: 440, title: symbol} }
      />
    </>
  )
}

export default Stocksquery