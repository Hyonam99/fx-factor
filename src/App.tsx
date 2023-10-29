import React from "react";
import { Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage, CourseDetailPage, CoursesPage, FAQ, CurrencyPage } from "pages/page-exports";
import UserLayout from 'layouts/user-layout/UserLayout';

import './App.scss';

const App = (): React.JSX.Element => {
    return (
        <>
            <Routes>
                <Route path='/' element={<UserLayout><HomePage /></UserLayout>} />
                <Route path='/about' element={<UserLayout><AboutPage /></UserLayout>} />
                <Route path='/courses' element={<UserLayout><CoursesPage /></UserLayout>} />
                <Route path='/courses/:courseId' element={<UserLayout><CourseDetailPage /></UserLayout>} />
                <Route path='/faq' element={<UserLayout><FAQ /></UserLayout>} />
                <Route path='/currency-details' element={<UserLayout><CurrencyPage /></UserLayout>} />
            </Routes>
        </>
    );
}

export default App;
