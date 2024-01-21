import { useState,useEffect } from 'react';
import Header from './component/header';
import Form from './component/form';
import './App.css';
import TableList from './component/table';

function App() {
  const initialState=JSON.parse(localStorage.getItem("todos"))||[];  
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [contact,setContact]=useState("");
  const [weekday,setWeekday]=useState([]);
  const [gender,Gender]=useState("");
  const [dob,setDOB]=useState("");
  const [input,setInput]=useState("");
  const[table,setTable]=useState([]);
  const [edittable,setEditTable]=useState(null);
  useEffect(()=>{
    localStorage.setItem("table",JSON.stringify(table));
  },[table]);
  return (
    <>
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
           name={name}
           setName={setName}
           email={email}
           setEmail={setEmail}
           contact={contact}
           setContact={setContact}
           weekday={weekday}
           setWeekday={setWeekday}
           gender={gender}
           setGender={Gender}
           dob={dob}
           setDOB={setDOB}
           input={input}
           setInput={setInput}
           table={table}
           setTable={setTable}
           edittable={edittable}
           setEditTable={setEditTable}
          />
        </div>
      </div>
      <div>
          <TableList table={table} setTables={setTable} setEditTable={setEditTable}></TableList>
        </div>
    </div>
    </>
  );
}

export default App;
