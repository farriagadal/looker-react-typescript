import React from 'react'
import { Container } from './styles'

const DashboardHome = () => {
  const isMobile = window.innerWidth < 768
  const width = isMobile ? window.innerWidth - 35 : window.innerWidth - 294
  const height = 510

  setTimeout(async () => {
    const url = `https://latamdev.cloud.looker.com/embed/dashboards/dm_commercial::dashboard_home?filters_bar_collapsed=false`
    const respuesta = await fetch(url)
    console.log(respuesta)
    const dash = document.getElementById('dashboard-layout-wrapper')
    console.log(dash)
  }, 5000)

  return (
    <Container>
      <iframe
        src={`https://latamdev.cloud.looker.com/embed/dashboards/dm_commercial::dashboard_home?filters_bar_collapsed=false`}
        // src={`https://latamdev.cloud.looker.com/embed/dashboards/385?_theme={"show_title":false}`}
        width={width}
        height={height}
        frameBorder="0"
      />
    </Container>
  )
}

export default DashboardHome
