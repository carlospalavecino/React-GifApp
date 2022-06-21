import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => { 
    
    test('debe de cambiar el valor de la caja de texto', () => { 
        
        render( <AddCategory onNewCategory={ () => {} } /> );
        
        const input = screen.getByRole('textbox');
        const inputValue = 'Saitama';
        fireEvent.input( input, { target: { value: inputValue }});
        
        expect( input.value ).toBe( inputValue );

    });
    
    test('debe de llamar onNewCategory si el input tiene mas de un caracter', () => { 
        
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        // Simula el value del input
        fireEvent.input( input, { target: { value: inputValue }});

        // Simula el submit
        fireEvent.submit( form );

        // Chequea que el value se reseto luego del submit
        expect( input.value ).toBe( '' );
        // chequea si se llamo a la funcion
        expect( onNewCategory ).toHaveBeenCalled();
        // chequea que la funcion solo fue llamada una vez        
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        // chequea que halla sido llamada con el valor que enviamos
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('No debe llamar la funcion si el value es vacion', () => { 
        
        const inputValue = '';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        // Simula el value del input
        fireEvent.input( input, { target: { value: inputValue }});

        // Simula el submit
        fireEvent.submit( form );

        // chequea si se llamo a la funcion
        // expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
        expect( onNewCategory ).not.toHaveBeenCalled();

    });

});