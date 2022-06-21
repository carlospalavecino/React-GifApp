import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Hace un mock del custom hook useFetchGifs
jest.mock( '../../src/hooks/useFetchGifs' );

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch';

    test('debe mostrar el loading inicialmente', () => { 
        
        // Definicion del customHook
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } />);

        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));

    });

    test('debe de mostrar items cuando se cargan las imagenes', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://algo.com/image.jpg'
            },
            {
                id: 'ABC2',
                title: 'Saitama2',
                url: 'https://algo.com/image2.jpg'
            }
        ]

        // Definicion del customHook
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } />);

        // Chequea que el array devuelto contenga 2 imagenes
        expect( screen.getAllByRole('img').length).toBe( 2 );

    });

})