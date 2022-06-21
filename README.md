# Nest.js TODO API

## Set up the Nest.js application

### clone the repository
```shell
$ git clone git@github.com:hisho/nest-todo-api.git
```

### change directory to the repository
```shell
$ cd nest-todo-api
```

### Nest.js install
```shell
$ yarn install
```

### docker
```shell
$ docker-compose up
```

### Nest.js start develop
```shell
$ yarn start:dev
```

### open graphql playground
```shell
$ open http://localhost:4000/graphql
```

## Query


<details>
<summary>todos</summary>

```graphql
{
  todos {
    createdAt
    description
    id
    title
    updatedAt
    uuid
  }
}
```

</details>

<details>
<summary>todo</summary>

```graphql

{
  todo(uuid: "") {
    createdAt
    description
    id
    title
    updatedAt
    uuid
  }
}

```

</details>

## Mutation

<details>
<summary>createTodo</summary>

```graphql
mutation {
  createTodo(input: { title: "", description: "" }) {
    createdAt
    description
    id
    title
    updatedAt
    uuid
  }
}
```

</details>

<details>
<summary>updateTodo</summary>

```graphql
mutation {
  updateTodo(input: { uuid: "string", title: "", description: "" }) {
    createdAt
    description
    id
    title
    updatedAt
    uuid
  }
}
```

</details>

<details>
<summary>deleteTodo</summary>

```graphql
mutation {
  deleteTodo(uuid: "") {
    createdAt
    description
    id
    title
    updatedAt
    uuid
  }
}
```

</details>