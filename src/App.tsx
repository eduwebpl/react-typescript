import React, { FormEvent } from 'react';

interface IFields {
    email: HTMLInputElement;
    message: HTMLInputElement;
}

function App() {
    const submit = (event: FormEvent<HTMLFormElement>) => {
        const target = event.target as typeof event.target & IFields;
        console.log(target.email);
    };

    const validateEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        // validateEmail
    };

    return (
        <>
            <form name="signup" onSubmit={submit}>
                <input onChange={validateEmail} type="email" name={'email'} />
                <input type="text" name={'name'} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default App;
