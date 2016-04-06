# Make your own portfolio!
Implement Web APIs to manage your projects for portfolio!

## Requirements
This challenge assume that you have a [GitHub](https://github.com) account and there is a server hosted by [Heroku](https://heroku.com).
 Before you start this challenge, please [make a GitHub account](https://github.com/join) and [make a new Heroku application](https://dashboard.heroku.com/new) for this challenge.

If you don't have GitHub account, please take this challenge and make your own GitHub account!
https://app.code-check.io/orgs/codecheck_official/challenges/70

If you are not familiar with deploy in Heroku, choose one framework that you want to use and take a challenge from below.

- Django: https://app.code-check.io/orgs/codecheck_official/challenges/71
- Node.js: https://app.code-check.io/orgs/codecheck_official/challenges/69
- Laravel: https://app.code-check.io/orgs/codecheck_official/challenges/73
- Ruby on Rails: https://app.code-check.io/orgs/codecheck_official/challenges/75
- Spring: https://app.code-check.io/orgs/codecheck_official/challenges/72

## Database
Information for this challenge is specified in below.
It is also provided in [database.sql](./specifications/database.sql) file.

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

## Step 1: Edit server.json
Open [server.json](./server.json) and edit the value for `hostname` to the domain or IP address of server that you have hosted.

```json
{
  "hostname": "hosted-server.domain.com"
}
```

Replace `hosted-server.domain.com` with your domain or IP address.

## Step 2: Implement your server and check with Test!
We require to implement 4 endpoints. All details of specifications are written in files with format of [api-first-spec](https://github.com/shunjikonishi/api-first-spec).

- GET /api/projects
  - Return success status code `2XX` when server succeed to get data
  - [GET /api/projects spec](./specifications/localhost/GET-api-projects.spec.js)
- POST /api/projects
  - Return success status code `2XX` when server succeed to create new data
  - Return error status code `4XX` when either of title or description was empty
  - [POST /api/projects spec](./specifications/localhost/POST-api-projects.spec.js)
- GET /api/projects/:id
  - Return success status code `2XX` when found data
  - Return error status code `4XX` when data didn't exists
  - [GET /api/projects/:id spec](./specifications/localhost/GET-api-projects_id.spec.js)
- DELETE /api/projects/:id
  - Return success code `2XX` when data was successfully deleted
  - Return error status code `4XX` when data didn't exists
  - [GET /api/projects/:id spec](./specifications/localhost/DELETE-api-projects_id.spec.js)

### Run Test
To test your API server in local environment, run commands in below.

```bash
$ npm install                               # Install modules (You need run this at first time)
$ $(npm bin)/mocha specifications/localhost # Run Test in local
```

Make all test status as `passing`; there are several failing tests at beginning.

```
42 passing (16s)
6 failing
```

