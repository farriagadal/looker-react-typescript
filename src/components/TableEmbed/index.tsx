import React from 'react'
import { Container } from './styles'

type TableEmbedProps = { 
  lookId: number
}

const TableEmbed = ({ lookId }: TableEmbedProps) => {
  return (
    <Container>
      <iframe
        src={`https://latamdev.cloud.looker.com/embed/looks/${lookId}?show_title=false`}
        width="100%"
        height="150px"
        frameBorder="0"
      />
    </Container>
  )
}

export default TableEmbed