# Customer Management Application

# Application functional requirements:
-	User able to see customers list as a grid on customers listing page.
-	User able to add new customer from listing page.
-	User able to edit any existing customer from the customer’s grid.
-	User able to remove any existing customer from the customer’s grid.
-	User able to sort customers by name or date created.


#  Prerequisites to run the application
-	`Docker` should be installed on the system.
-	Both `client` and `server` repos should be clone in a same folder side by side like this folder structure 

/customersApplication  /* root folder having client and server repos */

```
│--- client
|     |
│     │---client   
│     |--- server
└──   └──  
```


#  Cloning the repos
To `clone` customer application server application run this command
`git clone https://github.com/fahadsubzwari924/924_customers_crud_server.git`

To `clone` customer client application run this command
`'it clone https://github.com/fahadsubzwari924/924_customer_crud_client.git`

# Install depencies
-	Navigate to the folder `924_customer_crud_server` using this command `cd 924_customer _crud_server`
-	Run `npm install` to get all dependencies. Make sure your internet connection is up n running.


# Running the app locally on dev environment via Docker
For running the whole application you just have to navigate to the `924_customer_crud_server` folder`(coned repo folder)` and follow below instructions:
-	Make sure `docker` service is up n running. 
-	Run this command `docker-compose up`
-	It will start whole application e. `front-end` , `back-end`, database (mongoose) in one go and now you can access the application in browser `http://localhost:4200`

# Validations Implemented (Create Customer, Update Customer)
-	In create customer form name field is mandatory.
-	In create customer form email field is mandatory and must be a valid email
-	Create button will be disabled until all validation errors will be removed.

# Unit Test 
Unit tests are only implemented in front-end application.



#  Project structure
```
|--- .github
|       |---workflows
|             |-- cicd-be.yml /* CI/CD manages from here */
|           
+---config
|       connection.js /* db configs for different environments*/
|       db.js
|       
+---constants
|       collections.constant.js /* mongo collection names picks from here */
|       
+---controllers
|       customer.controller.js
|       
+---helpers
|       response.helper.js /* responses of all kind send from here */
|       util.helper.js /* all reusable functions here */
|       
+---middlewares
|       request-validator.middleware.js /* request validation for all requests */
|       
+---models
|       customers.model.js
|       index.js
|         
+---routes
|       customer.route.js /* all api routes for customers here */
|       index.js
|       
+---services
|       dal.service.js /* data access layer having all db functions */
|       
|---validators
|        customers.validators.js /* all validation rules for customer */
|_____
```
        
# Technology used in server application
-	Node.js with express framework.
-	MongoDB with mongoose ODM
-	Docker for containerization
-	Aws CodeDeploy and Github Actions for CI/CD


# Note
While running the whole application for the first time, it may take few minutes upto 8-10mins(maximum) due to following reasons

-	It will pull the `nodejs` image from docker-hub and start that service.
-	It will pull `mongoDb` image from docker-hub and configure, start the mongo service.
-	It will make connection between 2 containers i.e `mongo` and 'node' to work properly.

