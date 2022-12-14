// import TableProductivity from '../../components/TableProductivity'
import React from 'react'
import BoxEmbed from '../../components/BoxEmbed'
import DashboardHome from '../../components/DashboardHome'
import Embed from '../../components/Embed'
import TableEmbed from '../../components/TableEmbed'
import { Container, Box, BoxTable, Titles } from './styles'

const Home = () => {
  return (
    <Container>
      <h1>Dotación y Vacantes</h1>
      <Titles>
        <h2>Datos clave</h2>
        <h2>Dotación</h2>
      </Titles>
      <Box>
        <DashboardHome />
      </Box>
      <BoxTable>
        <TableEmbed tableId={1} title={'Productividad'}/>
        <TableEmbed tableId={2} title={'Vacantes'}/>
      </BoxTable>
    </Container>
  )
}

export default Home
