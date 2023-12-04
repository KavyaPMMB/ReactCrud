import React, { useContext } from 'react'
import { Button, Form, Table } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import App from './App';
import Data from './Data'
import {Newcontext} from './App'

function Table1() {
  //const[storedata,setStoredata]=useState(Data);
  const[data,setData]=useContext(Newcontext)

  
  return (
    <div>
       <Form className="d-flex">
        <Form.Label>Search input</Form.Label>
            
            <Form.Control
              
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>NAME</th>
          <th>AGE</th>
          <th>QUALIFICATION</th>  
        </tr>
      </thead>
      <tbody>
        {data.map((item,ind)=>{
          return(
            <tr>
              {console.log(ind)}
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.qualification}</td>
            <Link to={`/Viewpage/${ind}`} >
            <td> <Button variant='success'>View</Button></td>
            </Link>
               <td><Link to={`/Editpage/${ind}`} >
                 <Button variant='primary'>Edit</Button>
            </Link></td>
            <Link to={`/Deletepage/${ind}`}>
            <td> <Button variant='danger'>Delete</Button></td>
            </Link>
          </tr>
          // <tr><td>
          // <Button variant='primary'>Create</Button>
          // </td></tr>
          )
        })}
        
      </tbody>
    </Table>
    <div className='text-center'>
    <Link to={`/Adddetails`}>
    <Button variant='primary' className='center'>Create</Button>
    </Link>
    </div>

    </div>
  )
}

export default Table1