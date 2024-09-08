import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  changeActiveFilter,
  selectedTodos,
  clearAllTodoAsync,
} from "../redux/todos/todosSlice";
import { useDispatch } from "react-redux";

export default function ContentFooter() {
  const items = useSelector(selectedTodos);
  const itemsLeft = items.filter((item) => !item.completed).length;
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("activeFilter", activeFilter);
  }, [activeFilter]);
  const handleDestroyAll = () => {
    const completedItems = items.filter((item) => item.completed === true);
    completedItems.forEach((element) => {
      dispatch(clearAllTodoAsync(element.id));
    });
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft} </strong>
        {itemsLeft <= 1 ? "Item" : "Items"} Left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={activeFilter === "all" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("all"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("active"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "completed" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("completed"))}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={() => handleDestroyAll()}>
        Clear completed
      </button>
    </footer>
  );
}
