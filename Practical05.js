let arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];
let frequency = {};
let maxCount = 0;
let mostFrequent;

for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1; 
    if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mostFrequent = num;
    }
}

console.log(`Most Frequent Element: ${mostFrequent} `);
