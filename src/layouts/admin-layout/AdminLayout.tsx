import React from 'react';
import { AdminNav } from 'components/components-exports';

import './admin-layout.scss';

export interface AdminLayoutProps {
    children: React.JSX.Element
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <>
            <section className='admin-layout_container'>
                <section className='admin-layout_container_nav'>
                    <AdminNav />
                </section>
                <section className='admin-layout_container_content-display'>
                    {children}
                </section>
            </section>
        </>
    )
};

export default AdminLayout;
