const stocks = ["SBI", "NIFTY", "TCS", "Reliance", "Infosys", "HDFC", "ICICI", "Bajaj", "ITC", "Maruti"];

function generateStockData() {
    return stocks.map(stock => ({
        stockName: stock,
        averageTradedPrice: (Math.random() * 1000).toFixed(2),
        lastTradedPrice: (Math.random() * 1000).toFixed(2),
        lastTradedQuantity: Math.floor(Math.random() * 1000),
        percentageChange: ((Math.random() * 2) - 1).toFixed(2),
        lastTradedTime: new Date().toLocaleString("en-GB", { hour12: false }),
    }));
}

module.exports = generateStockData;
