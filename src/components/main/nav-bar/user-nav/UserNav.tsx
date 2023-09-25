import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserMobileNav from "./UserMobileNav";
import { Links } from "mocked-data/mocked-data";
import { Avatar, Badge } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material';
import { CartContext } from "contexts/CourseCart";
import './user-nav.scss';
import logo from "assets/images/logo-dark-clipped.png";
import LogoShort from "assets/images/logo-short-clipped.png"
import defaultImage from "assets/images/blank-profile-picture.png"

const UserNav = () => {
    const { itemQuantity } = useContext(CartContext)

    return (
        <>
            <nav>
                <div className="nav-logo">
                    <Link to='/'>
                        <img src={logo} alt='fx-factor-logo' className='logo-full'/>
                        <img src={LogoShort} alt='fx-factor-logo' className='logo-short'/>
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
                        alt="Fx"
                        src={defaultImage}
                        sx={{ width: 24, height: 24 }}
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
