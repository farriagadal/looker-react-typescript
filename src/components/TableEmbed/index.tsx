import { type } from 'os'
import React, { useState } from 'react'
import { Container, Menu, ContainerPrincipal } from './styles'

<<<<<<< HEAD
type TableEmbedProps = { 
  lookId: number
  tableName: string
}

const TableEmbed = ({ lookId, tableName }: TableEmbedProps) => {
  const [tabSelected, setTabSelected] = useState(0)
=======

type TableEmbedProps = {
  tableId: number,
  title: string
}

const TableEmbed = ({ tableId, title }: TableEmbedProps) => {
  const [tabSelected, setTabSelected] = useState(20)
>>>>>>> e82a4c6fdc122cb84ab76238e945aa4d43d160cc

  const my_request = JSON.stringify({
    type: 'dashboard:run'
  }
  )

/*   const my_iframe = (document?.getElementById('looker') as HTMLIFrameElement)
  my_iframe.contentWindow.postMessage(my_request, 'https://latamdev.cloud.looker.com/') */

  return (
      <ContainerPrincipal>
<<<<<<< HEAD
        <h2>{tableName}</h2>
        <Container>
          <Menu>
            <a href="">UF1</a>
            <a href="">UF2</a>
            <a onClick={() => setTabSelected(0)} className={`${!tabSelected && 'isSelected'}`}>Rol</a>
            <a href="">País</a>
            <a onClick={() => setTabSelected(1)} className={`${tabSelected && 'isSelected'}`}>Población</a>
          </Menu>
        <iframe
          id='looker'
          src={`https://latamdev.cloud.looker.com/embed/looks/${lookId}?show_title=false`}
=======
        <h2>{title}</h2>
      <Container>
        <Menu>
          <a href="">UF1</a>
          <a href="">UF2</a>
          <a onClick={() => setTabSelected(0)} className={`${!tabSelected && 'isSelected'}`}>Rol</a>
          <a href="">País</a>
          <a onClick={() => setTabSelected(1)} className={`${tabSelected && 'isSelected'}`}>Población</a>
        </Menu>
        {(tableId === 1 && tabSelected) ? <iframe
        src={`https://latamdev.cloud.looker.com/embed/looks/21?show_title=false`}
        width="100%"
        height="100%"
        frameBorder="0"
        />:
        tableId === 1 && !tabSelected ?
        <iframe
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
>>>>>>> e82a4c6fdc122cb84ab76238e945aa4d43d160cc
          width="100%"
          height="100%"
          frameBorder="0"
          />
<<<<<<< HEAD
        </Container>
=======
        }
      </Container>
>>>>>>> e82a4c6fdc122cb84ab76238e945aa4d43d160cc
      </ContainerPrincipal>
  )
}

export default TableEmbed