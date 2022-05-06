import { ToDoFilter } from "../models/ToDoFilter";
export default function FilterButton(props: {
  filterType: ToDoFilter;
  active: boolean;
  setFilter: (filterType: ToDoFilter) => void;
}) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.active}
      onClick={() => {
        props.setFilter(props.filterType);
      }} //arrow function is also allowed here
    >
      <span className="visually-hidden">Show </span>
      <span>{ToDoFilter[props.filterType]}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}
