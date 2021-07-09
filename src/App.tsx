import React, { ReactElement, useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const moreLove = (e: React.MouseEvent) => {
        setCounter(counter + 1);
    };

    return (
        <>
            <div>I 💛 {counter} times!</div>
            <button onClick={moreLove}>Give me more!</button>
        </>
    );
};

function App(): ReactElement {
    return (
        <div>
            <Counter />
        </div>
    );
}

export default App;
