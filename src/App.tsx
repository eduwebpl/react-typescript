import React, { Component, ReactElement } from 'react';

interface IMessageProps {
    defaultTimes: number;
}

interface IMessageState {
    times: number;
}

class Message extends Component<IMessageProps, IMessageState> {
    constructor(props: IMessageProps) {
        super(props);
    }

    static defaultProps = {
        defaultTimes: 3,
    };

    readonly state: IMessageState = {
        times: 0,
    };

    componentDidUpdate(prevProps: IMessageProps, prevState: IMessageState) {
        ///
    }

    render() {
        return (
            <>
                <h1>I 💛 you x{this.state.times}</h1>
                <button onClick={() => this.setState(({ times }) => ({ times: times + 1 }))}>
                    I need more love 💔
                    {this.props.defaultTimes}
                </button>
            </>
        );
    }
}

function App(): ReactElement {
    return <div></div>;
}

export default App;
