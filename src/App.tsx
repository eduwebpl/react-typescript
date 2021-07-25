import React from 'react';

//  AnimationEvent, ChangeEvent,
//  ClipboardEvent, CompositionEvent,
//  DragEvent, FocusEvent, FormEvent,
//  KeyboardEvent, MouseEvent, PointerEvent,
//  TouchEvent, TransitionEvent, WheelEvent.
//  As well as SyntheticEvent, for all other events.

function App() {
    const action: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (e) => {
        const target = e.currentTarget;
        if ('href' in target) {
            console.log(target.href);
        }
    };

    return <button onClick={action}>...</button>;
}

export default App;
