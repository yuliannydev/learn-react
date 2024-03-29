import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'
import { PropTypes } from "prop-types"

export const ListGif = ({category}) => {

const { images, isLoading} = useFetchGifs(category);
  
  return (
    <>
      <h3>{category}</h3>
      { isLoading && ( <h3>Searching...</h3> ) }
      <section className='card-grid'>
        {
          images.map((item) => (
            <GifItem 
            key={item.id}
            {...item }
            />
          ))
        }
      </section>
    </>
  )
}

ListGif.propTypes = {
  category: PropTypes.string.isRequired,
}