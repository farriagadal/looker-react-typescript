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
      route: '/entradas-y-salidas'
    },
    {
      name: 'Cuenta de remuneraciones',
      route: '/cuentas-y-remuneraciones'
    },
    {
      name: 'RH Connect',
      route: '/rh-connect'
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
