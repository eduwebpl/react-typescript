import React, { createContext, FC, useContext, useMemo, useState } from 'react';

type Theme = 'dark' | 'light';

interface ITheme {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ITheme | null>(null);

const useTheme = () => {
    const theme = useContext(ThemeContext);
    if (!theme?.theme) {
        throw new Error('Theme is not available.');
    }
    return theme;
};

const ThemeProvider: FC = ({ children }) => {
    const [mode, setMode] = useState<Theme>('light');

    const contextValue = useMemo(() => ({ theme: mode, setTheme: setMode }), [mode, setMode]);

    return (
        <>
            <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
        </>
    );
};

const MyComponent = () => {
    const { theme, setTheme } = useTheme();

    const styles = {
        backgroundColor: theme === 'dark' ? '#111' : '#fff',
        color: theme === 'dark' ? '#fff' : '#111',
        height: '100vh',
        padding: '10px',
    };

    return (
        <>
            <div style={styles}>
                <div>Theme: {theme}</div>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change</button>
            </div>
        </>
    );
};

function App() {
    return (
        <>
            <ThemeProvider>
                <MyComponent />
            </ThemeProvider>
        </>
    );
}

export default App;
