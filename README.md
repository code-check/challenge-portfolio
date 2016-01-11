# Portfolio Challenge

## Create GitHub Account
Access to [GitHub](https://github.com) and create your account.

Open [account.json](./specifications/account.json) and add your GitHub username.
Key is `github_username`.

```json
{
  "github_username": "Your GitHub username here"
}
```



## Implement project api

- endpoint: `/api/projects(/:id)`
- methods: `GET`, `POST`, `DELETE`
- schema:  
```sql
create projects (
    id integer PRIMARY KEY AUTOINCREMENT,
    icon varchar(100) NULL,
    url varchar(255) NULL,
    title varchar(255) NOT NULL,
    description text NOT NULL
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
```

## Deploy to Heroku

Open [account.json](./specifications/account.json) and add your Heroku application name.
Key is `heroku_appname`.

```json
{
  "heroku_appname": "Your GitHub username here"
}
```
