import './App.css';
import Table from './Table';
import Data from './Data';
import { createContext, useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Viewpage from './Viewpage';
import Editpage from './Editpage';
import Deletepage from './Deletepage';
import Adddetails from './Adddetails';
const Newcontext=createContext();

function App() {
    const[data,setData]=useState(Data);
    console.log(data);
  return (
     <Newcontext.Provider value={[data,setData]}>
      <BrowserRouter>
         <Routes>
         <Route path="/" element={<Table />}></Route>
         <Route path="/viewpage/:user" element={<Viewpage />}></Route>
         <Route path="/editpage/:user" element={<Editpage />}></Route>
         <Route path="/deletepage/:user" element={<Deletepage />}></Route>
         <Route path="/adddetails" element={<Adddetails />}></Route>
         </Routes>
      </BrowserRouter>
    </Newcontext.Provider>
  );
}
export default App;
export {Newcontext}