import React from 'react'
import {
  Container, ImgLogo, ListMenu,
  ItemMenu, SubListMenu, SubItemMenu, MenuBtn,
  Welcome
} from './styles'
import { NavLink } from 'react-router-dom'
import LogoSrc from '../../assets/logo-falabella.svg'
import MenuIcon from '../../assets/icons/menu.svg'

type SideBarProps = {
  // onClose: () => void
}

const Sidebar = () => {
  const menuList = [
    {
      name: 'Inicio',
      iconPath: require('../../assets/icons/1-Home.svg'),
      route: '/',
      subLinks: [
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
    },
    {
      name: 'Dotación',
      iconPath: require('../../assets/icons/2-BarChart.svg'),
      route: '/dotacion'
    },
    {
      name: 'Acciones de personal',
      iconPath: require('../../assets/icons/3-FolderShared.svg'),
      route: '/route1'
    },
    {
      name: 'Asig. Internacionales',
      iconPath: require('../../assets/icons/4-Language.svg'),
      route: '/route2'
    },
    {
      name: 'Staff Travel',
      iconPath: require('../../assets/icons/5-Group.svg'),
      route: '/route3'
    },
    {
      name: 'Eficiencias',
      iconPath: require('../../assets/icons/6-FactCheck.svg'),
      route: '/route4'
    },
    {
      name: 'Inicio',
      iconPath: require('../../assets/icons/7-DonutLarge.svg'),
      route: '/route5'
    },
    {
      name: 'Vacaciones (días)',
      iconPath: require('../../assets/icons/8-DateRange.svg'),
      route: '/route6'
    }
  ]

  const onClose = () => {
    console.log('close')
  }

  return (
    <Container>
      <MenuBtn><img src={MenuIcon} alt="logo" /></MenuBtn>
      <ImgLogo><img src={LogoSrc} alt="logo" /></ImgLogo>
      <Welcome>Hola, Constanza!</Welcome>
      <ListMenu>
        {menuList.map((item: any, index: number) => (
          <div key={index + item.name}>
            <ItemMenu to={item.route} exact>
              <img src={item.iconPath} alt={item.name} />
              <span>{item.name}</span>
            </ItemMenu>
            {
              item.subLinks && item.subLinks.length > 0 && (
                <SubListMenu>
                  {item.subLinks.map((subItem: any, subIndex: number) => (
                    <SubItemMenu to={subItem.route} exact key={subIndex + subItem.name}>
                      <span>{subItem.name}</span>
                    </SubItemMenu>
                  ))}
                </SubListMenu>
              )
            }
          </div>
        ))}
      </ListMenu>
    </Container>
  )
}

export default Sidebar
