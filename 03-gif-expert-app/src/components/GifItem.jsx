import React from 'react'

export const GifItem = ({title, image_url }) => {
  return (
    <section className='card'>
      <img src={image_url} alt={title} />
      <p>{title}</p>
    </section>
  )
}
