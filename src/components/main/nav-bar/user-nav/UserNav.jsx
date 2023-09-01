import React from "react";
import { Link } from "react-router-dom";
import UserMobileNav from "./UserMobileNav";
import { Links } from "mocked-data/mocked-data";

import './user-nav.scss';

const UserNav = () => {

    return (
        <>
            <nav>
                <div>
                    <Link to='/'>
                        FX
                        {/* <img src={Logo} alt='maesan-logo' className='logo-full'/> */}
                        {/* <img src={LogoShort} alt='maesan-logo' className='logo-short'/> */}
                    </Link>
                </div>
                <ul>

                    {Links.map((link) => (
                        <li key={link.linkName}>
                            <Link to={link.linkUrl} target={Links.indexOf(link) === 5 && 'blank'}>{link.linkName}</Link>
                        </li>
                    ))}

                </ul>
                <div className="mobile-toggle-btn">
                    {/* <FiMenu size={26} onClick={() => { setIsToggled((prev) => !prev) }}/> */}
                    <UserMobileNav />
                </div>
            </nav>

            {}
        </>
    )
};

export default UserNav;
