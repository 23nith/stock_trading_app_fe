import React, { createContext, useState } from 'react'

export const GraphContext = createContext();

const GraphContextProvider = (props) => {
  const [stockChartXValues, setStockChartXValues] = useState("")
  const [stockChartYValues, setStockChartYValues] = useState("")
  const [symbol, setSymbol] = useState("");
  const [chartLabel, setChartLabel] = useState("AMZN")

  return (
    <GraphContext.Provider value={{stockChartXValues, setStockChartXValues, stockChartYValues, setStockChartYValues, symbol, setSymbol, chartLabel, setChartLabel}}>
      { props.children }
    </GraphContext.Provider>
  )
}

export default GraphContextProvider