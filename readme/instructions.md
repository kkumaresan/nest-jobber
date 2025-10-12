### Install NX

sudo npm i -g nx
npx create-nx-workspace --preset nest --name jobber --appName jobber-auth
nx generate-types jobber-auth

sudo npm install -g prisma
nx generate-types jobber-auth
prisma
prisma generate

### Prisma permission issue

sudo chmod -R 777 /usr/local/lib/node_modules/prisma

### Docker Compose

docker-compose up

### Prisma Migrate

nx migrate-prisma jobber-auth
nx generate module prisma
nx g service prisma

### Graphql Setup

npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql --save
nx g library nestjs
nx g resolver users
nx g service users

### Deps

npm i @as-integrations/express5
npm i --save class-transformer class-validator
npm i --save bcryptjs
npm i --save-dev types/bcryptjs
npm i --save-dev @types/bcryptjs
npm i --save-dev husky lint-staged
npx husky init
npm install prisma --save-dev
npm i --save @nestjs/config
npm i --save @nestjs/jwt

### Auth

nx g module auth
nx g resolver auth
nx g service auth

### Passport

npm i --save passport-jwt @nestjs/passport passport
npm i --save-dev @types/passport-jwt
npm i --save cookie-parser
npm i --save-dev @types/cookie-parser

### Jobs

nx g application apps/jobber-jobs
nx serve jobber-jobs
npm i --save @golevelup/nestjs-discovery

---

mutation {
createUser(createUserInput: {
email: "kumar@kk.com"
password: "Strongpass1@3"
}) {
id
email
}
}

mutation {
login(loginInput: {
email: "kumar@kk.com"
password: "Strongpass1@3"
}) {
id
}
}
