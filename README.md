# sql_database

##Application Walkthrough

sql_database is a simple to use inventory system viewer. The user selects which item they would like to purchase by selecting the ID number corresponding to the item from the list. 

![Product Selection](https://github.com/johnnyt92/sql_database/blob/master/images/snap1.PNG)

Once the item is selected, the user will be prompted for a quantity. 

![Quantity Selection](https://github.com/johnnyt92/sql_database/blob/master/images/snip2.PNG)

When the user inputs the quantity, the application will check to make sure we can fulfill the customer's order, if we cant an error will be given.

![Error](https://github.com/johnnyt92/sql_database/blob/master/images/snip5.PNG)

a total is given to the customer.
The stock is then removed from our inventory and the SQL database is updated with the new stock quantity (stock quantity - user's quantity)

![Quantity Update](https://github.com/johnnyt92/sql_database/blob/master/images/snip4.PNG)

![Database Update](https://github.com/johnnyt92/sql_database/blob/master/images/SQLdb.PNG)

After the database is updated, a total is given.

![Order Total](https://github.com/johnnyt92/sql_database/blob/master/images/snip3.PNG)