let arr = ['a', 'b', 'c', 'd'];
let reversed = [];

while (arr.length > 0) {
    reversed.push(arr.pop());
}

console.log(reversed); // Output: ['d', 'c', 'b', 'a']
