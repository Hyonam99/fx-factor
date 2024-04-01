import React from "react";
import { Link } from "react-router-dom";
import UserMobileNav from "./UserMobileNav";
import { Links } from "mocked-data/mocked-data";
import "./user-nav.scss";

const UserNav = ({ isAds }: { isAds?: boolean }) => {
	return (
		<>
			<nav>
				<div className="nav-logo">
					<Link to="/">
						<img
							src={
								"https://res.cloudinary.com/maesan-product/image/upload/v1698565851/fx-factor/logo-dark-clipped_es44jj.png"
							}
							alt="fx-factor-logo-full"
							className="logo-full"
						/>
						<img
							src={
								"https://res.cloudinary.com/maesan-product/image/upload/v1698565851/fx-factor/logo-short-clipped_bmuu6l.png"
							}
							alt="fx-factor-logo-short"
							className="logo-short"
						/>
					</Link>
				</div>
				{!isAds && (
					<ul>
						{Links.map((link) => (
							<li key={link.linkName}>
								<Link to={link.linkUrl} data-testid="desktop-nav-links">
									{link.linkName}
								</Link>
							</li>
						))}
					</ul>
				)}
				{!isAds && (
					<div className="mobile-toggle-btn">
						<UserMobileNav />
					</div>
				)}
			</nav>
		</>
	);
};

export default UserNav;
