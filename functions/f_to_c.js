/* var fahrenheit = 360;

var convertCelcius = (fahrenheit-32) / (9/5)

console.log(convertCelcius); */


function convertFtoC(fahrenheit) {
    var convertCelsius = (fahrenheit-32) / (9/5);

    return convertCelsius;

}

console.log(convertFtoC(212));
console.log(convertFtoC(90))
console.log(convertFtoC(72));

