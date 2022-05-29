import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { TradersContext } from '../../contexts/TradersContext'
import { UserContext } from '../../contexts/UserContext';
import EditModal from './userManagement/editModal';
import ViewModal from './userManagement/viewModal';

function UserManagement() {
  const {traders, setTraders, updateTraders} = useContext(TradersContext);
  const {currentUser} = useContext(UserContext);
  const [userToEdit, setUserToEdit] = useState("");
  const history = useHistory();
  const [ShowEditModal, setShowEditModal] = useState(false)
  const [ShowViewModal, setShowViewModal] = useState(false)

  const onMount = () => {
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
      setTraders(data)
    })
  }

  useEffect(() => {
    if(currentUser.role == "user"){
      console.log("current user role is user");
      history.push('/front-end-stock-app/');
    }else{
      onMount();
    }  
  
  }, [])

  useEffect(() => {
    if(currentUser.role == "user"){
      console.log("current user role is user");
      history.push('/front-end-stock-app/');
    }
  }, [currentUser])

  const handleOnApprove = (e, key) => {
    console.log("e: ", e.target)
    console.log("key: ", key)

    fetch(`http://localhost:3000/approve_user/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(
          {
            id: key,
          },
        ),
      })
      .then((res) => {
        if (res.ok) {
          console.log(res)
          updateTraders();
          return res.json();
        } else {
          throw new Error(res);
        }
      })
  }

  const handleOnEdit = (e, key) => {
    console.log("e: ", e.target)
    console.log("key: ", key)
    setShowEditModal(true)

    fetch(`http://localhost:3000/trader/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(
          {
            id: key,
          },
        ),
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res);
        }
      }).then((data) => {
        console.log("Edit this ID: ", data)
        setUserToEdit(data)
      })
  }

  const handleOnView = (e, key) => {
    setShowViewModal(true)

    fetch(`http://localhost:3000/trader/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(
          {
            id: key,
          },
        ),
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res);
        }
      }).then((data) => {
        console.log("Edit this ID: ", data)
        setUserToEdit(data)
      })
  }

  return (
    <div className='basis-10/12 border-slate-800 border-2'>
      UserManagement
      <table className='min-w-full'>
        <thead className='border-b'>
          <tr>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>ID</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Email</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>First Name</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Last Name</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Status</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Action</th>
          </tr>
        </thead>
        <tbody>
          {traders !== "" && traders.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.confirmed_at != null ? "approved" : "pending"}</td>
              <td>
                {user.confirmed_at == null && 
                  <button
                  className='rounded bg-sky-500/100 w-24 p-1 text-white m-2'
                  onClick={(e)=> {handleOnApprove(e, user.id)}}
                  >
                    Approve
                  </button>
                }
                
                <button
                  className='rounded bg-sky-500/100 w-24 p-1 text-white m-2'
                  onClick={(e)=> {handleOnEdit(e, user.id)}}
                >
                  Edit
                </button>

                <button
                  className='rounded bg-sky-500/100 w-24 p-1 text-white m-2'
                  onClick={(e)=> {handleOnView(e, user.id)}}
                >
                  View
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {ShowEditModal && <EditModal setShowEditModal={setShowEditModal} userToEdit={userToEdit} />}
      {ShowViewModal && <ViewModal setShowViewModal={setShowViewModal} userToEdit={userToEdit}/>}

    </div>
  )
}

export default UserManagement