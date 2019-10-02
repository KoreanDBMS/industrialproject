const express = require('express');
const mysql = require('mysql');

const app = express();

//create connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
});

//connect to database

db.connect((err) => {
    if (!err) {
        console.log('Connected to database!');
    } else {
        console.log(err);
    }
});

app.get("/", (res, req) => {
    db.query("CREATE DATABASE mydatabase", (err, result) => {
        if (!err) console.log("Database created ... nn");
        else console.log(err);
    });
});

//create user table
const createUserTable = 'CREATE TABLE User (' +
    'userID int NOT NULL AUTO_INCREMENT, ' +
    'username varchar(255) NOT NULL, ' +
    'password varchar(255) NOT NULL, ' +
    'admin boolean NOT NULL, ' +
    'PRIMARY KEY (userID))';

//create item table
const createItemTable = 'CREATE TABLE Item (' +
    'itemID int NOT NULL AUTO_INCREMENT, ' +
    'barcode int NOT NULL, ' +
    'name varchar(255) NOT NULL, ' +
    'description varchar(255), ' +
    'price float NOT NULL, ' +
    'image varchar(255), ' +
    'available boolean NOT NULL, ' +
    'weight int, ' +
    'PRIMARY KEY (itemID))';

//create tracking company table
const createTrackingCompanyTable = 'CREATE TABLE TrackingCompany (' +
    'companyID int NOT NULL AUTO_INCREMENT, ' +
    'companyName varchar(255) NOT NULL, ' +
    'url varchar(255), ' +
    'phone int, ' +
    'PRIMARY KEY (companyID))';

//create packing list table
const createPackingListTable = 'CREATE TABLE PackingList (' +
    'packinglistID int NOT NULL AUTO_INCREMENT, ' +
    'userID int, ' +
    'totalPrice int, ' +
    'totalWeight int, ' +
    'totalQuantity int, ' +
    'shippingCost float, ' +
    'packingDate date, ' +
    'shippingDate date, ' +
    'arrivalDate date, ' +
    'companyID int, ' +
    'trackingNumber varchar(255), ' +
    'complete boolean, ' +
    'PRIMARY KEY (packinglistID), ' +
    'FOREIGN KEY (userID) REFERENCES User(userID), ' +
    'FOREIGN KEY (companyID) REFERENCES TrackingCompany(companyID))';

//create pack item table
const createPackItemTable = 'CREATE TABLE PackItem (' +
    'packinglistID int, ' +
    'itemID int, ' +
    'quantity int, ' +
    'price float, ' +
    'FOREIGN KEY (packinglistID) REFERENCES PackingList(packinglistID), ' +
    'FOREIGN KEY (itemID) REFERENCES Item(itemID))';

app.get("/createtables", (res, req) => {
    db.query(createUserTable, (err, result) => {
        if (err) console.log('User Table Exists!');
        else console.log(result);
    });
    db.query(createItemTable, (err, result) => {
        if (err) console.log('Item Table Exists!');
        else console.log(result);
    });
    db.query(createTrackingCompanyTable, (err, result) => {
        if (err) console.log('Tracking Company Table Exists!');
        else console.log(result);
    });
    db.query(createPackingListTable, (err, result) => {
        if (err) console.log('PackingList Table Exists!');
        else console.log(result);
    });
    db.query(createPackItemTable, (err, result) => {
        if (err) console.log('PackItem Exists!');
        else console.log(result);
    });
});

/*
app.get("/insertuser", (res, req) => {
    db.query("INSERT INTO User VALUES (user, password,Y)", (err, result) => {
        if (!err) console.log('user inserted');
        else console.log(result);
    });
});
*/

//test
app.get("/users", (req, res) => {
    db.query("SELECT * FROM User", (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    });
});

app.listen(3000);