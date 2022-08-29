import React from 'react'
import { Container } from './styles'

const DashboardHome = () => {
  const width = window.innerWidth - 300
  return (
    <Container>
      <iframe
        src="https://latamdev.cloud.looker.com/embed/dashboards/385?show_filters_bar=false&show_title=false"
        width={width}
        height="400"
        frameBorder="0"
      />
    </Container>
  )
}

export default DashboardHome