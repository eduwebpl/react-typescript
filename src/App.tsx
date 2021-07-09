import React, { ReactElement, useEffect, useState } from 'react';

type Status = 'loading' | 'failed' | 'finished';

interface IListItem {
    name: string;
    age: number;
}

interface IFetchState<T> {
    status: Status;
    data: T[];
}

type FetchState = IFetchState<IListItem>;

interface IFetchProps {
    url: string;
    children: (state: FetchState) => ReactElement;
}

const Fetch = ({ url, children }: IFetchProps) => {
    const [state, setState] = useState<FetchState>({
        status: 'loading',
        data: [{ name: 'Adam', age: 30 }],
    });

    useEffect(() => {
        console.log(`fetch from ${url}`);
        setState({
            ...state,
            data: [],
            status: 'finished',
        });
    }, []);

    return children(state);
};

interface IListProps {
    items: FetchState['data'];
    renderItem: (item: FetchState['data'][0]) => FetchState['data'][0];
}

const List = ({ items, renderItem }: IListProps) => (
    <ul>
        {items.map((item) => (
            <li key={item.name}>{renderItem(item)}</li>
        ))}
    </ul>
);

function App(): ReactElement {
    return (
        <div>
            <Fetch url={'/items'}>
                {({ data, status }) => {
                    return (
                        <>
                            {status === 'loading' && <p>Loading...</p>}
                            {status === 'failed' && <p>Oops...!</p>}
                            {status === 'finished' && data.length && <List items={data} renderItem={(item) => item} />}
                        </>
                    );
                }}
            </Fetch>
        </div>
    );
}

export default App;
