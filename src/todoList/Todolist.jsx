import React, { useState } from 'react'

function Todolist() {
    const [imp, setImp] = useState("");
    const [task, setTask] = useState([]);

    function handelSubmit(e) {
        e.preventDefault();

        if (imp !=""){

            setTask([...task, imp]);
        }
        setImp("");
    }
function Delete(){
    
}

    return (
        // ***Opreations***
        <>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder='Enter your task'
                    value={imp}
                    onChange={(e) => setImp(e.target.value)}
                    
                />
                <button type='submit'>Add Task</button>
            </form>

            {/* ***Result*** */}
            <div className="results">
                <ul>
                    {task.map((task, index) => {
                    
                    return <li key={index}> {task} <button onClick={Delete}>Delete</button></li>
                                               
                    })}

                </ul>
            </div>
        </>
    )
}

export default Todolist 