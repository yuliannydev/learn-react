import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('<AddCategory />', () => { 
    
    test('Must change the value of the text box', () => { 
        render(<AddCategory onNewCategory={ ()=>{} } />);
        //screen.debug();

        /*
         * El input en el screen es reconocido como **textbox**
         */
        const input = screen.getByRole('textbox');
        
        /*
         * Disparar un evento tipo input en el input que se acaba de obtener
         * del screen e indicar el contenido de el
         */
        fireEvent.input( input, { target: { value: 'Hunter X Hunter' }} );

        /*
         * Esperar que el valor del input (textbox) sea el esperado
         */
        expect(input.value).toBe('Hunter X Hunter');
     })
     
    test('The function onNewCategory must be executed when the button is clicked', () => { 
        /* 
        * Mock de la funcion onNewCategory.
        * Simulación.
        */
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> )

        const input = screen.getByRole('textbox');
        const btn = screen.getByRole('button');

        /*
        * Disparar los eventos
        */
        fireEvent.input( input, { target: { value: 'Hunter X Hunter' }} );
        fireEvent.submit(btn)

        /*
        * Al finalizar el evento textbox debe quedar vacio
        */
        expect(input.value).toBe('');

        /*
        * Para asegurarnos que se llama a la fn
        */
        expect(onNewCategory).toHaveBeenCalled();

        /*
        * Que la fn halla sido llamada con un valor
        */
        expect(onNewCategory).toHaveBeenCalledWith('Hunter X Hunter');
     })

     test('The function must not be called when the input receives less than one character', () => { 
        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={onNewCategory} /> );
        
        const btn = screen.getByRole('button');
        fireEvent.submit(btn)
        
        expect(onNewCategory).toHaveBeenCalledTimes(0);
     })
})
