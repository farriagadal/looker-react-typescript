import React from 'react'
import {
  Container, ImgLogo, ListMenu,
  ItemMenu, SubListMenu, SubItemMenu,
  MobileSection, Avatar, Name,
  CloseButton
} from './styles'
import { NavLink } from 'react-router-dom'

type SideBarProps = {
  onClose: () => void
}

const Sidebar = ({ onClose }: SideBarProps) => {
  const isMobile = window.innerWidth < 768

  const menuList = [
    {
      name: 'Inicio',
      iconPath: '/icons/1-Home.svg',
      route: '/',
      subLinks: [
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
    },
    {
      name: 'Dotación',
      iconPath: '/icons/2-BarChart.svg',
      route: '/dotacion'
    },
    {
      name: 'Acciones de personal',
      iconPath: '/icons/3-FolderShared.svg',
      route: '/route1'
    },
    {
      name: 'Asig. Internacionales',
      iconPath: '/icons/4-Language.svg',
      route: '/route2'
    },
    {
      name: 'Staff Travel',
      iconPath: '/icons/5-Group.svg',
      route: '/route3'
    },
    {
      name: 'Eficiencias',
      iconPath: '/icons/6-FactCheck.svg',
      route: '/route4'
    },
    {
      name: 'Inicio',
      iconPath: '/icons/7-DonutLarge.svg',
      route: '/route5'
    },
    {
      name: 'Vacaciones (días)',
      iconPath: '/icons/8-DateRange.svg',
      route: '/route6'
    }
  ]

  return (
    <Container>
      {
        !isMobile
          ? <ImgLogo>
              <img src="/logo-latam.svg" alt="logo" />
            </ImgLogo>
          : <MobileSection>
              <CloseButton onClick={onClose}>
                <img src="/icons/close.svg" />
              </CloseButton>
              <Avatar>
                <img src="/avatar.jpg" alt="avatar" />
              </Avatar>
              <Name>
                <p>Paula Fernandez</p>
                <img src="/icons/right.svg" />
                <span>Ver perfil</span>
              </Name>
            </MobileSection>
      }
      <ListMenu>
        {menuList.map((item: any, index: number) => (
          <div key={index + item.name}>
            <ItemMenu to={item.route}>
              <img src={item.iconPath} alt={item.name} />
              <span>{item.name}</span>
            </ItemMenu>
            {
              item.subLinks && item.subLinks.length > 0 && (
                <SubListMenu>
                  {item.subLinks.map((subItem: any, subIndex: number) => (
                    <SubItemMenu to={subItem.route} key={subIndex + subItem.name}>
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
