import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import '../src/edit.css'
import { Newcontext } from './App'

function Editpage() {
  const [data,setData]= useContext(Newcontext)
  const {user} = useParams()
  console.log(user);
  const navigate=useNavigate()
  console.log("id: ",user)
  const editdata=data[user]
  console.log("val:",editdata)
  //axios.put(`bnnmmm/${user}`,input)
  const [input,setInput]=useState({
    name:editdata.name ,
    age:editdata.age,
    qualification:editdata.qualification,
  })
  const handlechange = (e) =>
  {
    console.log(input)
    //console.log(e.target.value);
    setInput({...input,[e.target.name]:e.target.value})
  };

  console.log(input);
  const submit = (sub)=>{

    sub.preventDefault();
    setInput(data[user]=input);
    navigate("/")
      console.log("newdata :",input)
  }
  return (
     <div>
        <Form className='form' onSubmit={submit}>
        <h1 className='heading'> Edit Page</h1>
        
        <Form.Group className="mb-3" controlId="" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={editdata.name} defaultvalue={input.name} onChange={handlechange} name="name"/> 
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="number " placeholder={editdata.age} defaultvalue={input.age} onChange={handlechange} name="age"/>



        </Form.Group>
        <Form.Group className="mb-3" controlId=" ">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type=" " placeholder={editdata.qualification} defaultvalue={input.qualification} onChange={handlechange} name="qualification"/>
        </Form.Group>
       <div className='text-center'>
       <Button variant="primary" type="submit" className='center'>
        Edit
      </Button>
      </div>
    </Form>
     </div>
  )
}
export default Editpage