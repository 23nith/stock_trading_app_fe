import React from 'react'

function Menu() {
  return (
    <div className='basis-2/12 border-slate-800 border-2 '>
      Menu
      <div className='mt-20 flex flex-col'>
        
        <div className='my-3.5'>
          <button>
            Dashboard
          </button>
        </div>

        <div className='my-3.5'>
          <button>
            Portfolio
          </button>
        </div>

        <div className='my-3.5'>
          <button>
            Discover
          </button>
        </div>

        <div className='my-3.5'>
          <button>
            History
          </button>
        </div>

      </div>
    </div>
  )
}

export default Menu