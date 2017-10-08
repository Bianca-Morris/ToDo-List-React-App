const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const TodoItem = require('../models/TodoItem.js');

console.log("backend/routes/databaseAccess.js")

router.post('/add', (req, res)=>{
  const testTodo = new TodoItem({
    task: req.body.taskText
  });
  testTodo.save()
  .then (response => {
    console.log("server: " + response);
    res.send(response);
  })
  .catch (error => {res.send(error)})
});

module.exports = router;
