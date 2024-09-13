// Writting the functions to handle the requests

const Task  = require('../models/tasksSchema');
const mongoose = require('mongoose');

const handleReadRequest = async (req, res) => {
    try {
      const { status, sortBy } = req.query;
      let query = {};

      if (status) {
        query.status = status;
      }
  
      let tasksQuery = Task.find(query); 
  
      if (sortBy) {
        const validSortFields = ['due_date', 'created_at', 'updated_at', 'priority', 'status' ];
  
        // Only apply sorting if the sortBy field is valid
        if (validSortFields.includes(sortBy)) {
          const sortOptions = { [sortBy]: 1 };  
          tasksQuery = tasksQuery.sort(sortOptions);  
        } else {
          return res.status(400).json({ message: "Invalid sort field" });
        }
      }
  
      const results = await tasksQuery.exec();  
      res.json(results);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const handleReadRequestById = async (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid Task ID format' });
    }
    
    try {
        const task = await Task.findOne({ task_id: new mongoose.Types.ObjectId(req.params.id) });
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
        const task = await Task.findOne({ task_id: new mongoose.Types.ObjectId(req.params.id) });
        if (!task) return res.status(404).json({ message: 'Task not found' });

        await task.deleteOne();
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
  
  const handleUpdateRequest = async (req, res) => {
    try {
        const task = await Task.findOne({ task_id: new mongoose.Types.ObjectId(req.params.id) });

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
