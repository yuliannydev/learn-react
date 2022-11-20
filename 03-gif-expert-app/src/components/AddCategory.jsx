import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {
    const [topic, setTopic] = useState('');
    
    const onInput = (event) => {
        setTopic(event.target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        setCategories(categories => [topic, ...categories]);
        setTopic('');
    }

      return (
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder='Search new category'
            value={topic}
            onChange={onInput}
            />

            <button
            type='button'
            onClick={onSubmit}
            >
                ADD
            </button>
        </form> 
      )
}
