import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('GifItem', () => { 

    const title = 'Hunter X Hunter';
    const image_url = 'https://hunter-x-hunter.com/h-x-h.webp';

    test('Snapshot Title and image_url required', () => { 
      const { container } = render( <GifItem title={title} image_url={image_url} /> )   
      expect(container).toMatchSnapshot();
    })

    test('The image must have the url image', () => { 
        
      render( <GifItem title={title} image_url={image_url} /> )   
      //screen.debug();
      /** Desestrcturando el src de la imagen */
      const { src } = screen.getByRole('img');
      //console.log(image);
      expect(src).toBe(image_url);
    })

    test('The image must have text ALT', () => {

      render( <GifItem title={title} image_url={image_url} /> )   
      /**Concatenando a la img el alt para ser especifico */
      const textAlt = screen.getByRole('img').alt;
      expect(textAlt).toBe(title);
    })

    test('The component must have a text', () => {
    
      render(<GifItem title={title} image_url={image_url} />)
      expect(screen.getByText(title)).toBeTruthy();
      /** En los test anteriores el title era un atributo de una
       * property, no un texto renderizado en el screen */
     })

 })