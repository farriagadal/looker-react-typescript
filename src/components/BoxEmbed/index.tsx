import React from 'react'
import { Container } from './styles'

const Embed = () => {
  return (
    <Container>
      <iframe
        src="https://latamdev.cloud.looker.com/embed/looks/19?show_title=false"
        width="100%"
        height="150px"
        frameBorder="0"
      />
    </Container>
  )
}

export default Embed