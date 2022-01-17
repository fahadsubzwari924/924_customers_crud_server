# Customer Crud Application

# Application functional requirements:
-	User able to see customers list as a grid on customers listing page.
-	User able to add new customer from listing page.
-	User able to edit any existing customer from the customer’s grid.
-	User able to remove any existing customer from the customer’s grid.
-	User able to sort customers by name or date created.


#  Prerequisites to run the application
-	`Docker` should be installed on the system.
-	Both `client` and `server` repos should be clone in a same folder side by side like this folder structure 

crudApp
|
+---client
|
+---server



#  Server application architecture
+---.github
|   \---workflows
|           cicd-be.yml
|           
+---config
|       connection.js
|       db.js
|       
+---constants
|       collections.constant.js
|       
+---controllers
|       customer.controller.js
|       
+---helpers
|       response.helper.js
|       util.helper.js
|       
+---middlewares
|       request-validator.middleware.js
|       
+---models
|       customers.model.js
|       index.js
|         
+---routes
|       customer.route.js
|       index.js
|       
+---services
|       dal.service.js
|       
\---validators
        customers.validators.js
        
