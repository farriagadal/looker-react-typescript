import React from 'react'
import { Container } from './styles'

const DashboardHome = () => {
  const isMobile = window.innerWidth < 768
  const width = isMobile ? window.innerWidth - 35 : window.innerWidth - 294
  const height = 510
  return (
    <Container>
      <iframe
        src={`https://latamdev.cloud.looker.com/embed/dashboards/dm_commercial::dashboard_home?filters_bar_collapsed=true`}
        // src={`https://latamdev.cloud.looker.com/embed/dashboards/385?_theme={"show_title":false}`}
        width={width}
        height={height}
        frameBorder="0"
      />
    </Container>
  )
}

export default DashboardHome