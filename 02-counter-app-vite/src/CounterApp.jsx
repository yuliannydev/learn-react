import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({value}) => {
const [ counter, setCounter ] = useState(value)

  const handleAdd = () => {
    setCounter((counter) => counter + 1)
  }

  const handleSubstract = () => {
    setCounter((counter) => counter - 1)
  }

  const handleReset = () => {
    setCounter(value)
  }

  return (
    <main>
        <h1>Counter App</h1>
        <h2> {counter} </h2>
        <button className='btn-1' onClick={() => handleAdd() }>
          +1
        </button>
        <button className='btn-2' onClick={() => handleSubstract() }>
          -1
        </button>
        <button className='btn-3' onClick={() => handleReset() }>
          Reset
        </button>

    </main>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
