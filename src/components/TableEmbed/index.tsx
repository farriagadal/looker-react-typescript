import React, { useState } from 'react'
import NavMenuTable from '../NavMenuTable'
import {
  Container,
  Menu,
  ContainerPrincipal,
  MenuList,
  Pagination,
} from './styles'
import MoreVertical from '../../../public/icons/more-vertical.svg'
import BackIconTable from '../../../public/icons/backIconTable.svg'
import NextIconTable from '../../../public/icons/nextIconTable.svg'

type TableEmbedProps = {
  tableId: number // Uso posterior para identificar la tabla
  title: string
}

const TableEmbed = ({ tableId, title }: TableEmbedProps) => {
  const [tabSelected, setTabSelected] = useState(30)
  const [isOpenMenuTable, setIsOpenMenuTable] = useState(false)
  const [porMenu, setPorMenu] = useState(2)
  const [menu, setMenu] = useState(1)
  const [tableHeadFilters, setTableHeadFilters] = useState(
    'sales_tkt_prueba.airpt_trip,sales_tkt_prueba.calculo_medida_prueba,sales_tkt_prueba.calculooo_medida_prueba,sales_tkt_prueba.sum_leg_km,sales_tkt_prueba.airpt_trip_nuevo'
  )
  const isMobile = window.innerWidth < 768

  const handleClick = () => {
    setIsOpenMenuTable(!isOpenMenuTable)
  }

  const menuItem = [
    {
      id: 1,
      name: 'UF1',
      idSelected: 30,
      techName:
        'sales_tkt_prueba.airpt_trip,sales_tkt_prueba.calculo_medida_prueba,sales_tkt_prueba.calculooo_medida_prueba,sales_tkt_prueba.sum_leg_km,sales_tkt_prueba.airpt_trip_nuevo',
    },
    {
      id: 2,
      name: 'UF2',
      idSelected: 31,
      techName:
        'sales_tkt_prueba.airpt_trip,sales_tkt_prueba.count,sales_tkt_prueba.sum_leg_km,sales_tkt_prueba.airpt_trip_nuevo,sales_tkt_prueba.calculo_medida_prueba',
    },
    {
      id: 3,
      name: 'Rol',
      idSelected: 22,
    },
    {
      id: 4,
      name: 'País',
      idSelected: 23,
    },
    {
      id: 5,
      name: 'Población',
      idSelected: 24,
    },
  ]

  const handleTabMenuRight = (event: any) => {
    event.preventDefault()
    console.log(menu)
    if (menu === 2) {
      setMenu(menu - 1)
      return
    }
  }
  const handleTabMenuLeft = (event: any) => {
    event.preventDefault()
    console.log(menu)
    if (menu === 1) {
      setMenu(menu + 1)
      return
    }
  }

  const handleTableHeadFiltersTabSelected = (
    idSelected: number,
    techName: any
  ) => {
    setTabSelected(idSelected)
    setTableHeadFilters(techName)
  }

  return (
    <ContainerPrincipal>
      <h2>{title}</h2>
      <Container>
        <Menu>
          {isMobile ? (
            <>
              <Pagination onClick={(event) => handleTabMenuRight(event)}>
                <img src={NextIconTable} alt="" />
              </Pagination>
              {menuItem
                .slice((menu - 1) * porMenu, (menu - 1) * porMenu + 3)
                .map((item, index) => (
                  <a
                    key={index}
                    onClick={() => setTabSelected(item.idSelected)}
                    className={`menu ${
                      tabSelected === item.idSelected && 'isSelected'
                    }`}
                  >
                    {item.name}
                    {tabSelected === item.idSelected && (
                      <MenuList>
                        <a onClick={handleClick}>
                          <img src={MoreVertical} alt="Icon more-vertical" />
                        </a>
                        {isOpenMenuTable && (
                          <NavMenuTable
                            onCloseNav={() => setIsOpenMenuTable(false)}
                            titleModal={title}
                            subNameModal={item.name}
                            idTableModal={item.idSelected}
                          />
                        )}
                      </MenuList>
                    )}
                  </a>
                ))}
              <Pagination onClick={(event) => handleTabMenuLeft(event)}>
                <img src={BackIconTable} alt="" />
              </Pagination>
            </>
          ) : (
            menuItem.map((item, index) => (
              <a
                key={index}
                onClick={() =>
                  handleTableHeadFiltersTabSelected(
                    item.idSelected,
                    item.techName
                  )
                }
                className={`menu ${
                  tabSelected === item.idSelected && 'isSelected'
                }`}
              >
                {item.name}
                {tabSelected === item.idSelected && (
                  <MenuList>
                    <a onClick={handleClick}>
                      <img src={MoreVertical} alt="Icon more-vertical" />
                    </a>
                    {isOpenMenuTable && (
                      <NavMenuTable
                        onCloseNav={() => setIsOpenMenuTable(false)}
                        titleModal={title}
                        subNameModal={item.name}
                        idTableModal={item.idSelected}
                      />
                    )}
                  </MenuList>
                )}
              </a>
            ))
          )}
        </Menu>
        {/*     {tableId === 1 && tabSelected <= 5 ? <iframe
          id="table-looker"
          src={`https://latamdev.cloud.looker.com/embed/looks/${tabSelected}?show_title=false&fields=${tableHeadFilters}`}
          width="100%"
          height="100%"
          frameBorder="0"
        />: <iframe
        id="table-looker"
        src={`https://latamdev.cloud.looker.com/embed/looks/${tabSelected}?show_title=false&fields=${tableHeadFilters}`}
        width="100%"
        height="100%"
        frameBorder="0"
      />} */}
        <iframe
          id="table-looker"
          src={`https://latamdev.cloud.looker.com/embed/looks/${tabSelected}?show_title=false&fields=${tableHeadFilters}`}
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </Container>
    </ContainerPrincipal>
  )
}

export default TableEmbed
