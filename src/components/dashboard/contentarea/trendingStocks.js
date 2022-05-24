import React, { useEffect, useState } from 'react'

function TrendingStocks() {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    const onMount = async () => {
      fetch("http://localhost:3000/top_ten", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        }
      })
      .then((res) => {
        if (res.ok) {
          // console.log("response: ", res);
        }
        return res.json();
      })
      .then((data) => {
        // console.log("data: ", data);
        setStocks(data);
      })
    }
  
    onMount();
  }, [])
  
  return (
    <div className='basis-1/4 border-slate-800 border-2'>
      TrendingStocks
      <table className='min-w-full'>
        <thead className='border-b'>
          <tr>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Ticker</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Open</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>High</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Low</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Close</th>
          </tr>
        </thead>
        <tbody>
          {stocks && stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.symbol}</td>
              <td>{stock.open}</td>
              <td>{stock.high}</td>
              <td>{stock.low}</td>
              <td>{stock.close}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TrendingStocks