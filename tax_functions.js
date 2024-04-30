let grossPayAmount = 100;

function getSocSecTax(grossPay) {
    let taxAmount = grossPay * 0.062;

    return taxAmount;

}


console.log("Social Security Tax Amount is: " + getSocSecTax(grossPayAmount));


function getMedicareTax(grossPay) {
    let taxAmount = grossPay * 0.0145;
    return taxAmount;

}


console.log("Medicare Tax Amount is: " + getMedicareTax(grossPayAmount).toFixed(2));


function getFederalTax(grossPay, withHoldingCode) {
    if(withHoldingCode == 0) {
        let taxAmount = grossPay * 0.23;
        return taxAmount;
    } else if(withHoldingCode == 1) {
        let taxAmount = grossPay * 0.21;
        return taxAmount;

    } else if(withHoldingCode == 2) {
        let taxAmount = grossPay * 0.195;
        return taxAmount;

    } else if(withHoldingCode == 3) {
        let taxAmount = grossPay * 0.185;
        return taxAmount;

    } else if(withHoldingCode == 4) {
        let taxAmount = grossPay * 0.18;
        return taxAmount;

    } else {
        let rate  = .18 - (0.5 * (withHoldingCode-4));
        let taxAmount = grossPay * rate;
        return taxAmount;
    }

}

console.log("Person 1: " + "gross pay $" + grossPayAmount + " withholding code 0 " + getFederalTax(grossPayAmount,0));





