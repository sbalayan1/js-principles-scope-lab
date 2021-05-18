// Write your solution in this file!


//to change a variable from within a function, invoke the variable within the function and assign
//example below
var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}



function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = "hello world";

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = "You can't change me mom";
}