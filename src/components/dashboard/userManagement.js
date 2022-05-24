import React, { useEffect, useState } from 'react'

function UserManagement() {
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    const onMount = async () => {
      fetch("http://localhost:3000/traders", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        }
      })
      .then((res) => {
        if (res.ok) {
          console.log("traders response: ", res);
        }
        return res.json();
      })
      .then((data) => {
        console.log("traders data: ", data);
        setUsersList(data)
      })
    }
  
    onMount();
  }, [])

  return (
    <div className='basis-10/12 border-slate-800 border-2'>
      UserManagement
      <table className='min-w-full'>
        <thead className='border-b'>
          <tr>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>ID</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Email</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Balance</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Investment Value</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Shares Owned</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserManagement