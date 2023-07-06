import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Shared/ErrorPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import Main from '../Layout/Main'
import ComingSoon from '../Pages/Shared/ComingSoon'
import Details from '../Pages/Details'
import SearchResult from '../Pages/SearchResult'
import PrivateRoute from './PrivateRoute'
import Checkout from '../Pages/Checkout'
import DashboardLayout from '../Layout/DashboardLayout'
import Welcome from '../Pages/Dashboard/Welcome'
import MyBooking from '../Pages/Dashboard/MyBooking'
import BecomeAHost from '../Pages/Dashboard/BecomeAHost'
import AllUsers from '../Pages/Dashboard/AllUsers'
import AllBookings from '../Pages/Dashboard/AllBookings'
import AddHome from '../Pages/AddHome'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/service-details',
        element: <Details />,
      },
      {
        path: '/search-result',
        element: <SearchResult />,
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout /></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/coming-soon',
        element: <ComingSoon />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: '',
        element: <Welcome></Welcome>
      },
      {
        path: 'my-bookings',
        element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
      },
      {
        path: 'become-host',
        element: <PrivateRoute><BecomeAHost></BecomeAHost></PrivateRoute>
      },
      {
        path: 'all-users',
        element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
      },
      {
        path: 'all-bookings',
        element: <PrivateRoute><AllBookings></AllBookings></PrivateRoute>
      },
      {
        path: 'add-home',
        element: <PrivateRoute><AddHome></AddHome></PrivateRoute>
      },
    ]
  },
])

export default router
