import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One piece', 'Dragon Ball']);

  return (
    <>
        {/** Title */}
        <h1>GifExpertApp</h1>
        
        {/** Input */}
        <AddCategory setCategories={setCategories} />

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
