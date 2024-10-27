import React from 'react';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import useWebSocket from '../hooks/useWebSocket';
import './styles.css'; // Import your CSS file

const columns = [
    { name: 'stockName', title: 'Stock Name' },
    { name: 'averageTradedPrice', title: 'Average Traded Price' },
    { name: 'lastTradedPrice', title: 'Last Traded Price' },
    { name: 'lastTradedQuantity', title: 'Last Traded Quantity' },
    { name: 'percentageChange', title: 'Percentage Change' },
    { name: 'lastTradedTime', title: 'Last Traded Time' },
];

const StockTable = () => {
    // Update WebSocket URL to the deployed backend
    const stockData = useWebSocket('wss://real-time-stock-monitoring.onrender.com/');

    return (
        <div className="container">
            <h2>Real-Time Stock Price Monitoring</h2>
            <Grid rows={stockData} columns={columns}>
                <Table className="dx-grid-table" />
                <TableHeaderRow />
            </Grid>
        </div>
    );
};

export default StockTable;
