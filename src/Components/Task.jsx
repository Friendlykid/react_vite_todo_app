import PropTypes from "prop-types";

export function Task({task, handleDeleteTask}){
    return (
        <div className="task">
            <p>{task.name}</p>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
    )
}
Task.propTypes = {
    task: PropTypes.object,
    handleDeleteTask: PropTypes.func
}