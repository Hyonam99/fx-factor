import * as React from 'react';
import { Box, Drawer, Button, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from "react-router-dom";
import { Links } from "mocked-data/mocked-data";

import './user-nav.scss';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const UserMobileNav = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

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
        >
            <List>
                {Links.map((link) => (
                    <ListItem key={link.linkName} disablePadding={false} className='mobile-nav-links'>
                        <Link to={link.linkUrl}>
                            <ListItemButton>
                                <ListItemText primary={link.linkName} color='black'/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <Button onClick={toggleDrawer('top', !state.top)}>
                    { !state.top ? <FiMenu size={26} color='white'/> : <RxCross2 size={26} color='white'/> }
                </Button>
                <Drawer
                    anchor={'top'}
                    open={state.top}
                    onClose={toggleDrawer('top', false)}
                >
                    {list('top')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

export default UserMobileNav
