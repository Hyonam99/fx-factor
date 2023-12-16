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

export const headingVariant = (delay: number) => {
    return {
        hidden: {
            y: -80,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay
            }
        }
    };
};

export const fadeIn = (direction: string, type: any, delay: any, duration: any) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut"
            }
        }
    };
};

export const zoomIn = (delay: any, duration: any) => {
    return {
        hidden: {
            scale: 0,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                delay,
                duration,
                ease: "easeOut"
            }
        }
    };
};

export const slideIn = (direction: string, type: any, delay: any, duration: any) => {
    return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0
        },
        visible: {
            x: 0,
            y: 0,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut"
            }
        }
    };
};

export const itemVariants = (delay: number) => {
    return {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay } }
    }
};

export const pageVariants = {
    hidden: {
        opacity: 0,
        x: "-100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            mass: 0.5,
            damping: 32,
            delay: 0.4
        }
    },
    exit: {
        opacity: 0,
        x: "-100vw",
        transition: {
            duration: 0.4
        }
    }
};
