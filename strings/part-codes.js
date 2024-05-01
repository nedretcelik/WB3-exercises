function getSupplier(code) {

    let findColon = code.indexOf(":");

    let supplier = code.substring(0,findColon);

    return supplier

}

// getSupplier("ACME:123-L") // ACME

function getProductNumber(code) {

    let findColon = code.indexOf(":");
    let findHyphen = code.indexOf("-");

    let productNumber = code.substring((findColon+1), findHyphen)

    return productNumber;


}

//getProductNumber("ACME:123-L") //123

function getSize(code) {

    let findHyphen = code.indexOf("-");

    let productSize = code.substring(findHyphen+1)

    if(productSize == "S") {
        return `the small (${productSize})`
    } else if (productSize == "M") {
        return `the medium (${productSize})`
    } else if (productSize == "L") {
        return `the Large (${productSize})`
    } else {

        return `the size (${productSize})`
    }



}





// getSize("ACME:123-L") // L

console.log(`${getSize("ACME:123-L")} part ${getProductNumber("ACME:123-L")} is supplied by ${getSupplier("ACME:123-L")}`);
console.log(`${getSize("DI:12345-M")} part ${getProductNumber("DI:12345-M")} is supplied by ${getSupplier("DI:12345-M")}`);
console.log(`${getSize("ACE:1-12")} part ${getProductNumber("ACE:1-12")} is supplied by ${getSupplier("ACE:1-12")}`);




