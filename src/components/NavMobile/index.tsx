import React from 'react'
import { Container, MenuBtn, ImgLogo } from './styles'

type NavMobileProps = {
  setIsOpen: () => void
}
const NavMobile = ({ setIsOpen }: NavMobileProps) => {
  return (
    <Container>
      <MenuBtn onClick={() => setIsOpen()}>
        <img src="/icons/menu.svg" alt="logo" />
      </MenuBtn>
      <ImgLogo>
        <img src="/logo-latam.svg" alt="logo" />
      </ImgLogo>
    </Container>
  )
}

export default NavMobile
