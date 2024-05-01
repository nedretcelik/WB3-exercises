
function parseAndDisplayName(fullName) {

    let spaceIndex = fullName.indexOf(" ");
    let lastSpaceIndex = fullName.lastIndexOf(" ")


    
    let firstName = fullName.substring(0,spaceIndex);
    let middleName = fullName.substring(spaceIndex +1, lastSpaceIndex);
    let lastName = fullName.substring(lastSpaceIndex+1);

    if(fullName.indexOf(" ") == -1) {
        middleName = "";
        lastName = "";
    }
    
    console.log(`Name: ${fullName}`);
    console.log(`First Name : ${firstName}`);
    console.log(`Middle Name:  ${middleName}`);
    console.log(`Last Name:  ${lastName}`);
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");



