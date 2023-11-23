# Job Boards

This project was carried out as part of my pre-MSC bootcamp at Epitech. We had two weeks to create a job board site similar to Indeed.

## Step

**Step 1**: We use PostgreSQL for the database.

![PostgreSQL Elephant](https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png)

**Step 2-3**: We use Astro framework for the frontend.

![Astro Logo](https://www.svgrepo.com/show/373446/astro.svg)

**Step 4**: We use NestJS framework for the API(CRUD).

![NestJS Logo](https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg)

# API CRUD

```mermaid
graph TD

subgraph Database
  db(Database)
end

subgraph API
  api(API)
end

subgraph Front-end
  fe(Front-end)
end


Front-end -->|GET| API
Database -->|GET| API
API -->|GET| Database
API -->|GET| Front-end
Front-end -->|POST| API
API -->|POST| Database
Front-end -->|DELETE| API
API -->|DELETE| Database
Front-end -->|PUT| API
API -->|PUT| Database

```
