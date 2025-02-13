import PropTypes from "prop-types";
import { useDraggable } from "@dnd-kit/core";
import { ChevronDown, ChevronUp } from "lucide-react";

const colors = ["#f87171", "#60a5fa", "#facc15", "#34d399", "#a78bfa"];

const TaskCard = ({ task, setTasks, board }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: task.id });
  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : {};

  const toggleCollapse = () => {
    setTasks((prev) => ({
      ...prev,
      [board]: prev[board].map((t) => (t.id === task.id ? { ...t, collapsed: !t.collapsed } : t))
    }));
  };

  const changeColor = (color) => {
    setTasks((prev) => ({
      ...prev,
      [board]: prev[board].map((t) => (t.id === task.id ? { ...t, color } : t))
    }));
  };

  return (
    <div ref={setNodeRef} style={{ ...style, backgroundColor: task.color }} {...listeners} {...attributes} className="p-3 rounded-lg shadow-md">
      <div className="flex justify-between items-center z-10">
        <h3 className="font-semibold">{task.title}</h3>
        <button onClick={toggleCollapse} className="z-50">{task.collapsed ? <ChevronDown /> : <ChevronUp />}</button>
      </div>
      {!task.collapsed && (
        <div className="mt-2 text-sm">
          <p><strong>Timeline:</strong> {task.timeline.start} - {task.timeline.end}</p>
          <p><strong>Description:</strong> {task.description}</p>
          <div><strong>Subtasks:</strong> {task.subtasks.join(", ")}</div>
          <div><strong>Checklist:</strong> {task.checklist.join(", ")}</div>
          <div className="flex gap-2 mt-2">
            {colors.map((color) => (
              <button key={color} onClick={() => changeColor(color)} className="w-5 h-5 rounded-full" style={{ backgroundColor: color }}></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
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
  }).isRequired,
  setTasks: PropTypes.func.isRequired,
  board: PropTypes.string.isRequired
};

export default TaskCard;
