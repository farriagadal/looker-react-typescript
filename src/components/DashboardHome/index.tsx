import React from 'react'
import { Container } from './styles'

const DashboardHome = () => {
  const width = window.innerWidth - 284
  return (
    <Container>
      <iframe
        src={`https://latamdev.cloud.looker.com/embed/dashboards/dm_commercial::dashboard_home?filters_bar_collapsed=true`}
        // src={`https://latamdev.cloud.looker.com/embed/dashboards/385?_theme={"show_title":false}`}
        width={width}
        height="510"
        frameBorder="0"
      />
    </Container>
  )
}

export default DashboardHome