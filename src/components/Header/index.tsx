import React from 'react'
import { Container, Avatar } from './styles'
import AvatarIcon from '../../assets/avatar.jpg'

const Header = () => {
  return (
    <Container>
      <h1>Te damos la bienvenida</h1>
      <h2>Abril 2022</h2>
      <Avatar>
        <img src={AvatarIcon} alt="avatar" />
      </Avatar>
    </Container>
  )
}

export default Header
