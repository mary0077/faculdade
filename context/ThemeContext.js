import React from  'react';

const themes = {
    light: {
foreground: '#000000',
background: '#eeeeee',
    },
    dark: {
        foreground: '#000000',
        background: '#eeeeee',      
    },
  
};

const ThemeContext = React.createContext(themes.light);

export {ThemeContext, themes};