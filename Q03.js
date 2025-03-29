function getMaxValue(inputNumber) {
    if (inputNumber < 10) {
      console.log("The number must have at least two digits.");
      return null;
    }
  
    // Convert the number to a string
    const digits = inputNumber.toString().split('');
  
    // Sort  in descending order
    for (let i = 0; i < digits.length - 1; i++) {
      for (let j = i + 1; j < digits.length; j++) {
        if (digits[i] < digits[j]) {
          // Swap 
          const temp = digits[i];
          digits[i] = digits[j];
          digits[j] = temp;
        }
      }
    }
  
    
    const maxNumber = Number(digits.join(''));
  
    return maxNumber;
  }
  
  
  console.log(getMaxValue(215));  
  console.log(getMaxValue(1093)); 
  