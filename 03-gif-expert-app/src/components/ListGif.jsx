import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

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
        {
          images.map((item) => (
            <section key={item.id}>
              <h4>{item.title}</h4>
              <img src={item.image_url} alt="" />
          </section>
          ))
        }
      </>
  )
}
