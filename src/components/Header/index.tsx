import React from 'react'
import { Container, Avatar } from './styles'

const Header = () => {
  return (
    <Container>
      <h1>Te damos la bienvenida</h1>
      <h2>Abril 2022</h2>
      <Avatar>
        <img src="/avatar.jpg" alt="avatar" />
      </Avatar>
    </Container>
  )
}

export default Header
