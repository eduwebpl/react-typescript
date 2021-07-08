import React from 'react';

// const Button = () => 'Button?'
const Button = () => <button>Click me!</button>

interface IHelloProps {
    name: string,
    message: string
}

const Hello = ({name, message}: IHelloProps) => <>{name} said: {message}</>;

const App = () => {
    return (
        <>
            <Hello name={'Adam'} message={'Yellow!'}/>
            <Button/>
        </>
    )
}

export default App;