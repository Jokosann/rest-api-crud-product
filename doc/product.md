# Product API Spec

## Create

Endpoint : POST /api/products

Request Body :

```json
{
  "name": "product1",
  "price": "99999",
  "image": "https://"
}
```

Response Body (success) :

```json
{
  "data": {
    "name": "product1",
    "price": "99999",
    "image": "https://"
  }
}
```

Response Body (failed) :

```json
{
  "errors": "Name and price must not blank, ..."
}
```

## Update - patch

Endpoint : PATCH /api/products/:id

Request Body :

```json
{
  "name": "product1 update"
}
```

Response Body (success) :

```json
{
  "data": {
    "name": "product1 update",
    "price": "99999",
    "image": "https://"
  }
}
```

Response Body (failed) :

```json
{
  "errors": "Name and price must not blank, ..."
}
```

## Update - put

Endpoint : PUT /api/products/:id

Request Body :

```json
{
  "name": "product1 update",
  "price": "99999",
  "image": "https://"
}
```

Response Body (success) :

```json
{
  "data": {
    "name": "product1 update",
    "price": "99999",
    "image": "https://"
  }
}
```

Response Body (failed) :

```json
{
  "errors": "Name and price must not blank, ..."
}
```

## Delete

Endpoint : DELETE /api/products/:id

Response Body (success) :

```json
{
  "message": "success."
}
```

Response Body (failed) :

```json
{
  "message": "failed."
}
```

## Get All

Endpoint : GET /api/products

Response Body (success) :

```json
{
  "data": [
    {
      "name": "product1",
      "price": "99999",
      "image": "https://"
    }
    // other...
  ]
}
```

Response Body (failed) :

```json
{
  "data": []
}
```
