# graphql-cats
> Practising GraphQL with MySQL/Docker/Node/Express/Apollo Server/Sequelize

Intended to run locally only as a playground app - unsecure db credentials.

Followed along with [this tutorial](https://blog.logrocket.com/from-rest-to-graphql/) with a few changes (ECMAScript modules via Node instead of webpack, changed data to be Cats not Tickets, running the SQL migration script automatically)
  
## Prerequisites
- Docker
- node & npm

## Running the app
 
To start db via docker, & automatically run the setup script:
```shell script
docker-compose up -d
```

To start app:
```shell script
npm run start
```

Visit http://localhost:5000/graphql to explore the GraphQL endpoint.

Example query to try:

```
query {
  cats {
    name
    owner {
      name
      email
    }
    favourite_food {
      name
    }
    colour {
      name
    }
    on_holiday_at_owner {
      name
      email
    }
  }
}
```


## Dev

To generate sequelize models (these are pre-generated and included in repo)
```shell script
npm run generate-models
```
