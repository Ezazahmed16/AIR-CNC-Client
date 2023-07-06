import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Dashboard/Sidebar'
import { AuthContext } from '../contexts/AuthProvider';
import { getRole } from '../api/user';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRole(user?.email)
      .then(data => {
        console.log(data)
        setRole(data)
        setLoading(false)
      })
  }, [user])
  return (
    <div className='md:flex relative min-h-screen'>
      {
        loading ? (
          ''
        )
          :
          (
            <>
              <div className="shadow-xl">
                <Sidebar role={role}></Sidebar>
              </div>
              <div className="flex-1 bg-orange-200 md:ml-64">
                <div className="">
                  <Outlet></Outlet>
                </div>
              </div>
            </>
          )
      }
    </div>
  )
}

export default DashboardLayout