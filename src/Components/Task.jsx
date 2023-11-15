import PropTypes from "prop-types";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

export function Task({task, handleDeleteTask, handleSaveTask}){
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.name);

    return (
        <div className="task">
            <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteTask(task.id)}/>
            <p>Name of task:</p>
            {isEditing?<input type="text"
                              value={editedTask}
                              onChange={(e) => setEditedTask(e.target.value)}>
                </input>:
                <p>{task.name}</p>
            }
            {isEditing?

                <button onClick={() => {
                    handleSaveTask({id:task.id,name:editedTask });
                    setIsEditing(false);
                }}>Save</button>
                : <FontAwesomeIcon icon={faPenToSquare} onClick={() => setIsEditing(true) }/>}


        </div>
    )
}
Task.propTypes = {
    task: PropTypes.object,
    handleDeleteTask: PropTypes.func,
    handleSaveTask: PropTypes.func
}