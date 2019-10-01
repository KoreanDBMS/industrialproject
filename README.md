# Industrial Project

## Starting a database and creating tables
Make sure you have MySql installed and MySql workbench for testing

```
npm install
```
```
nodemon database.js
```

## Background

The objective of this project is to create an item management database that can be accessed through any web browser by employees of the company. This database will make the item management process more efficient, as the employees will only have to type out each item once. After that, the item will get stored in the database, and only the serial number/barcode will be required to access it.

The web application will then generate shipping lists for each parcel, where the employees will simply need to add items of specified quantity to the list using a simple interface. The list will also contain important information such as shipping dates, tracking numbers and a link to the live tracking web page.

The current scope of the project is to create a web application with all of the features listed above, which is easy to use with a simple design and interface. In our current scope, we will not include object prices and invoices. This can be added later on if we are ahead of schedule. We are also not going to focus on other ways of accessing this database and instead focusing on just the web application. However, we may potentially work on a phone application to scan item barcodes.
