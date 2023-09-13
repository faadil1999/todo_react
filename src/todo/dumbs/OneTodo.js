export  default function OneTodo({task, task: {completed}, onComplete, onDestroy}) {
    return (
      <li className={completed ? 'completed' : ''}>
          <div className="view">
              <input
                id={'task_' + task.id}
                type="checkbox"
                className="toggle"
                checked={completed}
                onChange={() => onComplete(task)}
              />
              <label htmlFor={'task_' + task.id}>{task.label}</label>
              <button className="destroy" onClick={() => onDestroy(task)}/>
          </div>
      </li>
    );
}
