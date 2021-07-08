import React from 'react';

const Button = () => <></>

interface IHelloProps {
    name: string,
    message: string
}

const Hello = ({name, message}: IHelloProps) => <>{name} said: {message}</>;

const App = () => {
    return (
        <>
            <Button />
            <Hello message={'Hi there'} name={'Adam'}/>
        </>
    )
}

export default App;