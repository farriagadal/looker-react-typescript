import React, { useState } from 'react'
import NavMenuTable from '../NavMenuTable'
import { Container, Menu, ContainerPrincipal, MenuList, Pagination } from './styles'
import MoreVertical from '../../../public/icons/more-vertical.svg'
import BackIconTable from '../../../public/icons/backIconTable.svg'
import NextIconTable from '../../../public/icons/nextIconTable.svg'

type TableEmbedProps = {
  tableId: number, // Uso posterior para identificar la tabla
  title: string
}

const TableEmbed = ({ tableId, title }: TableEmbedProps) => {

  const [tabSelected, setTabSelected] = useState(20)
  const [isOpenMenuTable, setIsOpenMenuTable] = useState(false)
  const [porMenu, setPorMenu] = useState(2)
  const [menu, setMenu] = useState(1)
  const isMobile = window.innerWidth < 768

  const handleClick = () => {
    setIsOpenMenuTable(!isOpenMenuTable)
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
          {isMobile ? (<><Pagination onClick={() => setMenu(menu - 1)}><img src={NextIconTable} alt="" /></Pagination>
            {menuItem.slice((menu - 1) * porMenu, (menu - 1) * porMenu + 3).map((item, index) => (
              <a
                key={index}
                onClick={() => setTabSelected(item.idSelected)}
                className={`menu ${tabSelected === item.idSelected && 'isSelected'}`}>
                {item.name}
                {tabSelected === item.idSelected && <MenuList>
                  <a onClick={handleClick} >
                    <img src={MoreVertical} alt="Icon more-vertical" />
                  </a>
                  {
                    isOpenMenuTable &&
                    <NavMenuTable
                      onCloseNav={() => setIsOpenMenuTable(false)}
                      titleModal={title}
                      subNameModal={item.name}
                      idTableModal={item.idSelected}
                    />
                  }
                </MenuList>}
              </a>
            ))}
            <Pagination onClick={() => setMenu(menu + 1)}><img src={BackIconTable} alt="" /></Pagination>
          </>
          )
            : (menuItem.map((item, index) => (
              <a
                key={index}
                onClick={() => setTabSelected(item.idSelected)}
                className={`menu ${tabSelected === item.idSelected && 'isSelected'}`}>
                {item.name}
                {tabSelected === item.idSelected && <MenuList>
                  <a onClick={handleClick} >
                    <img src={MoreVertical} alt="Icon more-vertical" />
                  </a>
                  {
                    isOpenMenuTable &&
                    <NavMenuTable
                      onCloseNav={() => setIsOpenMenuTable(false)}
                      titleModal={title}
                      subNameModal={item.name}
                      idTableModal={item.idSelected}
                    />
                  }
                </MenuList>}
              </a>
            )))}

        </Menu>
        <iframe
          id='table-looker'
          src={`https://latamdev.cloud.looker.com/embed/looks/${tabSelected}?show_title=false`}
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </Container>
    </ContainerPrincipal>
  )
}

export default TableEmbed