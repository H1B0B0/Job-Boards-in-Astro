# Job Boards Backend
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Init the DB
> [!WARNING]  
> You need to create .env file in the folder back/.

```bash
# initialise the environnements variables
DB_DIALECT=postgre
DB_HOST=localhost
DB_PORT=3000
DB_NAME=mydb
DATABASE_URL="postgresql://admin:adminpass@localhost:5432/mydb"
POSTGRES_USER=yourusername
POSTGRES_PASSWORD=yourpass
PGADMIN_DEFAULT_EMAIL=admin@example.com
PGADMIN_DEFAULT_PASSWORD=yourpass
```

```bash
# init the backend app
$ docker-compose --env-file .env up -d
```

## Techno used for the project

**We use PostgreSQL for the database.**
![PostgreSQL Elephant](https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png)

**We use NestJs for the Api(CRUD).**
![NestJS Logo](https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg)