for (var i = 0; i<10; i++){
    if(i>2){
        break;
    }
    console.log('simple version');
}



var roastGiven = 0;
while (roastGiven < 7){
    if(roastGiven > 2){
        break;
    }
    console.log(roastGiven);
    console.log("Roast den please");
    roastGiven++;
}



var numbers = [22, 33, 44, 11, 33, 55, 66, 77, 88, 99, 11, 33, 44];
for (var i = 0; i < numbers.length; i++){
    if(numbers[i] > 50){
        break;
    }
    var number = numbers[i];
    console.log(number);
}