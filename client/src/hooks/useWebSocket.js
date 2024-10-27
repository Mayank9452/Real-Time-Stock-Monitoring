import { useState, useEffect } from 'react';

const useWebSocket = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const ws = new WebSocket(url);

        ws.onmessage = (event) => {
            setData(JSON.parse(event.data));
        };

        return () => ws.close();
    }, [url]);

    return data;
};

export default useWebSocket;
