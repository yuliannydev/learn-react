const { render, screen } = require('@testing-library/react');
import { ListGif } from "../../src/components/ListGif"
describe('Test in component <ListGif />', () => { 
    
    const category = 'One piece';

    test('Must show the component loading', () => { 
    
        render( <ListGif category={category}/> )
        //screen.debug()

        expect( screen.getByText('Searching...') )
        expect( screen.getByText(category) )
     })
 })