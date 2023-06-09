import React from 'react'
import Card from '../Card/Card'

const Container = (props) => {
  const { cards } = props
  return (
    <div className='d-flex flex-wrap justify-content-center'>
       {!cards && <h1>No hay Info</h1> }
       {(cards && cards.length > 0) && cards.map((card,index) => {
        return <Card key={card.id} {...card} />
       }) }
    </div>
  )
}

export default Container

