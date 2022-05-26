# Citex Project
Citex Project for Node.js developer.

## REST API

| **HTTP Method**  | **Route**  | **Result**  |
| :------------: | :------------: | :------------: |
|  POST |  /auth/register |  Create a new user |
|  POST |  /auth/login |  Create and Get JWT token |
| GET  |  /user/:userId |  Get user data |
|  PATCH |  /user/:userId |  Update user data |
|  DELETE |  /user/:userId |  Delete user |

## .env file
Create a **.env** file like the below structure. (also you can use **.env.expample** file)

    # === App ===
    APP_URL=http://localhost:4001
    APP_PORT=4001
    APP_SECRET=Enter_Secret_Key
    
    # === MongoDB ===
    MONGO_URL=mongodb://localhost:27017
    MONGO_PORT=27017
    MONGO_USERNAME=
    MONGO_PASSWORD=
    MONGO_DB_NAME=citex-project

## Installation


**First step**
```javascript
git clone https://github.com/amirkangarloo/citex-project.git
```

**Second step**

```javascript
npm install
```

**Third step**

Create a [**.env** file](https://github.com/amirkangarloo/citex-project#env-file).


**Fourth step**
```javascript
npm start
```


## Tools
- Node.js 
- Express
- MongoDB
- mongoose (ORM)
- JavaScript (ES6+)
- JWT (jsonwebtoken npm package)
- bcrypt (for hash password)
- password-validator
- dotenv
- nodemon (for devDependencies)

## Author
[Amir kangarloo](https://github.com/amirkangarloo "Amir kangarloo")


