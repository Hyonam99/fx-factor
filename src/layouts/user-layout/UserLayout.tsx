import React from "react";
import { UserNav, Footer } from "components/components-exports";

import "./user-layout.scss";

export interface UserLayoutProps {
	children: React.JSX.Element;
	isAds?: boolean
}

const UserLayout = ({ children, isAds }: UserLayoutProps) => {
	return (
		<>
			<header>
				<UserNav isAds={isAds} />
			</header>

			<main>{children}</main>

			<footer>
				<Footer isAds={isAds} />
			</footer>
		</>
	);
};

export default UserLayout;
