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
