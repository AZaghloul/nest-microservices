# Software Architecture Task

## How to run the application

### Admin Microservice

- navigate to the project directory /admin

```
cd /admin
npm install
npm run start:dev
```

### Main Microservice

- navigate to the project directory /main

```
cd /main
npm install
npm run start:dev
```

- in th same project directory /main and on another terminal, run the following command to run the application as a listener

```
npm run listener
```

## How to preview the application

- Admin microservice run on http://localhost:8000/api/products/
- Main microservice run on http://localhost:8001/api/products

- You can use POST request at http://localhost:8000/api/products with the following body to create new product.

```
{
  "title": "new product2",
  "image": "https://images.unsplash.com/photo-1681407979620-193f8181f5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
}
```
