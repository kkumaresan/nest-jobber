npx create-nx-workspace --preset nest --name jobber --appName jobber-auth
sudo npm i -g nx

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
