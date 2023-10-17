import React from "react";
import { Link } from "react-router-dom";
import UserMobileNav from "./UserMobileNav";
import { Links } from "mocked-data/mocked-data";
import './user-nav.scss';
import logo from "assets/images/logo-dark-clipped.png";
import LogoShort from "assets/images/logo-short-clipped.png"

const UserNav = () => {

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
                <div className="mobile-toggle-btn">
                    <UserMobileNav />
                </div>
            </nav>

            {}
        </>
    )
};

export default UserNav;
