# Register API - Delivery APP
API to support the shopping cart process for Delivery app, created using NodeJs and mongodb using mongoose.

## Table of contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies](#technologies)
* [Setup](#setup)

## Introduction
This is a delivery app that will allow users to buy products from restaurants and will assign a deliverer for its order. The architecture of this project is based on microservices, this shopping cart module, allows users create a cart, add new items, remove them and accept an order to buy; the cart is stored in the database, so it does not depends on a session, because of this, the data of the cart and its products is persistent.

## Features
This API allows the caller to do:

- [x] Get a product or all products.
- [x] Seed all products.
- [x] CRUD for shopping carts.
- [x] Add a product to the shopping cart (checks if the product exists and add to quantity if it does).
- [x] Removes a product from the shopping cart (checks if the product exists and removes to quantity if it does).

All this actions can be performed using this API, but you can only call them if you have the right permissions via the auth microservice.


## Technologies
This project is created with:

* NPM 3.5.2
* NodeJs 8.10
* Express 4.17.1
* Mongoose 5.6.6
* MongoDB 4.2.0

For more details of the packages and dependencies used in this service, please go to the 'package.json' on this repo.

## Setup
* To run this project you will need NPM to install the node dependencies and run the dev environment.
* You will need to install MongoDB.
* To install the dependencies you need to run 'npm install' inside the main folder.
* To create the seeds of the products, go to seed and run 'node product_seeder.js'.
* To run the shopping cart API just run 'npm start' inside the main folder.

## API calls
If you want more information about how to call the API, this is the postman repository: https://www.getpostman.com/collections/03013e5a9d7e30e1b3a5 in the shopping_cart section