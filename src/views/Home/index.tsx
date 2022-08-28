// import TableProductivity from '../../components/TableProductivity'
import React from 'react'
import BoxEmbed from '../../components/BoxEmbed'
import Embed from '../../components/Embed'
import TableEmbed from '../../components/TableEmbed'
import { Container, Box, Metrics } from './styles'

const Home = () => {
  return (
    <Container>
      <h1>Dotación y Vacantes</h1>
      <Box>
        <Metrics>
          <BoxEmbed />
          <BoxEmbed />
          <BoxEmbed />
        </Metrics>
        <Embed />
      </Box>
      <Box>
        <TableEmbed lookId={20} tableName={'Productividad'} />
        <TableEmbed lookId={21} tableName={'Vacantes'} />
      </Box>
    </Container>
  )
}

export default Home
