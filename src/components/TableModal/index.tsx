import React, { useState } from 'react'
import { Container, Overley, Title } from './styles'

type IdModal = {
  onClose: () => void
  titleModal: string
  subNameModal: string
  idTableModal: number
}

const TableModal = ({ onClose, titleModal, subNameModal, idTableModal }: IdModal) => {

  return (<>
  <Overley onClick={() => onClose()}>
      <Container>
        <Title>{titleModal}</Title>
        <h3>{subNameModal}</h3> {/* prop */}
        <iframe
          src={`https://latamdev.cloud.looker.com/embed/looks/${idTableModal}?show_title=false`}
          width="710px%"
          height="401px"
          frameBorder="0"
        />
      </Container>
    </Overley>
  </>
  )
}

export default TableModal