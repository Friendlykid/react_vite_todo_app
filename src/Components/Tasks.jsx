import PropTypes from 'prop-types';
import {Task} from './Task.jsx'

export function Tasks({tasks, handleDeleteTask, handleSaveTask}){
    return (
        <>
        {tasks.length === 0 && <div>No Tasks yet</div>}
        <div className="tasks">
            {tasks.map(t =>{
                return <Task
                    key={t.id}
                    task={t}
                    handleDeleteTask={handleDeleteTask}
                    handleSaveTask={handleSaveTask}></Task>
            })}
        </div>
        </>)
}


Tasks.propTypes = {
    tasks: PropTypes.array,
    handleDeleteTask: PropTypes.func,
    handleSaveTask: PropTypes.func
}