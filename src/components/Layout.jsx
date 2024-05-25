import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


const Layout = () => {
    return (
        <>
            <Header />
            {/* jun component lai layoutle wrap garxa tyo componentko content chai outletle create garnu paryo */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout