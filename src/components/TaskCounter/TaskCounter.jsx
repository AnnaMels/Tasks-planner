import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";
import { getActiveTasks, getCompletedTasks } from "../../redux/selectors";

export const TaskCounter = () => {
  const activeTasks = useSelector(getActiveTasks);
  const completedTasks = useSelector(getCompletedTasks);

  return (
    <div>
      <p className={css.text}>Active: {activeTasks.length}</p>
      <p className={css.text}>Completed: {completedTasks.length}</p>
    </div>
  );
};
