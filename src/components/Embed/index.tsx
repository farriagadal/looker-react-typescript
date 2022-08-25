import React from 'react'
import { Container } from './styles'

const Embed = () => {
  return (
    <Container>
      <iframe
        src="https://latamdev.cloud.looker.com/embed/looks/17?show_title=false&show_watermark=false"
        width="1000"
        height="400"
        frameborder="0">
      </iframe>
      {/* <iframe
        src="https://latamdev.cloud.looker.com/embed/dashboards/379"
        width="1000"
        height="1000"
        frameborder="0">
      </iframe> */}
    </Container>
  )
}

export default Embed