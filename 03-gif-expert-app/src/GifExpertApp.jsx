import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { ListGif } from './components/ListGif';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['hunter x hunter']);

    const onAddCategory = (newCategory) => {
      if (categories.includes(newCategory)) {
        return
      };
      setCategories([newCategory, ...categories]);
    }

  return (
    <>
        {/** Title */}
        <h1>GifExpertApp</h1>
        
        {/** Input */}
        <AddCategory onNewCategory={(value) => onAddCategory(value)} />

        {/** Listado de GIF */}
        { categories.map(( category ) => (
          <ListGif key={category} category={category} />
          ))
        }
  </>)
}
