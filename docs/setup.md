### Clone Repo

git clone https://github.com/kkumaresan/nest-jobber.git

### Docker Compose

docker-compose up

### Prisma Migrate

nx migrate-prisma jobber-auth

### Environment Files

cp apps/jobber-executor/.env.example apps/jobber-executor/.env
cp apps/jobber-jobs/.env.example apps/jobber-jobs/.env
cp apps/jobber-auth/.env.example apps/jobber-auth/.env

### Run Services

npm install
npm run start

### Create User

Goto: http://localhost:3000/graphql

```
mutation {
  createUser(createUserInput: {
    email: "fake@email.com"
    password: "Strongpass1@3"
  }) {
    id
    email
  }
}
```

### Login

```
mutation {
  login(loginInput: {
    email: "fake@email.com"
    password: "Strongpass1@3"
  }) {
    id
  }
}
```

### List Jobs

```
query {
  jobs {
    name
    description
  }
}
```

### Execute Job - Object as Input

```
mutation {
 	executeJob(executeJobInput: { name: "Fibonacci", data: { iterations: 50 }}) {
  	name
	}
}
```

Executing the above works fine.

### Execute Job - Array of Objects as Input

```
mutation {
 	executeJob(executeJobInput: { name: "Fibonacci", data: [
    { iterations: 50 },
    { iterations: 40 }
  ]}) {
  	name
	}
}
```

Executing the above gives the following error:

```
"message": "Job data is invalid: [{\"target\":[{\"iterations\":50},{\"iterations\":40}],\"children\":[],\"constraints\":{\"unknownValue\":\"an unknown value was passed to the validate function\"}}]"
```
