import PropTypes from "prop-types";
import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

const TaskBoard = ({ title, tasks, setTasks, board }) => {
  const { setNodeRef } = useDroppable({ id: board, data: { board } });

  return (
    <div ref={setNodeRef} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg min-h-[500px]">
      <h2 className="text-xl font-semibold mb-3 capitalize">{title}</h2>
      <div className="space-y-2">
        {tasks.slice(0, 10).map((task) => (
          <TaskCard key={task.id} task={task} setTasks={setTasks} board={board} />
        ))}
      </div>
    </div>
  );
};

TaskBoard.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      timeline: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired
      }).isRequired,
      description: PropTypes.string.isRequired,
      subtasks: PropTypes.arrayOf(PropTypes.string).isRequired,
      checklist: PropTypes.arrayOf(PropTypes.string).isRequired,
      collapsed: PropTypes.bool.isRequired
    })
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
  board: PropTypes.string.isRequired
};

export default TaskBoard;
