import React, { FC, ReactElement } from 'react';

type MessageProps = { text: string };

const Message = ({ text }: MessageProps) => {
    return <>{text}</>;
};

function App(): ReactElement {
    return (
        <div>
            <Message text={'Hello!'} />
        </div>
    );
}

export default App;
