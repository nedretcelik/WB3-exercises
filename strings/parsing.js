/* let fullName = "Brenda Kaye";

let spaceIndex = fullName.indexOf(" ");

// console.log(spaceIndex);

let firstName = fullName.substring(0,6);
let lastName = fullName.substring(7);

console.log(`Name: ${fullName}`);
console.log(`First Name : ${firstName}`);
console.log(`Last Name:  ${lastName}`); */


function parseAndDisplayName(fullName) {

    let spaceIndex = fullName.indexOf(" ");


    
    let firstName = fullName.substring(0,spaceIndex);
    let lastName = fullName.substring(spaceIndex +1);
    
    console.log(`Name: ${fullName}`);
    console.log(`First Name : ${firstName}`);
    console.log(`Last Name:  ${lastName}`);
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");




