import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One piece', 'Dragon Ball']);

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
        <ol>
            {categories.map( category => {
                {/** gif item */}
                return <li key={category}> {category} </li>
            })
            }
        </ol>
  </>)
}
