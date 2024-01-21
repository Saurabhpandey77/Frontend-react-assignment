import React,{useEffect}from "react";
import {v4 as uuidv4} from "uuid";

const Form=({name,setName,email,setEmail,input,setInput,contact,setContact,weekday,setWeekday,gender,setGender,dob,setDOB,table,setTable, edittable,setEditTable})=>{
    const updateTable=(title,email,contact,weekday,gender,dob,id,completed)=>{
        const newTable=table.map((table)=>
            table.id===id ?{title,email,contact,weekday,gender,dob,id,completed}:table
        )
        setTable(newTable);
        setEditTable('');
    }
    const onInputChange=(event)=>{
        setInput(event.target.value)
    };
    const onEmailChange=(event)=>{
        setEmail(event.target.value)
    };
    const onContactChange=(event)=>{
        setContact(event.target.value)
    };
    const onWeekdayChange=(event)=>{
            setWeekday(event.target.value);
    };
    const onGenderChange=(event)=>{
        setGender(event.target.value)
    };
    const onDOBChange=(event)=>{
        setDOB(event.target.value)
    };
    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(!edittable){
            setTable([...table,{id:uuidv4(),title:input,email:email,contact:contact,weekday:weekday,gender:gender,dob:dob,completed:false}])
           setInput("");
           setEmail("");
           setContact("")
           setWeekday("");
           setGender("");
           setDOB("");
        }else{
            updateTable(input,email,contact,weekday,gender,dob,edittable.id,edittable.completed)
        }
        }
        useEffect(()=>{
            if(edittable){
                setInput(edittable.title)
                setEmail(edittable.email);
                setContact(edittable.contact)
                setWeekday(edittable.weekday);
                setGender(edittable.gender);
                setDOB(edittable.dob);
            }else{
                setInput("");
                setEmail("");
                setContact("")
                setWeekday("");
                setGender("");
                setDOB("");
            }
        },[setInput,edittable]);
        
    return(
       
        <form onSubmit={onFormSubmit}>
            <div className="form">
                <div className="name"><label>Name</label>
                 <input type="text" placeholder="Enter a Name..." className="task-input" value={input} required onChange={onInputChange}/>
                </div>
                <div className="email">
                <label>Email</label>
                <input type="email" placeholder="Enter a Email..." className="task-input" value={email} required onChange={onEmailChange}/>
                </div>
                <div className="contact">
                <label>Contact</label>
                <input type="tel" placeholder="Enter a contact..." className="task-input" value={contact} required onChange={onContactChange}/>
                </div>
                <div className="weekday">
                <label>Weekday</label>
                <div className="weekday-name">
                <label>M</label>
                <input type="checkbox" value="Monday" checked={weekday==="Monday"} onChange={onWeekdayChange}/>
                <label>T</label>
                <input type="checkbox" value="Tuesday" checked={weekday==="Tuesday"} onChange={onWeekdayChange}/>
                <label>W</label>
                <input type="checkbox" value="Wednesday" checked={weekday==="Wednesday"} onChange={onWeekdayChange}/>
                <label>T</label>
                <input type="checkbox" value="Thuesday" checked={weekday==="Thuesday"} onChange={onWeekdayChange}/>
                <label>F</label>
                <input type="checkbox" value="Firday" checked={weekday==="Firday"} onChange={onWeekdayChange}/>
                <label>S</label>
                <input type="checkbox" value="Saturday" checked={weekday==="Saturday"} onChange={onWeekdayChange}/>
                <label>S</label>
                <input type="checkbox" value="Sunday" checked={weekday==="Sunday"} onChange={onWeekdayChange}/>
                </div>
                </div>
            <div className="gender">
            <label>Gender</label>
            <div className="gender-name">
            <label>Male</label>
            <input type="radio" name="gender" value="Male" checked={gender==="Male"} onChange={onGenderChange}/ >
            <label>Female</label>
            <input type="radio" name="gender" value="Female" checked={gender==="Female"}onChange={onGenderChange}/>
            </div>
            </div>
            <div className="dob">
            <label>Date of Birth</label>
            <input type="date" placeholder="Enter a Todo..." className="task-input"  value={dob}  onChange={onDOBChange} />
            </div>
            <div className="button">
            <button className="button-add" type="submit">
                {edittable ? "OK":"Submit"}
            </button>
            </div>
            
            </div>
        </form>
    )
}
export default Form;