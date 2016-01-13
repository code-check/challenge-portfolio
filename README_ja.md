# ポートフォリオを作ろう！

## GitHub アカウントの作成
[GitHub](https://github.com/)にアクセスして自分のアカウントを作成しましょう。

アカウントを作成したら[account.json](./specifications/account.json)の`github_username`の値に自身のGitHubのユーザー名を記入して保存してください。

```json
{
  "github_username": "Your GitHub username here"
}
```

## サーバーAPIの実装

### 接続確認用APIの実装
サーバーの接続確認用のAPIを実装してください。

- GET /api/ping

### プロジェクト管理用APIの実装

以下の4つのAPIを実装してください
- GET /api/projects
- POST /api/projects
- GET /api/projects/:id
- DELETE /api/projects/:id

## データベース
以下がデータベースの情報です。

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
実装したサーバーを[Heroku](https://heroku.com)に[デプロイ](https://devcenter.heroku.com/categories/deployment)して下さい。

デプロイ後、GitHubの時と同様に[account.json](./specifications/account.json)を開いて`heroku_appname`の値にHerokuのアプリケーション名を書いてください。アプリケーション名は`https://<appname>.herokuapp.com`の`<appname>`の部分と一致します。

```json
{
  "heroku_appname": "Your Heroku application name here"
}
```

## 自由にHackしよう！
思いのままに自分のポートフォリオを実装しましょう！
こちらの用意したテストをパスしている限り、どのように実装してもらっても構いません！

データベースにカラムを追加する、新しいテーブルを追加する、別のAPIを追加する、バリデーション周りを強化する、などなど。
ただの個人のポートフォリオではなく、[about.me](https://about.me)や[devpost](http://devpost.com)のようなポートフォリオサービスにしてしまう というのも面白いかもしれません。

また、上で実装したAPIを使うことは任意であり、 **強制はしません**。（実装は必須条件です）
サーバーサイドの実装よりもデザインやフロントサイドを見て欲しい人は1つのHTMLページを作って、思う存分自分の強みを表現してください！
