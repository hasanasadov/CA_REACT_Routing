import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'

export function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

