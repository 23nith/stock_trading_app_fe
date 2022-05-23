import React, { useEffect, useState } from 'react'

function Portfolio() {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    const onMount = async () => {
      fetch("http://localhost:3000/stocks", {
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
    <div className='basis-10/12 border-slate-800 border-2'>
      Portfolio
      <table className='min-w-full'>
        <thead className='border-b'>
          <tr>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Ticker</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Investment Value</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Shares Owned</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Latest Price</th>
          </tr>
        </thead>
        <tbody>
          {stocks && stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.ticker}</td>
              <td>{stock.investment_value}</td>
              <td>{stock.shares_owned}</td>
              <td>{stock.latest_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Portfolio