//Write a recursive function to print numbers from 1 to n
function printNumbers(num) {
    if (num < 1) {
        return; 
    }
    printNumbers(num - 1); 
    console.log(num); 
}

printNumbers(10); 
