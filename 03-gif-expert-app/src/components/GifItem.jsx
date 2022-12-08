import React from 'react'
import PropTypes from 'prop-types'

export const GifItem = ({title, image_url }) => {
  return (
    <section className='card'>
      <img src={image_url} alt={title} />
      <p>{title}</p>
    </section>
  )
} 

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired
}