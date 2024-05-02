function displayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(city + " / " + state);
    console.log(zip);

}

displayMailingLabel("Nedret Haque", "23 Gracel St", "Bloomfield", "New Jersey", "07003");



function addNumbers(num1, num2) {
    
    console.log(num1 + " + " + num2 + " = " + (num1+num2) );

}

addNumbers(3,5);
addNumbers(3,5);



// function displayReceipt(totalDue, amountPaid) {
//     console.log("Total Due: " +  totalDue);
//     console.log("Amount Paid: " + amountPaid);
//     console.log("Change Due: " + (amountPaid - totalDue));

// }

// displayReceipt(22,25);
// displayReceipt(15,50);
// displayReceipt(78,100);


function displayReceipt(totalDue, amountPaid) {
    var change = amountPaid - totalDue;
    console.log("Total Due: " +  totalDue);
    console.log("Amount Paid: " + amountPaid);
    console.log("Change Due: " + change);
}

displayReceipt(22,25);
displayReceipt(15,50);
displayReceipt(78,100);