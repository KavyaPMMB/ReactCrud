import React from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Newcontext } from './App'

function Deletepage() {
  const [data,setData]= useContext(Newcontext)
  console.log(data)
  const {user} = useParams()
  const navigate=useNavigate()
  console.log(user)
  //const deletedata=data[user]
  const handledelete=()=>
  {
   const Delete=data.filter((del,i)=>i != user)
   setData(Delete)
   navigate("/")
  }


  return (
    <div>
      <h1>Are you sure to delete </h1>
      <button onClick={()=>navigate(-1)}>Cancel</button>
      <button onClick={handledelete}>Delete</button>

    </div>
  )
}

export default Deletepage