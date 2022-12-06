import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { Container, Box, Content } from './styles'

const Layout = ({ children }: any) => {
  return (
    <Container>
      <Sidebar />
      <Box>
        <Content>
          {children}
        </Content>
      </Box>
    </Container>
  )
}

export default Layout
