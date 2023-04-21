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

---

# Swagger Documentation

## How to Access the documentation of the application

Both microservices are configured with Swagger as a API documentation, you can access it as follows:

- for Admin Microservice Swagger `http://localhost:8000/api/`
- for Main Microservice Swagger `http://localhost:8001/api/`

---

# Design Choices

## Technology used:

- NestJs
- Mongo DB
- Rabbit MQ

## Technology Used Description:

- **NestJs**

  First of all, what is this NestJs? It is an **open-source** Node.js framework for developing challenging backend systems that use the design paradigm **convention over configuration** that eliminates the need for explicit configuration by allowing developers to utilize common tools and code in a particular way.
  NestJs is created for both Monoliths and Microservices. You can build Rest APIs, MVC applications, GraphQL applications, Web Sockets, or CLIs, and CRON jobs.

- **MongoDB**

  MongoDB is an open-source document database built on a horizontal scale-out architecture that uses a flexible schema for storing data. Founded in 2007, MongoDB has a worldwide following in the developer community.

  Instead of storing data in tables of rows or columns like SQL databases, each record in a MongoDB database is a document described in BSON, a binary representation of the data. Applications can then retrieve this information in a JSON format.

- **RabbitMQ**

  RabbitMQ is a messaging broker - an intermediary for messaging. It gives your applications a common platform to send and receive messages, and your messages a safe place to live until received.

  RabbitMQ is an open-source message broker software written in Erlang. It is commonly called message-oriented middleware that implements the AMQP (Advanced Message Queuing Protocol). It is extended with a plug-in architecture to provide support for MQ Telemetry Transport (MQTT), Streaming Text Oriented Messaging Protocol (STOMP), and other protocols. RabbitMQ is highly scalable and ensures data availability all the time with fault-tolerant architecture.

## Lessons learned:

Monolithic architecture is often large, complex, and tightly coupled, with the entire functionality contained in a single system. This kind of architecture comes with several downsides, the first of which is that it is difficult to maintain. Making small changes to a monolith architecture may affect the whole system, which can cause a range of issues. Going for a microservice architecture instead solves this by separating functionality into standalone components. Which makes it easier to add, change, or remove functionality without affecting other parts of the architecture.

A microservices architecture makes it easy for businesses to scale and maintain their application. Development, testing, and updates of individual parts can be done continuously and separatly. A Microservice Architecture is attractive to many different industries and organizations since it allows for a more agile approach to software development and maintenance.

Messaging enables software applications to connect and scale. Applications can connect to each other, as components of a larger application, or to user devices and data. Messaging is asynchronous, decoupling applications by separating sending and receiving data.
