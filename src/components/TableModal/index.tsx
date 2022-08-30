import React, { useState } from 'react'
import {Container, Overley} from './styles'

type IdModal = {
  id: string
}

const TableModal = ({id}: IdModal) => {

  return (
    <Overley id={id}>
    <Container>
        <h2>name</h2> {/* prop */}
        <h3>poblacion</h3> {/* prop */}
        <iframe
        src={`https://latamdev.cloud.looker.com/embed/looks/20?show_title=false`}
        width="100%"
        height="100%"
        frameBorder="0"
        />
    </Container>
    </Overley>
  )
}

export default TableModal