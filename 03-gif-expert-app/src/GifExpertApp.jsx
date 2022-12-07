import { useState } from 'react';
import { AddCategory, ListGif, Footer } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
      if (categories.includes(newCategory)) {
        return
      };
      setCategories([newCategory, ...categories]);
    }

  return (
    <>
        {/** Title */}
        <h1>Search Gif App</h1>
        
        {/** Input */}
        <AddCategory onNewCategory={(value) => onAddCategory(value)} />

        {/** Listado de GIF */}
        { categories.map(( category ) => (
          <ListGif key={category} category={category} />
          ))
        }
        <Footer />
  </>)
}
