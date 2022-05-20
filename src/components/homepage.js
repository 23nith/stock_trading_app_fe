import React, { useEffect } from 'react'

function homepage() {

  useEffect(() => {
    const onMount = async () => {
      fetch("http://localhost:3000/current_user", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        }
      })
      .then((res) => {
        if (res.ok) {
          console.log(res)
        }
      })
    }
  
    onMount();
  }, [])
  

  return (
    <div>homepage</div>
  )
}

export default homepage