import React, { FC, ReactChild, ReactElement, ReactNode, ReactText } from 'react';

interface ILayoutProps {
    children: ReactNode;
}

// type ReactNode = ReactChild | boolean | null | undefined;
// type ReactChild = ReactElement | ReactText;
// type ReactText = string | number;

const Layout: FC<ILayoutProps> = ({ children }) => {
    return <div>{children}</div>;
};

function App(): ReactElement {
    return <Layout>{null}</Layout>;
}

export default App;
