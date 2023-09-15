import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserMobileNav from "./UserMobileNav";
import { Links } from "mocked-data/mocked-data";

import './user-nav.scss';
import { Avatar, Badge } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material';
import { CartContext } from "contexts/CourseCart";

const UserNav = () => {
    const { itemQuantity } = useContext(CartContext)

    return (
        <>
            <nav>
                <div className="nav-logo">
                    <Link to='/'>
                        FX
                        {/* <img src={Logo} alt='maesan-logo' className='logo-full'/> */}
                        {/* <img src={LogoShort} alt='maesan-logo' className='logo-short'/> */}
                    </Link>
                </div>
                <ul>

                    {Links.map((link) => (
                        <li key={link.linkName}>
                            <Link to={link.linkUrl}>{link.linkName}</Link>
                        </li>
                    ))}

                </ul>
                <div className="nav-avatar">
                    <Avatar
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        sx={{ width: 30, height: 30 }}
                    />
                    <Link to='/checkout'>
                        <Badge badgeContent={itemQuantity} color="primary">
                            <ShoppingCart htmlColor="white" />
                        </Badge>
                    </Link>
                </div>
                <div className="mobile-toggle-btn">
                    <UserMobileNav />
                </div>
            </nav>

            {}
        </>
    )
};

export default UserNav;
