import Baknesnees from '@/componets/shere/Baknesnees';
import Header from '@/componets/shere/Header';
import Navbar from '@/componets/shere/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
        <Header></Header>
        <Baknesnees></Baknesnees>
        <Navbar></Navbar>

        {children}
        </div>
    );
};

export default MainLayout;