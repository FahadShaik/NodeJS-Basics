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
