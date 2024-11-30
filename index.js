function factorial(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers.";
    }

    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(-3)); // Output: "Factorial is not defined for negative numbers."
function isPrime(num) {
    if (num <= 1) {
        return false; // 0 and 1 are not prime numbers
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a divisor, not a prime number
        }
    }

    return true; // No divisors found, it's a prime number
}

// Example usage:
console.log(isPrime(7));  // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(1));  

function isPrime(num) {
    if (num <= 1) {
        return false; // 0 and 1 are not prime numbers
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a divisor, not a prime number
        }
    }

    return true; // No divisors found, it's a prime number
}

// Example usage:
console.log(isPrime(7));  // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(1));  // Output: false
console.log(isPrime(2));  // Output: true
// Output: false

function sumArray(numbers) {
    let sum = 0; // Initialize sum to 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // Add each element to sum
    }
    return sum; // Return the final sum
}

// Example usage:
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, 20, 30]));    // Output: 60
console.log(sumArray([]));              // Output: 0


function reverseString(input) {
    let reversed = ""; // Initialize an empty string to store the result
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i]; // Append each character from the end to the result
    }
    return reversed; // Return the reversed string
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString(""));      // Output: ""

function generateFibonacci(n) {
    if (n <= 0) {
        return []; // Return an empty array for invalid input
    }
    
    let fibonacci = [0]; // Start with the first term
    
    if (n > 1) {
        fibonacci.push(1); // Add the second term if n > 1
    }

    for (let i = 2; i < n; i++) {
        // Calculate next term as the sum of the two preceding ones
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    
    return fibonacci; // Return the Fibonacci sequence
}

// Example usage:
console.log(generateFibonacci(5));  // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(generateFibonacci(1));  // Output: [0]
console.log(generateFibonacci(0));  // Output: []

function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = ""; // Initialize an empty string for each row
        for (let j = 1; j <= i; j++) {
            row += "*"; // Append "*" to the row
        }
        console.log(row); // Print the row
    }
}

// Example usage:
printPattern(5);


function findLargestNumber(numbers) {
    if (numbers.length === 0) {
        return null; // Return null for an empty array
    }

    let largest = numbers[0]; // Assume the first number is the largest initially

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]; // Update largest if a bigger number is found
        }
    }

    return largest; // Return the largest number
}

// Example usage:
console.log(findLargestNumber([10, 5, 8, 22, 15])); // Output: 22
console.log(findLargestNumber([-3, -7, -1, -10]));  // Output: -1
console.log(findLargestNumber([]));                 // Output: null
console.log(isPrime(2));  // Output: true

function countVowels(str) {
    const vowels = "aeiouAEIOU"; // Define vowels, including uppercase
    let count = 0; // Initialize vowel count to 0

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++; // Increment count if the character is a vowel
        }
    }

    return count; // Return the total count of vowels
}

// Example usage:
console.log(countVowels("hello"));       // Output: 2
console.log(countVowels("JavaScript"));  // Output: 3
console.log(countVowels("AEIOU"));       // Output: 5
console.log(countVowels("bcdfg"));       // Output: 0

function isPalindrome(word) {
    const len = word.length;
    
    for (let i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            return false; // If characters don't match, it's not a palindrome
        }
    }
    
    return true; // If the loop completes, it's a palindrome
}

// Example usage:
console.log(isPalindrome("madam"));    // Output: true
console.log(isPalindrome("racecar"));  // Output: true
console.log(isPalindrome("hello"));    // Output: false
console.log(isPalindrome("level"));    // Output: true

function removeDuplicates(arr) {
    let uniqueArr = []; // Initialize an empty array to store unique elements
    
    for (let i = 0; i < arr.length; i++) {
        // Check if the element is not already in the uniqueArr
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]); // Add the element to uniqueArr if it's not a duplicate
        }
    }
    
    return uniqueArr; // Return the array with unique elements
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates([7, 7, 7, 7]));           // Output: [7]
console.log(removeDuplicates([10, 20, 30, 10, 20]));   // Output: [10, 20, 30]

function power(base, exponent) {
    let result = 1; // Initialize result to 1 (the identity value for multiplication)
    
    // Loop to multiply base by itself exponent times
    for (let i = 1; i <= Math.abs(exponent); i++) {
        result *= base; // Multiply the result by the base in each iteration
    }

    // If the exponent is negative, return the reciprocal of the result
    if (exponent < 0) {
        return 1 / result;
    }

    return result; // Return the calculated result
}

// Example usage:
console.log(power(2, 3));    // Output: 8 (2^3)
console.log(power(5, -2));   // Output: 0.04 (5^-2)
console.log(power(3, 0));    // Output: 1 (3^0)
console.log(power(7, 4));    // Output: 2401 (7^4)

function bubbleSort(arr) {
    let n = arr.length;
    
    // Outer loop for each pass through the array
    for (let i = 0; i < n - 1; i++) {
        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            // If the current element is greater than the next one, swap them
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr; // Return the sorted array
}

// Example usage:
console.log(bubbleSort([5, 3, 8, 4, 2]));  // Output: [2, 3, 4, 5, 8]
console.log(bubbleSort([10, 1, 7, 3]));    // Output: [1, 3, 7, 10]
console.log(bubbleSort([12, 11, 13, 5, 6])); // Output: [5, 6, 11, 12, 13]


function intersection(arr1, arr2) {
    let result = []; // Initialize an empty array to store common elements

    // Loop through the first array
    for (let i = 0; i < arr1.length; i++) {
        // Check if the element is in the second array and not already in the result
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i]); // Add common element to the result array
        }
    }

    return result; // Return the array of common elements
}

// Example usage:
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));  // Output: [3, 4]
console.log(intersection([7, 8, 9], [10, 8, 7]));        // Output: [7, 8]
console.log(intersection([1, 2], [3, 4]));               // Output: []


function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Example usage:
multiplicationTable(5);
// Prints the multiplication table for 5
multiplicationTable(7); // Prints the multiplication table for 7

