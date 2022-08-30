import React, { useEffect, useState } from 'react'
import { MenuNav } from './styles'
import SeeMore from '../../../public/icons/seeMore.svg'
import Download from '../../../public/icons/download.svg'
import TableModal from '../TableModal'

type PropNavTable = {
  propNav: any
}

const NavMenuTable = ({propNav}: PropNavTable) => {

  const [isOpen, setIsOpen] = useState(false)


    const modal = document.getElementById("modal")
    window.onclick = function (event) {
      if (event.target === modal) {
        setIsOpen(false)
      }
    }


  console.log(isOpen)

 const handleRef = () => {
  setIsOpen(true)
  if (propNav===1) {
    /* {`https://latamdev.cloud.looker.com/embed/looks/21?show_title=false`}
    prop con el id
    prop con nombre y subtitulo
    al modal
    */
  } else {
    /* {`https://latamdev.cloud.looker.com/embed/looks/20?show_title=false`} */
  }
 }

  return (
    <>
    {isOpen && <TableModal id={"modal"} onClose={() => setIsOpen(false)}/>}

    <MenuNav>
      <li>
        <a onClick={handleRef}>
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
