# Node-Postgres-Docker
Create Postgres Docker container and connect form NodeJS

## Create Docker container

Build the Docker image from `Dockerfile`. Run command in the same directory.

```sh
docker build -t my-pg-img .
```

Create container of that image
```sh
docker run -d -p 5432:5432 --name my-postgres-container my-pg-img
```

Test if it is running
```sh
docker ps -a
```

## Test App

```sh
npm install
```

Run server with local environment variables 
```sh
npm run start:local
```
Note: For Windows use `set NODE_ENV=local`, but for Linux us `NODE_ENV=local`

For different environment (like dev or prod) use different `.env` file and before run set that environment
