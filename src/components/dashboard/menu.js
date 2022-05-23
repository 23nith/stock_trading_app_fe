import React from 'react'
import { Link } from 'react-router-dom';

function Menu({setShowLogin}) {
  const handleOnSignOut = () => {
    setShowLogin(true);
  }
  return (
    <div className='basis-2/12 border-slate-800 border-2 '>
      Menu
      <div className='mt-20 flex flex-col'>
        
        <div className='my-3.5'>
          <button>
          <Link to="/front-end-stock-app/" >Dashboard</Link>
          </button>
        </div>

        <div className='my-3.5'>
          <button>
            <Link to="/front-end-stock-app/portfolio" >Portfolio</Link>
          </button>
        </div>

        <div className='my-3.5'>
          <button>
            <Link to="/front-end-stock-app/discover" >Discover</Link>
          </button>
        </div>

        <div className='my-3.5'>
          <button>
            <Link to="/front-end-stock-app/history" >History</Link>
          </button>
        </div>

        <div className='my-3.5'>
          <button onClick={handleOnSignOut}>
            Sign Out
          </button>
        </div>

      </div>
    </div>
  )
}

export default Menu