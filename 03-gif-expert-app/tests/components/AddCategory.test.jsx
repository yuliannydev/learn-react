import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('<AddCategory />', () => { 
    test('Must change the value of the text box', () => { 
        render(<AddCategory onNewCategory={ ()=>{} } />);
        //screen.debug();

        /**
         * El input en el screen es reconocido como **textbox**
         */
        const input = screen.getByRole('textbox');
        
        /**
         * Disparar un evento tipo input en el input que se acaba de obtener
         * del screen e indicar el contenido de el
         */
        fireEvent.input( input, { target: { value: 'Hunter X Hunter' }} );

        /**
         * Esperar que el valor del input (textbox) sea el esperado
         */
        expect(input.value).toBe('Hunter X Hunter');
     })
     
    test('The function onNewCategory must be executed when the button is clicked', () => { 

        render( <AddCategory onNewCategory={ ()=>{} } /> )

        const input = screen.getByRole('textbox');
        const btn = screen.getByRole('button');

        fireEvent.input( input, { target: { value: 'Hunter X Hunter' }} );
        fireEvent.submit(btn)

        /** Al finalizar el evento textbox debe quedar vacio */
        expect(input.value).toBe('');

        // expect()
     })
 })