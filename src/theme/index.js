import {createTheme, colors} from '@material-ui/core';


const themeX = createTheme({
    palette: {
        background: {
            default: colors.grey.A100,
            paper: colors.common.white
        },
        primary: {
            light: '#0ea3ff',
            main: '#1986aa',
            dark: '#006aa5',
            contrastText: '#fff'
        },
        secondary: {
            main: '#111236',
            light: '#5a489b',
            contrastText: '#ff7b59'
        },
        text: {
            primary: '#111236'
        }
    }
});

export default themeX;