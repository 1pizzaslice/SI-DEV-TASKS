const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task_id: {
        type: mongoose.Schema.Types.ObjectId,       // ObjectId type for unique task IDs
        auto: true                                  // Automatically generated
    },
    title: {
        type: String,
        required: true,                             // Title is required
        trim: true                                  // Removes leading/trailing spaces
    },
    description: {
        type: String,
        required: true                              // Description is required
    },
    status: {
        type: String,
        enum: ['Done', 'Pending', 'In-Progress'],   // Restrict to specific values
        default: 'Pending'                          // Default status
    },
    due_date: {
        type: Date,
        required: true                              // Due date is required
    },
    created_at: {
        type: Date,
        default: Date.now                           // Automatically set the creation date
    },
    updated_at: {
        type: Date,
        default: Date.now                             // Automatically set the last updated date
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],              // Priority options
        default: 'Medium'                             // Default priority
    }
});

// Pre-save middleware to update 'updated_at' on every update
taskSchema.pre('save', function (next) {
    this.updated_at = Date.now();
    next();
});




const task = mongoose.model('Task', taskSchema);
module.exports = task ;