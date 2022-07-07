import Todo from "./components/Todo";
import TodoItem from "./models/TodoItem";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import { nanoid } from "nanoid";
import { ToDoFilter } from "./models/ToDoFilter";
export default function App(props: { tasks: TodoItem[] }) {
  const [tasks, setTasks] = useState<TodoItem[]>(props.tasks);
  const [filter, setFilter] = useState<ToDoFilter>(ToDoFilter.All);

  function addTask(name: string) {
    const newTask: TodoItem = {
      id: "task-" + nanoid(),
      name: name,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id !== id) {
        return task;
      }

      return { ...task, completed: !task.completed };
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function editTask(id: string, newName: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id !== id) {
        return task;
      }

      return { ...task, name: newName };
    });
    setTasks(updatedTasks);
  }

  const taskList = tasks
    .filter((task) => {
      switch (filter) {
        case ToDoFilter.All:
          return true;
        case ToDoFilter.Active:
          return !task.completed;
        case ToDoFilter.Completed:
          return task.completed;
        default:
          return false;
      }
    })
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton
          filterType={ToDoFilter.All}
          setFilter={setFilter}
          active={filter === ToDoFilter.All}
        />
        <FilterButton
          filterType={ToDoFilter.Active}
          setFilter={setFilter}
          active={filter === ToDoFilter.Active}
        />
        <FilterButton
          filterType={ToDoFilter.Completed}
          setFilter={setFilter}
          active={filter === ToDoFilter.Completed}
        />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
