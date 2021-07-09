import React, { ReactElement, useRef } from 'react';

const Search = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        inputRef.current?.click();
    }, []);

    return (
        <form>
            <input ref={inputRef} type="search" />
        </form>
    );
};

function App(): ReactElement {
    return <div>...</div>;
}

export default App;
