import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#00550B',
            dark: '#01420a',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff7961',
            main: '#580909',
            dark: '#3c0202',
            contrastText: '#000'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'outlined'
                    && ownerState.color === 'secondary' && {
                        color: '#fff'
                    }),
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    borderRadius: '.6rem'
                })
            }
        }
    }
});
