const express = require('express');
const { handleAddRequest, handleReadRequest, handleReadRequestById, handleUpdateRequest, handleDeleteRequest } = require('../controllers/working');
const router = express.Router();


router.get('/GET/tasks' , handleReadRequest);

router.get('/GET/tasks/:id' , handleReadRequestById);

router.post('/POST/tasks' ,handleAddRequest );

router.put('/PUT/tasks/:id' ,handleUpdateRequest );

router.delete('/DELETE/tasks/:id' ,handleDeleteRequest );

module.exports = router;

