import {createContext, useContext} from 'react';

export type ThemeConfig = {
    darkMode: boolean;
    toggleMode: () => void;
}

export const theme: ThemeConfig = {
    darkMode: false,
    toggleMode: () => {}
};

export const ThemeContext = createContext(theme);

export const useTheme = () => useContext(ThemeContext);
