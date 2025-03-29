function findMaxPurchase(budget, keyboardPrices, mousePrices) {
    let maxPurchase = -1;

   
    for (let kPrice of keyboardPrices) {
        for (let mPrice of mousePrices) {
            let total = kPrice + mPrice;
         
            if (total <= budget && total > maxPurchase) {
                maxPurchase = total;
            }
        }
    }

    return maxPurchase;
}


let budget1 = 60;
let keyboardPrices1 = [40, 50, 60];
let mousePrices1 = [5, 8, 12];
console.log(findMaxPurchase(budget1, keyboardPrices1, mousePrices1)); 



