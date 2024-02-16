Episode 1:

This is my first creation of node js where Node JS is explained.

NodeJS is not a framework nor a library.

NodeJS is specially required to create or develop runtime server-side applications

Why to use NodeJs?

1. fast and highly scalable.
2. same language for both frontend and backend.

NodeJs is basically a collection of modules

what is a module?
module is a collection of JS files which has prebuilt functions inside it and the functions also has parameters.

Types of modules in NodeJS

1. inbuilt modules(core modules).
2. 3rd party modules (Express JS , React)
3. custom module (self developed modules)

third party modules are the one which needs to be installed via commands from repo of npm

Episode 2:

Here we saw the core modules from the NodeJs

1. Os module.(have the code in os.js file)
2. File System Module(FS)

OS module: basically gives any information about the machine or the Operating system which it has been running on.
And it can be imported from es6 or es5 logic and the methods can be executed on the same.

FS Module: This is the core module in Node Js used to read, update and handle all the file data.
It can be imported from fs by giving the same syntax above and later on we can use the methods according to our functionality

3rd party modules:

1. explored Bcrypt module which takes the input from any and encrypts or changes the sensitive data in a non readable format with a technique known as hashing.

Episode 3:
-> Creation of server

Http Module

1. We create a server using the http module method create server(refer code in Http module folder)
2. We need to listen the hosted server on a path or address.

Episode 4:
Another Third party module known as JWT(JSON web token)
This is related to the topic of authorization.

-> Basically while the user logs into the server as a request for the first time it checks the database for the provided user details and the password details provided and if at all it turns out to be true, the token is generated in the server and returns as response.

-> And the returned response consisting the token is stored in the localStorage(every browser has its own localStorage.)

-> JWT's use is to authenticate the user transactions.

-> JWT has 3 parts -

1. payload(user info maybe in the form of object)
2. sign(): to generate the token using 3 arguments(1:payload, 2:secretkey, additional params such as expiry)
3. verify(): to verify the token, uses 3 args 1-payload, secretkey, error or verified token returned.

Episode 5 - Express.Js

- express is easy to install, flexible, routing is easy protocols is easy and officially provided by nodeJS itself.
- creating server via express import and listening on a port number and later managing the routes with giving the http methods such as get, post , put , delete

Episode-6 MongoDB Basics

- the basic understanding of databases structure between mysql and noSQL
- mysql has lot of memory wastage
- noSql is having some cool features
  - here database is known as database
  - rows is known as document
  - columns is known as field.

MongoDB is a not only SQL database i.e noSQL Database.
--open source,
--dbms tool, stores data in form of JSON format.

What is JSON
--> JSON is a light weight data exchange medium.

Firstly Setup to the MongoDB is done and it requires additional mongoshell package and copy of path into the environment variables of my computer

--> Start the mongodb server in the services (shows server running)

--> Later setup you get accessed into mongoDB and later the server allows us to create database, read the document(called as collection and below is the commands added to do all the stuffs in database after signing in)

steps- create database
---> use db_name

and now you are in the database now you need to create a collection of properties known as document(just like table we have props here)
---> db.createCollection('Document_name')

Now insert into the document we have key values just like rows and cols
---> db.property_name.insertOne({key:value}) //for one prop
---> db.property_name.insertMany([{},{},{}]) //for many props

To find data
---> db.collection_name.find(); // all the data
---> db.collection_name.find({"key":"value"}) // particular data
---> db.collection_name.find().count() // length of the data

To drop data .
--->db.collection_name.deleteMany({}); // drop data from documents i.e collections will be deleted
---> db.collection_name.drop() // deletes the document
---> db.dropDatabase() // drops the entire database.

To update data.
---> To update a document or a key value pair in the document we consider
updateOne({}) and to update many we use updateMany({},{},{})
---> db.updateOne({unique reference from key value pair} { $set{ "key": "updating value" }});
