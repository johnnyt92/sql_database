# sql_database

##Application Walkthrough

sql_database is a simple to use inventory system viewer. The user selects which item they would like to purchase by selecting the ID number corresponding to the item from the list. 

![Product Selection](/images/snip1.png)

Once the item is selected, the user will be prompted for a quantity. 

![Quantity Selection](/images/snip2.png)

When the user inputs the quantity, the application will check to make sure we can fulfill the customer's order, if we cant an error will be given.

![Error](/images/snip5.png)

a total is given to the customer.
The stock is then removed from our inventory and the SQL database is updated with the new stock quantity (stock quantity - user's quantity)

![Quantity Update](/images/snip4.png)

![Database Update](/images/SQL.png)

After the database is updated, a total is given.

![Order Total](/images/snip3.png)