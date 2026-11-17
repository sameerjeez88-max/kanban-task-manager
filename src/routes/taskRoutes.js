const express = require('express');
const { tasks } = require('../data/store');

const router = express.Router();

// GET: All tasks
router.get('/tasks', (req, res) => {
  res.status(200).json({ success: true, data: tasks });
});

// POST: Create task
router.post('/tasks', (req, res) => {
  try {
    const { title, description, status, priority } = req.body;
    if (!title) {
      return res.status(400).json({ success: false, message: 'Task title is required.' });
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description ? description.trim() : '',
      status: ['todo', 'in-progress', 'done'].includes(status) ? status : 'todo',
      priority: ['Low', 'Medium', 'High'].includes(priority) ? priority : 'Medium',
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    tasks.push(newTask);
    res.status(201).json({ success: true, message: 'Task created successfully!', data: newTask });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT: Update task status or details
router.put('/tasks/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (!task) {
      return res.status(404).json({ success: false, message: 'Task not found.' });
    }

    const { title, description, status, priority } = req.body;
    if (title) task.title = title.trim();
    if (description !== undefined) task.description = description.trim();
    if (status && ['todo', 'in-progress', 'done'].includes(status)) task.status = status;
    if (priority && ['Low', 'Medium', 'High'].includes(priority)) task.priority = priority;

    res.status(200).json({ success: true, message: 'Task updated successfully!', data: task });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE: Remove task
router.delete('/tasks/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Task not found.' });
    }

    tasks.splice(index, 1);
    res.status(200).json({ success: true, message: 'Task deleted successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;