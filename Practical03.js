let a = [4, 5, 6, 3, 7];
let b = [8, 3, 2, 1, 5];

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) { 
        if (a[i] === b[j]) { 
            console.log(`Match found: ${a[i]}`); 
        }
    }
}
