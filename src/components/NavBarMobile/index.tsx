import React from 'react'
import { Container, ListMenu } from './styles'

const NavBarMobile = () => {
  const menuList = [
    {
      name: 'Dotación y Vacantes',
      route: '/'
    },
    {
      name: 'Ingresos y Salidas',
      route: '/dotacion/2'
    },
    {
      name: 'Cuenta de remuneraciones',
      route: '/dotacion/3'
    },
    {
      name: 'RH Connect',
      route: '/dotacion/4'
    }
  ]

  return (
    <Container>
      {menuList.map((item: any, index: number) => (
        <ListMenu to={item.route} key={index}>{item.name}</ListMenu>
      ))}
    </Container>
  )
}

export default NavBarMobile
