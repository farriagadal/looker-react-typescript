import React, { useState } from 'react'
import { Container, Menu, SubTitle } from './styles'

type TableEmbedProps = { 
  lookId: number
}

const TableEmbed = ({ lookId }: TableEmbedProps) => {
  const [tabSelected, setTabSelected] = useState(0)

  return (
    <>
      <SubTitle>
        <h2>Productividad</h2>
      </SubTitle>
      <Container>
        <Menu>
          <a href="">UF1</a>
          <a href="">UF2</a>
          <a onClick={() => setTabSelected(0)} className={`${!tabSelected && 'isSelected'}`}>Rol</a>
          <a href="">País</a>
          <a onClick={() => setTabSelected(1)} className={`${tabSelected && 'isSelected'}`}>Población</a>
        </Menu>
        <iframe
        src={`https://latamdev.cloud.looker.com/embed/looks/${lookId}?show_title=false`}
        width="100%"
        height="100%"
        frameBorder="0"
        />
      </Container>
    </>  
  )
}

export default TableEmbed