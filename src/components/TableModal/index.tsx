import React, { useState } from 'react'
import {Container, Overley, Title} from './styles'

type IdModal = {
  onClose: () => void
  name: string
  subName: string
  idTable: string
}

const TableModal = ({ onClose, name, subName, idTable }: IdModal) => {

 
  return (
    <Overley  onClick={() => onClose()}>
      <Container>
          <Title>{name}</Title>
          <h3>{subName}</h3> {/* prop */}
          <iframe
          src={`https://latamdev.cloud.looker.com/embed/looks/${idTable}?show_title=false`}
          width="100%"
          height="379px"
          frameBorder="0"
          />
      </Container>
    </Overley>
  )
}

export default TableModal