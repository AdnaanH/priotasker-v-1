import { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import TaskBoard from "./TaskBoard";

const initialTasks = {
  todo: [
    { id: "1", title: "Design UI", color: "#f87171", timeline: { start: "2024-02-10", end: "2024-02-15" }, description: "Create wireframes and UI components.", subtasks: ["Wireframe Home", "Color Palette"], checklist: ["Navbar", "Sidebar"], collapsed: true },
    { id: "2", title: "Set up Backend", color: "#60a5fa", timeline: { start: "2024-02-12", end: "2024-02-20" }, description: "Setup Express.js & Database.", subtasks: ["Auth System", "Database Schema"], checklist: ["Install Packages", "Setup Models"], collapsed: true }
  ],
  doing: [],
  done: []
};

const TasksPage = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const fromBoard = Object.keys(tasks).find((board) => tasks[board].some((task) => task.id === active.id));
    const toBoard = over.data.current?.board;

    if (fromBoard && toBoard && fromBoard !== toBoard) {
      const movedTask = tasks[fromBoard].find((task) => task.id === active.id);
      setTasks((prev) => ({
        ...prev,
        [fromBoard]: prev[fromBoard].filter((task) => task.id !== active.id),
        [toBoard]: [...prev[toBoard], movedTask]
      }));
    }
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-3 gap-4 p-4">
        {Object.entries(tasks).map(([board, boardTasks]) => (
          <SortableContext key={board} items={boardTasks.map((task) => task.id)} strategy={verticalListSortingStrategy}>
            <TaskBoard title={board} tasks={boardTasks} setTasks={setTasks} board={board} />
          </SortableContext>
        ))}
      </div>
    </DndContext>
  );
};

export default TasksPage;
