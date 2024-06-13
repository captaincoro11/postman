# Running the site

```bash
$ git clone https://github.com/captaincoro11/postman.git
$ cd postman
```
# Running the frontend
```bash
$ cd frontend
$ npm install
$ npm start
```

# Running the backend
## .env file configuration for backend
 Create a .env file inside backend folder
```bash
DATABASE_URL="" // Your Postgres Database url here
```

## Runnning the prisma file
```bash
$ npm prisma install
$ npx primsa migrate dev --name init
$ npm install @prisma/client
$ npx prisma generate 
```

```bash
$ cd backend
$ npm install
$ npm start

```

## Make sure your port 8001 should be free to run backend 
