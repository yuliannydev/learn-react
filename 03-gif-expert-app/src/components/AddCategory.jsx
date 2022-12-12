import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => { 
    const [inputValue, setInputValue] = useState('');
    
    const onInput = (event) => {
        setInputValue(event.target.value);
    }
    
    const onSubmit = (event) => {
        console.log('Hola desde onSubmit');
        event.preventDefault();
        const value = inputValue.trim();
        if (value.length <= 1) return;
        
        onNewCategory(value);
        setInputValue('');
    }

      return (
        <form onSubmit={onSubmit} className='search'>
            <input 
            type="text"
            placeholder='Search new gif category and push enter or botton GO'
            value={inputValue}
            onChange={onInput}
            />

            <button
            type='button'
            onClick={onSubmit}
            >
            GO
            </button>
        </form> 
      )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
