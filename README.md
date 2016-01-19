# Portfolio Challenge
## Project manage API

Implement 4 APIs listed below. Links are pointing specifications for each API.
- GET /api/projects
  - [GET /api/projects spec](./GET-api-projects.spec.js)
- POST /api/projects
  - [POST /api/projects spec](./POST-api-projects.spec.js)
- GET /api/projects/:id
  - [GET /api/projects/:id spec](./GET-api-projects_id.spec.js)
- DELETE /api/projects/:id
  - [GET /api/projects/:id spec](./DELETE-api-projects_id.spec.js)


## Database
[Here](./database.sql) is the database schema that we provide.

```sql
-- This file is formatted based on SQLite3's syntax
-- Some small fixes might be needed to use in other database.
create table projects (
    id integer PRIMARY KEY AUTOINCREMENT,
    url varchar(255) NULL,
    title varchar(255) NOT NULL,
    description text NOT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
```
