import React, { useState } from 'react'
import { Container, Menu, ContainerPrincipal } from './styles'


type TableEmbedProps = {
  tableId: number,
  title: string
}
//1 productividad
//2 vacantes




const TableEmbed = ({ tableId, title }: TableEmbedProps) => {
  const [tabSelected, setTabSelected] = useState(20)


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
        { tabSelected ? <iframe
        src={`https://latamdev.cloud.looker.com/embed/looks/21?show_title=false`}
        width="100%"
        height="100%"
        frameBorder="0"
        />:
        <iframe
        src={`https://latamdev.cloud.looker.com/embed/looks/20?show_title=false`}
        width="100%"
        height="100%"
        frameBorder="0"
        />}
      </Container>
      </ContainerPrincipal>
  )
}

export default TableEmbed