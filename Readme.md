
# SI-DEV-CHALLENGE

This backend will support task management, allowing users to create, update, delete, and retrieve tasks. The backend will also enable sorting and filtering of tasks based on status and other parameters.

## Build With

    1)  Node
    2)  Express Js
    3)  MongoDB


## Installation

Install using git 

```bash
  git clone https://github.com/1pizzaslice/SI-DEV-TASKS.git

  cd SI-DEV-TASKS
```
```bash
  npm install
```

```bash
  node index.js
```
or

```bash
  npm start
```
    

## API Reference

#### Add a task

```http
  POST /user/POST/tasks
```


#### Get all tasks

```http
  GET /user/GET/tasks
```

#### Get task by ID

```http
  GET /user/GET/tasks/:id
```

#### Update task by ID

```http
  PUT /user/PUT/tasks/:id
```

#### Delete task by ID

```http
  DELETE /user/DELETE/tasks/:id
```


