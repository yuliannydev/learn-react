import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'

export const ListGif = ({category}) => {

  const [images, setImages] = useState([])

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages)
  }

  useEffect(()=> {
    getImages();
  }, [])

  return (
    <>
      <h3> {category} </h3>
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
