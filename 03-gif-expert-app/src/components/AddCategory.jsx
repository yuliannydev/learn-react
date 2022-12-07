import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [topic, setTopic] = useState('');
    
    const onInput = (event) => {
        setTopic(event.target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if (topic.trim().length <= 1) return;
        
        onNewCategory(topic.trim())
        setTopic('');
    }

      return (
        <form onSubmit={onSubmit} className='search'>
            <input 
            type="text"
            placeholder='Search new gif category and push enter or botton GO'
            value={topic}
            onChange={onInput}
            />

            <button
            type='button'
            onClick={onSubmit}
            >
            Go
            </button>
        </form> 
      )
}
