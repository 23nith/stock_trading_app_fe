import React, { useEffect, useState } from 'react'

function EditModal({setShowEditModal, userToEdit}) {
  const [email, setEmail] = useState(userToEdit.email)
  const [firstName, setFirstName] = useState(userToEdit.first_name)
  const [lastName, setLastName] = useState(userToEdit.last_name)

  useEffect(() => {
    setEmail(userToEdit.email)
    setFirstName(userToEdit.first_name)
    setLastName(userToEdit.last_name)
  }, [userToEdit])

  const stopBubbling = (e) => {
    e.stopPropagation()
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <div className='border-orange-900 border-2 w-screen h-screen absolute top-0 left-0 flex justify-center items-center' 
      onClick={()=>{setShowEditModal(false)}}
    >
      
      <div className='w-6/12 h-3/6 bg-zinc-50 shadow-md shadow-black rounded-md justify-center items-center flex' onClick={stopBubbling}>
        <div className=''>
          <form onSubmit={(e)=>{handleSubmit()}}>
            <div className='justify-start flex flex-col items-start w-80'>
              <div className='w-full flex flex-row justify-between items-center'>
                <div>
                  <label htmlFor="email">Email: </label>
                </div>
                <div>
                  <input type="text" name="email" id="" value={email} className="m-2 rounded p-2 border-gray-800 border-2"/>
                </div>
              </div>

              <div className='w-full flex flex-row justify-between items-center'>
                <div>
                  <label htmlFor="email">First Name: </label>
                </div>
                <div>
                  <input type="text" name="firstname" id="" value={firstName} className="m-2 rounded p-2 border-gray-800 border-2"/>
                </div>
              </div>

              <div className='w-full flex flex-row justify-between items-center'>
                <div>
                  <label htmlFor="email">Last Name: </label>
                </div>
                <div>
                  <input type="text" name="lastname" id="" value={lastName} className="m-2 rounded p-2 border-gray-800 border-2"/>
                </div>
              </div>

              <div className='w-full'>
                <button type="submit"
                  className='rounded bg-sky-500/100 w-24 p-1 text-white mt-3'
                >Submit</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default EditModal