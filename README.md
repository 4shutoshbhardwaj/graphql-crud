# graphql-crud

query {
  getUsers {
    id
    name
    email
    age
  }
}


mutation {
  createUser(name: "Ashutosh", email: "ash@example.com", age: 25) {
    id
    name
    email
    age
  }
}


mutation {
  updateUser(id: "USER_ID_HERE", name: "Ash", age: 26) {
    id
    name
    age
  }
}


mutation {
  deleteUser(id: "USER_ID_HERE") {
    id
    name
  }
}
