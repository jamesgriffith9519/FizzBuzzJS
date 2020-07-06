function fizzbuzz(val1, val2) {
    let rtnValue = "";

    for (let index = 1; index < 100; index++){
     if (index % val1 === 0 && index % val2 === 0 ) {
         rtnValue += " FizzBuzz! "
     }
     else if (index % val1 === 0) {
        rtnValue += " Fizz "
     }
     else if (index % val2 === 0) {
        rtnValue += " Buzz "
     }
     else {
         rtnValue += index + " ";
     }
    }
    return rtnValue;
}

function showfizzBuzz() {
    let output = "";
    let val1 = document.getElementById("fizzValue").value;
    let val2 = document.getElementById("buzzValue").value;
    output = fizzbuzz(val1,val2);
    document.getElementById("results").innerHTML = output

}