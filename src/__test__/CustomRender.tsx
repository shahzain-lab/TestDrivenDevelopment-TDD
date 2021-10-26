import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { AppProvider } from '../context/AppContext';
import { MemoryRouter } from 'react-router-dom';


const wrapper: React.FC = ({ children }) => {
    return (
        <AppProvider>
            <MemoryRouter>{children}</MemoryRouter>
        </AppProvider>
    )
}



const CustomRender = (
    children: React.ReactElement,
    option?: Omit<RenderOptions, 'wrapper'>
) =>
    render(children, { wrapper, ...option });



export * from '@testing-library/react';

export { CustomRender as render };
