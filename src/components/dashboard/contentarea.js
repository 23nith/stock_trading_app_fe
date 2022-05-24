import React from 'react'
import Chart from './contentarea/chart'
import Stocksquery from './contentarea/stocksquery'
import TrendingStocks from './contentarea/trendingStocks'
import Portfolio from './portfolio'

function Contentarea() {
  return (
    <div className='basis-10/12 border-slate-800 border-2 flex flex-col'>
      Contentarea
      <div className='basis-1/2 border-slate-800 border-2 flex flex-row'>
        <Stocksquery/>
        <TrendingStocks/>
      </div>
      <div className='basis-1/2 border-slate-800 border-2 flex flex-row'>
        <div className='basis-3/4 border-slate-800 border-2'>
          <Portfolio/>
        </div>
        <Chart/>
      </div>
    </div>
  )
}

export default Contentarea