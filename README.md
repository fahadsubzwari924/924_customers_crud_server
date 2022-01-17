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
│   |--- client
│   │   
│   |--- server
└── └──  


#  Cloning the repos
To `clone` customer application server application run this command
`git clone https://github.com/fahadsubzwari924/924_customers_crud_server.git`

To `clone` customer client application run this command
`'it clone https://github.com/fahadsubzwari924/924_customer_crud_client.git`


#  Project structure
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
\---validators
        customers.validators.js /* all validation rules for customer */
        
