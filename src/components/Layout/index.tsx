import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import { Container, Box } from './styles'
import NavMobile from '../NavMobile'
import NavBarMobile from '../NavBarMobile'

const Layout = ({ children }: any) => {
  const isMobile = window.innerWidth < 768
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      {((isOpen && isMobile) || !isMobile) && <Sidebar onClose={() => setIsOpen(false)} />}
      <Box>
        {isMobile ? <NavMobile setIsOpen={() => setIsOpen(true)} /> : <Header />}
        {isMobile && <NavBarMobile />}
        {children}
      </Box>
    </Container>
  )
}

export default Layout
