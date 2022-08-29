import React from 'react'
import { Container } from './styles'

const Embed = () => {
  return (
    <Container>
      {/* <iframe
        src="https://latamdev.cloud.looker.com/embed/looks/17?show_title=false&show_watermark=false"
        width="1000"
        height="400"
        frameBorder="0">
      </iframe> */}
      <iframe
        src={`https://latamdev.cloud.looker.com/embed/dashboards/379?_theme={"show_title":false}`}
        width="1000"
        height="400"
        frameBorder="0">
      </iframe>
    </Container>
  )
}

export default Embed