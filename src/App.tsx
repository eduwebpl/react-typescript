import React, { useState } from 'react';

const useToggle = (init: boolean) => {
    const [value, setValue] = useState(init);
    const toggleValue = () => setValue(!value);

    return [value, toggleValue] as const;
};

function App() {
    const [isActive, toggleActive] = useToggle(false);
    return (
        <div className="App">
            {isActive && <>I&apos;m here!</>}
            {isActive}
            <button onClick={toggleActive}>Switch!</button>
        </div>
    );
}

export default App;
