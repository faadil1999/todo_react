import {useState} from 'react';
import {createNewTask, INITIAL_TASKS} from './task-util';
import PropTypes from 'prop-types';
import './Todo.css';
import OneTodo from './dumbs/OneTodo';
import FormTODO from './components/FormTODO';
import ActionFilterButton from './components/ActionFilterButton';

let refresh = 1;

export function Todo() {
    const [tasks, setTasks] = useState(INITIAL_TASKS);
    // Derived State (sub state from state)
    // do not put derived state in the state !
   

    function addTask(task){
        setTasks((tasks) => [...tasks, task])
    }
    const remainingTasks = tasks.filter((t) => !t.completed).length;

    // completed tasks
    const completedTasks = tasks.filter((t) => t.completed);

    // active tasks 
    const activeTasks = tasks.filter((t) => !t.completed);

    const filters = ['ALL', 'ACTIVE', 'COMPLETED'];

    const [selectedFilter, setSelectedFilter] = useState(filters[0])

    console.log('REFRESH', refresh++);

    //function for filtering

    function onComplete(task) {
        setTasks((tasks) =>
          tasks.map((t) => (t.id === task.id ? {...task, completed: !task.completed} : t)));
    }

    function onDestroy(task) {
        setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
    }

    function onToggle(checked) {
        setTasks(prevTasks => {
            const newTasks = prevTasks.map((t) => {
                if (t.completed === checked) {
                    return t;
                } else {
                    return {...t, completed: checked};
                }
            });
            return newTasks;
        });
    }

    function onCreateTask(event) {
        if (event.keyCode === 13) {
            // setTasks(tasks => ([...tasks, createNewTask(value)])); // id will inc by 2 ! because of <StrictMode>
            // Solution
            // Avoid side-effect
            // prepare your data BEFORE updating the state
            const newTask = createNewTask(event.target.value);
            event.target.value = '';
            setTasks((tasks) => [...tasks, newTask]);
        }
    }

    return (
      <div className="App">
          <section className="todoapp">
              <header className="header">
                  <h1>Todo APP</h1>
              </header>
              <FormTODO addTask={addTask}></FormTODO>
              <section className="main">
                  <input
                    type="checkbox"
                    id="toggle-all"
                    className="toggle-all"
                    onClick={(e) => onToggle(e.target.checked)}
                  />
                  <label htmlFor="toggle-all">Tâches finies</label>
                  <ul className="todo-list">
                      {selectedFilter === filters[0] ? tasks.map((task) => (
                            <OneTodo key={task.id} task={task} onComplete={onComplete} onDestroy={onDestroy}></OneTodo>
                      )) : selectedFilter === filters[1] ? activeTasks.map((task) => (
                        <OneTodo key={task.id} task={task} onComplete={onComplete} onDestroy={onDestroy}></OneTodo>
                  )) :  completedTasks.map((task) => (
                    <OneTodo key={task.id} task={task} onComplete={onComplete} onDestroy={onDestroy}></OneTodo>
                ))
                }
                  </ul>
              </section>
              
              <footer className="footer">
              <ul class="filters">
                    {/* <ActionFilterButton labelButton={filters[0]} currentFilter={selectedFilter}  onClick={() => setSelectedFilter(filters[0])}></ActionFilterButton> */}
                    <li>
                        <a className={selectedFilter === filters[0] ? 'selected' : ''} onClick={() => setSelectedFilter(filters[0])}>ALL</a>
                    </li>
                    <li>
                        <a className={selectedFilter === filters[1] ? 'selected' : ''} onClick={() => setSelectedFilter(filters[1])} >ACTIVE</a>
                    </li>
                    <li>
                        <a  className={selectedFilter === filters[2] ? 'selected' : ''} onClick={() => setSelectedFilter(filters[2])} >COMPLETED</a>
                    </li>
               </ul>
          <span className="todo-count">
            <strong>{remainingTasks} tâches restantes</strong>
          </span>
              </footer>
          </section>
      </div>
    );
}
