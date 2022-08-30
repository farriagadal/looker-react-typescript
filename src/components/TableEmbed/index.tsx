import React, { useState } from 'react'
import NavMenuTable from '../NavMenuTable'
import { Container, Menu, ContainerPrincipal, MenuList } from './styles'
import MoreVertical from '../../../public/icons/more-vertical.svg'


type TableEmbedProps = {
  tableId: number,
  title: string
}

const TableEmbed = ({ tableId, title }: TableEmbedProps) => {
  const [tabSelected, setTabSelected] = useState(20)

  const [isOpenMenuTable, setIsOpenMenuTable] = useState(false)
  const [propNav, setPropNav] = useState(0)




  const handleClick = (event: any) => {
    event.preventDefault()
    setIsOpenMenuTable(!isOpenMenuTable)

    if (tableId === 1 && tabSelected) {
     setPropNav(1)
    }else{
      if
      (tableId === 1 && !tabSelected){
      setPropNav(2)
      }
    }

  }

  return (
      <ContainerPrincipal>
        <h2>{title}</h2>
      <Container>
        <Menu>
          <a href="">UF1</a>
          <a href="">UF2</a>
          <a onClick={() => setTabSelected(0)} className={`${!tabSelected && 'isSelected'}`}>Rol</a>
          <a href="">País</a>
          <a onClick={() => setTabSelected(1)} className={`${tabSelected && 'isSelected'}`}>Población</a>
        </Menu>

        <MenuList>

        <a onClick={handleClick} >

          <img src={MoreVertical} alt="" />

        </a>

        {isOpenMenuTable && <NavMenuTable propNav={propNav} />}

        </MenuList>

        {(tableId === 1 && tabSelected) ?
        <iframe
        //Rol
        src={`https://latamdev.cloud.looker.com/embed/looks/21?show_title=false`}
        width="100%"
        height="100%"
        frameBorder="0"
        />:
        tableId === 1 && !tabSelected ?
        <iframe
        //Poblation
        src={`https://latamdev.cloud.looker.com/embed/looks/20?show_title=false`}
        width="100%"
        height="100%"
        frameBorder="0"
        />:
        tableId === 2 && tabSelected ? <iframe
          src={`https://latamdev.cloud.looker.com/embed/looks/23?show_title=false`}
          width="100%"
          height="100%"
          frameBorder="0"
          />:
          <iframe
          src={`https://latamdev.cloud.looker.com/embed/looks/22?show_title=false`}
          width="100%"
          height="100%"
          frameBorder="0"
          />
        }
      </Container>
      </ContainerPrincipal>
  )
}

export default TableEmbed