import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem />', () => { 
    
    const title = 'Dragon Ball';
    const url = 'https://one-punch.com/DragonBall.jpg';

    test('debe hacer match con el snapshot', () => { 
        
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

     });

     test('debe mostrar la imagen con el url y el alt indicado', () => { 
        
        render( <GifItem title={ title } url={ url } /> );
        
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

     });
     
     test('debe mostrar el titulo en el componente', () => { 
        
        render( <GifItem title={ title } url={ url } />);
        expect( screen.getByText( title ) ).toBeTruthy();

      })

})