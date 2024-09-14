
# SI-DEV-CHALLENGE

This backend will support task management, allowing users to create, update, delete, and retrieve tasks. The backend will also enable sorting and filtering of tasks based on status and other parameters.

#### Deployed Link
https://si-dev-tasks.onrender.com/

Refer API References

## Built With

    1)  Node
    2)  Express Js
    3)  MongoDB


## Run Locally

Clone the project

```bash
  git clone https://github.com/1pizzaslice/SI-DEV-TASKS.git
```

Go to the project directory

```bash
  cd SI-DEV-TASKS
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
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
#### Sorting Example : Get all tasks by priority

```http
  GET /user/GET/tasks?sortBy=priority
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



## Screenshots

Please refer the Screenshots folder section

