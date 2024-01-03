import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout