import { render } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('GifItem', () => { 

    const title = 'Hunter X Hunter';
    const image_url = 'https://hunter-x-hunter.com/h-x-h.webp';

    test('Snapshot Title and image_url required', () => { 
     const { container } = render( <GifItem title={title} image_url={image_url} /> )   
     expect(container).toMatchSnapshot();
     })
 })