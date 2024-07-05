import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const HomeLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default HomeLayout