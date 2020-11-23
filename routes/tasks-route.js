const { Router } = require('express');
const Task = require('../models/Tasks');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (error) {
        res.status(500).json({ message: 'Error server' })
    }
})
router.get('/:id', async (req, res) => {
    try {
        const tasks = await Task.findById(req.params.id);
        res.json(tasks)
    } catch (error) {
        res.status(500).json({ message: 'Error server' })
    }
})

router.post('/addTask', async (req, res) => {
    try {
        const { data, serviceType, task, location, description } = req.body;
        const note = new Task({ data, serviceType, task, location, description });
        await note.save();
        res.status(201).json({ massage: 'Task created' })
    } catch (error) {
        res.status(500).json({ message: 'Error server' })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { serviceType, task, location, description } = req.body;
        const note = { serviceType, task, location, description }
        await Task.findByIdAndUpdate(req.params.id, { $set: note });
        res.status(200).json({ massage: 'Task updated' })
    } catch (error) {
        res.status(500).json({ message: 'Error server' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({ massage: 'Task deleted' })
    } catch (error) {
        res.status(500).json({ message: 'Error server' })
    }
})

module.exports = router;