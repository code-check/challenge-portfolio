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

## Database
Here is the database schema that we provide.

```sql
create projects (
    id integer PRIMARY KEY AUTOINCREMENT,
    url varchar(255) NULL,
    title varchar(255) NOT NULL,
    description text NOT NULL
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
```

## Deploy to Heroku

Open [account.json](./specifications/account.json) and add your Heroku application name. Application name can see in url, in `https://<appname>.herokuapp.com` part `<appname>` will be an application name.  
Key is `heroku_appname`.

```json
{
  "heroku_appname": "Your Heroku application name here"
}
```

## Hack your own way!
As long as our test passes, and is a portfolio site, you are free to implement anything you want!

Add more fields to database, add more tables to database, implement more API, add some validations to the API, and etc.

Make portfolio service instead of portfolio site, like [about.me](https://about.me/) or [devpost](http://devpost.com/), would also be a nice idea to do.

We also WILL NOT require to use our API for your site. If you want to make single html page and show us how good you are in design and front-end coding, show us what you have!
