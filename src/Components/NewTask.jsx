import PropTypes from 'prop-types';

export function NewTask({newTask,handleChangeTask, handleClick, error}){
    return (
        <div>
            <input
                value={newTask}
                placeholder="Task name"
                onChange={handleChangeTask}
                className={error ? 'input error' : 'input'}>
            </input>
            <button onClick={handleClick}>Add task</button>
            {error && <div className="error-message">{error}</div>}
        </div>

    )
}

NewTask.propTypes = {
    newTask: PropTypes.string,
    handleChangeTask: PropTypes.func,
    handleClick: PropTypes.func,
    error: PropTypes.string
}