import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';

function Stocksquery() {
  const [stockChartXValues, setStockChartXValues] = useState([])
  const [stockChartYValues, setStockChartYValues] = useState([])

  useEffect(() => {
    const API_KEY = '19JF4522MI6LKDM0';
    let StockSymbol = 'AMZN'
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

        console.log("xValues: ", xValues)
        console.log("yValues: ", yValues)
      })
  }, [])
  

  return (
    <>
      <div>Stocksquery</div>
      {/* <p>x-values: {stockChartXValues}</p>
      <p>x-values: {stockChartYValues}</p> */}
      <Plot
        data={[
          {
            x: stockChartXValues,
            y: stockChartYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={ {width: 720, height: 440, title: 'A Fancy Plot'} }
      />
    </>
  )
}

export default Stocksquery