import React from 'react'
import { fireEvent, getByText, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('Pruebas en el <CounterApp />', () => { 
    const value = 100;
    
    test('Debe hacer match con el snapshot', () => { 
       const { container } = render(<CounterApp value={value}/>)
       expect(container).toMatchSnapshot();
     })

    test('Debe mostrar el valor inicial de 100 <CounterApp value={100} />', () => { 
    
        render(<CounterApp value={value}/>)
        
        expect(Number(screen.getByRole('heading', {level: 2}).innerHTML)).toBe(value);
     })

    test('Debe incrementar con el boton +1', () => { 

        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText(101)).toBeTruthy();
     })

    test('Debe decrementar con el boton -1', () => { 
        
        render(<CounterApp value={value} />)
        /** Disparar un evento - Pruebas por texto */
        fireEvent.click(screen.getByText('-1'))
        //screen.debug();
        expect(screen.getByText(99)).toBeTruthy();
     })

    test('Debe funcionar el boton de reset', () => { 
        
        render(<CounterApp value={value} />)
        //fireEvent.click(screen.getByText('Reset'))
        //screen.debug();
        /** Pruebas por rol con aria-label */
        fireEvent.click(screen.getByRole('button', {name: 'reset'}))
        expect(screen.getByText(value)).toBeTruthy();
    })
 })