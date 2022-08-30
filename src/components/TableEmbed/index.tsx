import React, { useState } from 'react'
import NavMenuTable from '../NavMenuTable'
import { Container, Menu, ContainerPrincipal, MenuList } from './styles'
import MoreVertical from '../../../public/icons/more-vertical.svg'


type TableEmbedProps = {
  tableId: number,
  title: string
}

const TableEmbed = ({ tableId, title }: TableEmbedProps) => {
  const [tabSelected, setTabSelected] = useState(24)

  const [isOpenMenuTable, setIsOpenMenuTable] = useState(false)
  const [propNav, setPropNav] = useState(5)




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

  const menuItem = [
    {
      id: 1,
      name: 'UF1',
      idSelected: 20
    },
    {
      id: 2,
      name: 'UF2',
      idSelected: 21
    },
    {
      id: 3,
      name: 'Rol',
      idSelected: 22
    },
    {
      id: 4,
      name: 'País',
      idSelected: 23
    },
    {
      id: 5,
      name: 'Población',
      idSelected: 24
    },
  ]

  return (
      <ContainerPrincipal>
        <h2>{title}</h2>
        <Container>
          
        <Menu>
          {menuItem.map((item, index) => (
              <a key={index}
              onClick={() => setTabSelected(item.idSelected)}
              className={`menu ${tabSelected === item.idSelected && 'isSelected'}`}>
              {item.name} {tabSelected === item.idSelected && <MenuList>
              <a onClick={handleClick} >
                <img src={MoreVertical} alt="Icon more-vertical" />
              </a>
              {isOpenMenuTable && <NavMenuTable name={title} subname={item.name} idTable={item.idSelected} propNav={propNav} />}
            </MenuList>}</a>
          ))}
          </Menu>

          {(tabSelected === 20) ?
          <iframe
          //Rol
          src={`https://latamdev.cloud.looker.com/embed/looks/20?show_title=false`}
          width="100%"
          height="100%"
          frameBorder="0"
          />:
          tabSelected === 21 ?
          <iframe
          //Poblation
          src={`https://latamdev.cloud.looker.com/embed/looks/21?show_title=false`}
          width="100%"
          height="100%"
          frameBorder="0"
          /> :
         tabSelected === 22 ?
            <iframe
            //Poblation
            src={`https://latamdev.cloud.looker.com/embed/looks/22?show_title=false`}
            width="100%"
            height="100%"
            frameBorder="0"
              /> :
              tabSelected === 23 ?
              <iframe
              //Poblation
              src={`https://latamdev.cloud.looker.com/embed/looks/23?show_title=false`}
              width="100%"
              height="100%"
              frameBorder="0"
                /> :
                 
                <iframe
                //Poblation
                src={`https://latamdev.cloud.looker.com/embed/looks/21?show_title=false`}
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