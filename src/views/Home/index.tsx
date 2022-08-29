// import TableProductivity from '../../components/TableProductivity'
import React from 'react'
import BoxEmbed from '../../components/BoxEmbed'
import DashboardHome from '../../components/DashboardHome'
import Embed from '../../components/Embed'
import TableEmbed from '../../components/TableEmbed'
import { Container, Box, Metrics } from './styles'

const Home = () => {
  return (
    <Container>
      <h1>Dotación y Vacantes</h1>
      <Box>
        <DashboardHome />
      </Box>
    <TableEmbed lookId={20}/>
    </Container>
  )
}

export default Home
