import React, { useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const ListGif = ({category}) => {

  useEffect(()=> {
    getGifs(category);
  }, [])

  return (
      <>
        <h3> {category} </h3>
        <p> {category.title} </p>
      </>
          )
}
