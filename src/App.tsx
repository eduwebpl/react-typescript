import React, { Component, MouseEvent, ReactElement } from 'react';

interface IMouseState {
    x: number;
    y: number;
}

interface IMouseProps {
    render(state: IMouseState): ReactElement;
}

interface ICatProps {
    mouse: IMouseState;
}

const Cat = ({ mouse }: ICatProps) => {
    return (
        <img src={'https://placekitten.com/100/100'} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
};

class Mouse extends Component<IMouseProps, IMouseState> {
    constructor(props: IMouseProps) {
        super(props);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove = (event: MouseEvent) => {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        });
    };

    render() {
        return (
            <div style={{ height: '100vh', width: '100vw' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

function App(): ReactElement {
    return (
        <div>
            <Mouse render={(mouse) => <Cat mouse={mouse} />} />
        </div>
    );
}

export default App;
