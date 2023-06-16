# Express Mongodb JWT

Learn to create authentication with express js

## Installation

### Clone

```bash
  git clone https://github.com/sugiartofahmi/express-mongodb-jwt
```

### Install

```bash
  yarn or npm install
```

### Development

```bash
  yarn or npm run dev
```

## Setup

- ENV

  1. rename .env-example to .env
  2. change value on env
     `PORT, DB_URL and JWT_SECRET`

  example :

  ```bash
    PORT = 9000
  ```

  ```bash
    DB_URL = mongodb+srv://<userbane>:<password>@cluster0.8lcu8fs.mongodb.net/?retryWrites=true&w=majority
  ```

  ```bash
    JWT_SECRET = afgkldhdbnwu3gdh2639hfn2b
  ```

## End Point

### 1. Register :

```bash
   METHOD : POST
   http://localhost:9200/users/register
```

```bash
   body:{
     "name":"nameuser",
     "email":"emailuser@gmail.com",
     "password":"passworduser"
   }
```

```bash
   response:{
     "message": "success",
     "user": {
     "name": "fahmi2",
     "email": "fahmi22@gmail.com",
     "password": "$2a$10$OPwUpd3EizQ/YbE7.FwiqetSTU5c.lWPc5TwKMu0MaSh1S.u1DVvC",
     "_id": "648c89da98a1c8ae461a22a4",
    }
   }
```

### 2. Login :

```bash
   METHOD : POST
   http://localhost:9200/users/login
```

```bash
   body:{
     "email":"emailuser@gmail.com",
     "password":"passworduser"
   }
```

```bash
   response:{
     "message": "success",
     "token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGM4OWRhOThhMWM4YWU0NjFhMjJhNCIsImlhdCI6MTY4NjkzMjAxMn0.PbVQ0H2ehJGwA2Be2R-NzmILkiE74kw6cPzjZ9v3LzQ"
   }
```

### 3. Get Todos :

```bash
   METHOD : GET
   http://localhost:9200/todos
```

```bash
    headers:{
      Authorization:"token",
    }
```

```bash
   response:{
     "message": "success",
     "data": []
   }
```

### 4. Get Todos By Id :

```bash
   METHOD : GET
   http://localhost:9200/todos/:id
```

```bash
    headers:{
      Authorization:"token",
    }
```

```bash
   response:{
     "message": "success",
     "data": []
   }
```

### 5. Create Todos :

```bash
   METHOD : POST
   http://localhost:9200/todos
```

```bash
    headers:{
      Authorization:"token",
    }
```

```bash
     body:{
       "todo":"your todo"
     }
```

```bash
   response:{
     "message": "success",
     "todo": "your todo "
   }
```

### 6. Delete Todo :

```bash
   METHOD : DELETE
   http://localhost:9200/todos/:id
```

```bash
    headers:{
      Authorization:"token",
    }
```

```bash
   response:{
     "message": "success",
    "data": {},
   }
```

### 7. Update Todo :

```bash
   METHOD : PUT
   http://localhost:9200/todos/:id
```

```bash
    headers:{
      Authorization:"token",
    }
```

```bash
     body:{
       "todo":"update todo"
     }
```

```bash
   response:{
     "message": "success",
     "data": "todo",
   }
```
