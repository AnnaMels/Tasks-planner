import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";
import { useDispatch } from "react-redux";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id))

  return (
    <div className={css.wrapper}>
      <input
        onChange={handleToggle}
        type="checkbox"
        className={css.checkbox}
        defaultChecked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={handleDelete} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
