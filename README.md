# SPA - Backend

## Treansaction.

The API loads an array of transactions from a csv file located in the project code base. Adds them to a PostresSQL Database, where they can be retrieved using GraphQL Queries

### Load Transation

This endpoint loads reads the content in the csv file and saves them in the Database

#### Query Sample

```javascript
mutation{
  loadData{
    id
  }
}
```
### Response

```javascript
{
  "data": {
    "loadData": {
      "id": "be7e60e5-166a-41d1-878c-27016e946ca8"
    }
  }
}

```

### Get All Transactions

This endpoint Gets all the transactions in the database.

#### Query Sample

```javascript
query {
    getTransactions {
      id
      account
      amount
      description
      reference
      category
      currency
      status
      transactionsDate
      createdAt
      updatedAt
    }
  }

```

#### Response

```javascript
{
  "data": {
    "getTransactions": [
      {
        "id": "5afc9e4a-d0c3-438b-a6f6-a10d687b8806",
        "account": "RPT4291",
        "amount": "-1.0",
        "description": "Sydney Beard",
        "reference": "",
        "category": "Another One",
        "currency": "GBP",
        "status": "BOOKED",
        "transactionsDate": "1644496172278",
        "createdAt": "1644496172278",
        "updatedAt": "1644496172279"
      },
      {
        "id": "e206619a-6dd2-4cc1-8603-429631d46476",
        "account": "sadsad",
        "amount": "-23.0",
        "description": "Sydney Beard",
        "reference": "",
        "category": "Another One",
        "currency": "GBP",
        "status": "BOOKED",
        "transactionsDate": "1644496172278",
        "createdAt": "1644496172278",
        "updatedAt": "1644496172279"
      },
      ...
```

### Get Transaction

This endpoint gets a single transaction by the `id` from the database.

#### Query Sample

```javascript
query {
    getTransaction(id:"5afc9e4a-d0c3-438b-a6f6-a10d687b8806") {
      id
      account
      amount
      description
      reference
      category
      currency
      status
      transactionsDate
      createdAt
      updatedAt
    }
  }
```
#### Response

```javascript
{
  "data": {
    "getTransaction": {
      "id": "5afc9e4a-d0c3-438b-a6f6-a10d687b8806",
      "account": "RPT4291",
      "amount": "-1.0",
      "description": "Sydney Beard",
      "reference": "",
      "category": "Another One",
      "currency": "GBP",
      "status": "BOOKED",
      "transactionsDate": "1644496172278",
      "createdAt": "1644496172278",
      "updatedAt": "1644496172279"
    }
  }
}
```



