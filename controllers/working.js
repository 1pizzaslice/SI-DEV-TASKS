// Writting the functions to handle the requests

const Task  = require('../models/tasksSchema');

const handleReadRequest = async (req, res) => {
  try {
      const { status, sortBy } = req.query; // Extract query parameters for filtering and sorting
      let query = {};
      if (status) {
          query.status = status;
      }

      let tasks = Task.find(query);

      if (sortBy) {
          const sortOptions = {};
          if (sortBy === 'due_date') sortOptions.due_date = 1;
          if (sortBy === 'created_at') sortOptions.created_at = 1;
          if (sortBy === 'updated_at') sortOptions.updated_at = 1;
          if (sortBy === 'priority') sortOptions.priority = 1;
        //   if (sortBy === 'status') sortOptions.status = 1;
          tasks = tasks.sort(sortOptions);
      }

      const results = await tasks.exec();
      res.json(results);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

  const handleReadRequestById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

  
  const handleAddRequest = async (req, res) => {
    try {
        const task = new Task(req.body);
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
  
  const handleDeleteRequest = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        await task.remove();
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
  
  const handleUpdateRequest = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        Object.assign(task, req.body);                // Merge request body with the existing task data
        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};



module.exports = { 
    handleAddRequest,
    handleReadRequest,
    handleReadRequestById,
    handleUpdateRequest,
    handleDeleteRequest,  
};