import React, { useState, useEffect } from 'react';
import { Box, Drawer, Button } from "@mui/material";
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from "react-router-dom";
import { Links } from "mocked-data/mocked-data";

import './user-nav.scss';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const UserMobileNav = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Create a function to update the window width state
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    // Add an event listener for the window resize event when the component mounts
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Cleanup: Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    useEffect(() => { if (windowWidth > 769) { setState({ ...state, top: false }) } }, [windowWidth])
    const toggleDrawer
    = (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown'
        && ((event as React.KeyboardEvent).key === 'Tab'
          || (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className='mobile-nav-links'
        >
            <ul>

                {Links.map((link) => (
                    <li key={link.linkName}>
                        <Link to={link.linkUrl}>{link.linkName}</Link>
                    </li>
                ))}

            </ul>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('top', !state.top)}>
                { !state.top ? <FiMenu size={26} color='white'/> : <RxCross2 size={26} color='white'/> }
            </Button>
            <Drawer
                anchor={'top'}
                open={state.top}
                onClose={toggleDrawer('top', false)}
                className='custom-drawer'
            >
                {list('top')}
            </Drawer>
        </div>
    );
}

export default UserMobileNav
