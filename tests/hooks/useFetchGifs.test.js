import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el Hook useFetchGifs', () => { 
    
    test('debe de regresar el estado inicial', () => { 
        
        // Renderizar Hook para emular ciclo de vida del componente
        const { result } = renderHook( () => useFetchGifs('OnePunch') );
        
        // Estado inicial
        const { images, isLoading } = result.current;
        
        // evalue que el array de imagenes este vacio
        expect( images.length ).toBe( 0 );
        // evalue que el isLoading sea = true
        expect( isLoading ).toBeTruthy();

    });
    
    test('debe de regresar un arreglo de imagenes y el isLoading en false', async () => { 
        
        // Renderizar Hook para emular ciclo de vida del componente
        const { result } = renderHook( () => useFetchGifs('OnePunch') );
        
        // Post resuesta de la API
        await waitFor(
            // Espera a que el array de imagenes sea mayor a 0
            () => expect( result.current.images.length ).toBeGreaterThan( 0 )
        );
        
        const { images, isLoading } = result.current;

        // evalue que el array de imagenes NO este vacio
        expect( images.length ).toBeGreaterThan( 0 );
        // evalue que el isLoading sea false
        expect( isLoading ).toBeFalsy();

    });

});