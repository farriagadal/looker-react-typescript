import React, { useState } from 'react'
import { MenuNav } from './styles'
import SeeMore from '../../../public/icons/seeMore.svg'
import Download from '../../../public/icons/download.svg'
import TableModal from '../TableModal'

type PropNavTable = {
  onCloseNav: () => void
  titleModal: string
  subNameModal: string
  idTableModal: number
}

const NavMenuTable = ({ onCloseNav, titleModal, subNameModal, idTableModal }: PropNavTable) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <>
      {isOpen && <TableModal titleModal={titleModal} subNameModal={subNameModal} idTableModal={idTableModal} onClose={() => setIsOpen(false)} />}

      <MenuNav>
        <li>
          <a onClick={handleClick}>
            <span>
              <img src={SeeMore} alt="see more" />
            </span>
            Ver más
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <img src={Download} alt="download" />
            </span>
            Descargar
          </a>
        </li>
      </MenuNav>
    </>
  )
}

export default NavMenuTable
