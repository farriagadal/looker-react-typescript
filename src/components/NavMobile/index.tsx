import React from 'react'
import { Container, MenuBtn, ImgLogo } from './styles'
import MenuIcon from '../../assets/icons/menu.svg'
import LogoIcon from '../../assets/logo-latam.svg'

type NavMobileProps = {
  setIsOpen: () => void
}
const NavMobile = ({ setIsOpen }: NavMobileProps) => {
  return (
    <Container>
      <MenuBtn onClick={() => setIsOpen()}>
        <img src={MenuIcon} alt="logo" />
      </MenuBtn>
      <ImgLogo>
        <img src={LogoIcon} alt="logo" />
      </ImgLogo>
    </Container>
  )
}

export default NavMobile
