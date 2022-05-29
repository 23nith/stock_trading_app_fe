import React, { createContext, useState } from 'react'

export const TradersContext = createContext();

const TradersContextProvider = (props) => {
  const [traders, setTraders] = useState("")

  return (
    <TradersContext.Provider value={{traders, setTraders}}>
      { props.children }
    </TradersContext.Provider>
  )
}

export default TradersContextProvider