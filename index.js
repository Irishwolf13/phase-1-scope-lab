var customerName = 'bob';

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = '5';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 6;
}