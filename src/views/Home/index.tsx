// import TableProductivity from '../../components/TableProductivity'
import React from 'react'
import BoxEmbed from '../../components/BoxEmbed'
import DashboardHome from '../../components/DashboardHome'
import Embed from '../../components/Embed'
import { Container, Box, Metrics } from './styles'

const Home = () => {
  return (
    <Container>
      <h1>Dotación y Vacantes</h1>
      <Box>
        <DashboardHome />
      </Box>
    </Container>
  )
}

export default Home
