import React from "react";

const TableList=({table,setTable, setEditTable})=>{
    
    const handleDelete=({id})=>{
        setTable(table.filter((tabl)=>tabl.id !==id));
    }
    const handleComplete=(table)=>{
        setTable(
            table.map((item)=>{
                if(item.id === table.id){
                    return{...item, completed: !item.completed}
                }
                return item;
            })
        )

    }
   
    const handleEdit=({id})=>{
        const findTable=table.find((table)=> table.id=== id);
        setEditTable(findTable);
    }
    return(
        <div>
            {
                table.map((tabl)=>{
                    return(
                        <div>
                        <li className="list-item" key={tabl.id}>
                        <input
                        type="text"
                        value={tabl.title}
                        className={`list ${tabl.completed ? "complete" : ""}`}
                        onChange={(evet)=> evet.preventDefault()}
                        />
                        <input
                        type="text"
                        value={tabl.email}
                        className={`list ${tabl.completed ? "complete" : ""}`}
                        onChange={(evet)=> evet.preventDefault()}
                        />
                        <input
                        type="contact"
                        value={tabl.contact}
                        className={`list ${tabl.completed ? "complete" : ""}`}
                        onChange={(evet)=> evet.preventDefault()}
                        />
                        <input
                        type="text"
                        value={tabl.weekday}
                        className={`list ${tabl.completed ? "complete" : ""}`}
                        onChange={(evet)=> evet.preventDefault()}
                        />
                        <input
                        type="text"
                        value={tabl.gender}
                        className={`list ${tabl.completed ? "complete" : ""}`}
                        onChange={(evet)=> evet.preventDefault()}
                        />
                        <input
                        type="text"
                        value={tabl.dob}
                        className={`list ${tabl.completed ? "complete" : ""}`}
                        onChange={(evet)=> evet.preventDefault()}
                        />
                        <div>
                            <button className="button-complete task-button" onClick={()=>handleComplete(tabl)}>
                                <i className="fa fa-check-circle"></i>
                            </button>
                            <button className="button-edit task-button" onClick={()=>handleEdit(tabl)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className="button-delete task-button" onClick={()=>handleDelete(tabl)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    </li>
                    </div>
                    )
                    
                })
            }
        </div>
    )
}
export default TableList;