import React, { ReactElement, useCallback, useEffect } from 'react';

interface IFetchProps {
    url: string;
}

const Fetch = ({ url }: IFetchProps) => {
    const getData = useCallback(async () => {
        const response = await fetch(url);
    }, []);

    useEffect(() => {
        async function fetchData() {
            const data = await getData;
            // use data
        }

        return () => {
            console.log('Cleanup');
        };
    }, [getData]);
};

function App(): ReactElement {
    return <div></div>;
}

export default App;
