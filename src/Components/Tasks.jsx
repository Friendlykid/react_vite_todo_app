import PropTypes from 'prop-types';
import {Task} from './Task.jsx'

export function Tasks({tasks, handleDeleteTask}){
    return (
        <>
        {tasks.length === 0 && <div>No Tasks yet</div>}
        <div>
            {tasks.map(t =>{
                return <Task key={t.id} task={t} handleDeleteTask={()=> handleDeleteTask(t.id)}></Task>
            })}
        </div>
        </>)
}


Tasks.propTypes = {
    tasks: PropTypes.array,
    handleDeleteTask: PropTypes.func
}