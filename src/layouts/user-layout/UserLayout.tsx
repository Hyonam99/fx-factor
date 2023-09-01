import React from 'react';
import { UserNav, Footer } from 'components/components-exports';

import './user-layout.scss';

export interface UserLayoutProps {
    children: React.JSX.Element
}

const UserLayout = ({ children }: UserLayoutProps) => {
    return (
        <>
            <header>
                <UserNav />
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default UserLayout;
