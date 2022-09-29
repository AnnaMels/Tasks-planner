export const getStatusFilter = state => state.filters.status;
export const getTasks = state => state.tasks;
export const getActiveTasks = state => state.tasks.filter(task => !task.completed) || {};
export const getCompletedTasks = state => state.tasks.filter(task => task.completed) || {};

