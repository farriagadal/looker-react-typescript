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
      <Box>
        <TableEmbed tableId={1} title={'Productividad'}/>
        <TableEmbed tableId={2} title={'Vacantes'}/>
      </Box>
<<<<<<< HEAD
      <Box>
        <TableEmbed lookId={20} tableName={'Productividad'} />
        <TableEmbed lookId={21} tableName={'Vacantes'} />
      </Box>
=======
>>>>>>> e82a4c6fdc122cb84ab76238e945aa4d43d160cc
    </Container>
  )
}

export default Home
