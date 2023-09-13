## EXO React

## Step1: Use OneTodo FC

Instead of inline HTML/JSX code use the OneTodo FC component alredy coded from .src/todo/dumbs/OneTodo.js

## Step2: filter the todos shown

Add the following code at the end of the \<footer>

````jsx
    <ul class="filters">
    <li>
        <a className='selected'>ALL</a>
    </li>
    <li>
        <a>ACTIVE</a>
    </li>
    <li>
        <a>COMPLETED</a>
    </li>
</ul>
````

- add a click handler on each \<a> element
- filter the tasks with that info to show only active/completed or all tasks
- add a class "selected" on the \<a> element so that the button/filter selected has the class 'selected'
- as an example ALL is now selected
- use 3 string(s) to store the filter value
- the values are: 'ALL', 'ACTIVE', 'COMPLETED'
- Advice: do not store the filtered tasks in the state
- Advice: consider the filtered tasks as a computed value (derived from the state) (it is a derived state data as
  remaining tasks)

## Step3: create a FC for the \<li> in the above filtering footer

To simplify the reading ...

- Define the right props to make it work

````jsx
    <ul class="filters">
    <ActionFilterButton here-potential-props! /> <= for \<a> ALL
    <ActionFilterButton here-potential-props! /> <= for \<a> ACTIVE
    <ActionFilterButton here-potential-props! /> <= for \<a> COMPLETED
</ul>
````

## Step4: create a FC for the \<form> creating a new task

- create a new file for this dumb component
- place it under .src/todo/dumbs as usual, and name it NewTodoForm.js
- copy/paste the HTML code from the \<form> in it
- and make it work as a FC!

## create a global container for our todo app

- do as you feel !
- it is the best way to do it !

Advice:

- the container should use the NewTodoForm child and a new ListTodos child
- you can factorize the HTML for the \<header> in the App.js JSX code
- you cannot factorize the HTML for the \<footer> in the App.js because it depends on your state, just put it in the
  ListTodos.js JSX code
- so the the ListTodos FC will have the main section and footer as JSX code
- the filtering State should be in the List FC
