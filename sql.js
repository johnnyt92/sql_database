var inquirer = require('inquirer')
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: "products"

})

connection.connect(function (err) {
    if (err) throw err;
    printProducts();
})

var printProducts = function() {
console.log("connected")
connection.query ("SELECT * FROM productlist", function (err,res){
    console.log(res);
        inquirer.prompt([
            {
                name: "id",
                type: "input",
                message: "Please enter the ID of the item you would like to buy."
            },
            {
                name: "units",
                type: "input",
                message: "How many units of the item would you like to buy?"
            }
        ])
            .then(function (answer) {
                buyItem(answer.id, answer.units);
            })
    })
}

function buyItem(ID, quantity) {
    connection.query("SELECT * FROM productlist WHERE ?",
        {
            ID: ID
        },
        function (err, productlist) {

            if (err) throw err;

            if (productlist[0].stock_quantity < parseInt(quantity)) {
                console.log("insufficient quantity!");
            } else {
                connection.query(
                    "UPDATE productlist SET stock_quantity = ? WHERE ID = ?", [productlist[0].stock_quantity - quantity, productlist[0].ID],

                    function (error) {
                        if (error) throw err;
                        console.log("Your total is " + productlist[0].unit_price * quantity);
                        process.exit();
                    }
                );
            }
        })
}