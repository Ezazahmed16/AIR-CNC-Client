import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Dashboard/Sidebar'

const DashboardLayout = () => {
  return (
    <div className='md:flex relative min-h-screen'>
        <div className="">
            <h1><Sidebar></Sidebar></h1>
        </div>
        <div className="flex-1 bg-orange-200 md:ml-64">
            <div className="p-5">
                <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout