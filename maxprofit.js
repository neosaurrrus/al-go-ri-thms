function maxStockProfit(pricesArr){
    var maxProfit = -1; 
    var buyPrice = 0;
    var sellPrice = 0;

    var changeBuyPrice = true; //records the lowest Buy price so only updates if there is a better one. It effectively holds the best buy price to test.

        for (i=0;i<pricesArr.length;i++){
    
            if (changeBuyPrice) buyPrice = pricesArr[i];
            sellPrice = pricesArr[i + 1];

            if (sellPrice < buyPrice){
                changeBuyPrice = true;
            } 
            else { 
                var tempProfit = sellPrice - buyPrice;
                console.log(tempProfit)
                if (tempProfit > maxProfit) maxProfit = tempProfit;
                changeBuyPrice = false;
                console.log(maxProfit)
            };
        };
    return maxProfit;
};
console.log(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]));
