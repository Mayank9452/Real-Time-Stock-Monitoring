# Objective:
Create a real-time stock price monitoring application with a React frontend and a
Node.js backend using WebSocket for live data communication. The frontend will
display stock data using React DevExpress components, and the backend will
simulate stock market data and send it to the frontend every second.

# Instructions:
##  Frontend (React):
* Build a React application using JavaScript or TypeScript.
* Integrate DevExpress DataGrid to display stock market data.
* Set up a WebSocket client to connect to the backend server.
* The grid should have the following columns:
* Average Traded Price
* Last Traded Price
* Last Traded Quantity
* Percentage Change
* Last Traded Time (format: DD-MM-YYYY HH:MM:SS)
* Each second, the grid should update with the latest data received from
the WebSocket connection.
* Ensure the application handles real-time data updates efficiently.
##  Backend (Node.js):
* Build a Node.js server that simulates stock market data for 10 stocks
of your choice (e.g., SBI, NIFTY, TCS, etc.).
* Use WebSocket to send random stock data updates to the frontend
every second.
* For each stock, randomly generate values for the following:
* Average Traded Price: A float number.
* Last Traded Price: A float number.
* Last Traded Quantity: An integer.
* Percentage Change: A float number representing percentage change from previous prices.

* Last Traded Time: A timestamp in the format DD-MM-YYYY HH:MM:SS.

* The server should continue broadcasting new data every second to the
connected WebSocket clients.

## Stocks:
* Choose any 10 stocks from the stock market. For example, SBI,
NIFTY, Reliance, Infosys, etc.
* Data Grid Columns (Client UI):
* Stock Name: Name of the stock.
* Average Traded Price
* Last Traded Price
* Last Traded Quantity
* Percentage Change
* Last Traded Time
# React DevExpress Integration:
* Use DevExpress React components to create a high-performance DataGrid that handles dynamic updates from WebSocket data.
# Link to React DevExpress Documentation: 
[DevExpress React Components](https://js.devexpress.com/React/Documentation/Guide/React_Components/DevExtreme_React_Components/).
