import { createContext, useContext, useState } from 'react';

const Contexto = createContext();

export const usarContexto = () => useContext(Contexto);

export const ManejarSesion = ({ children }) => {
    const [loginHecho, setLoginHecho] = useState('')

    return (
        <Contexto.Provider value={{ loginHecho, setLoginHecho }}>
            {children}
        </Contexto.Provider>
    );
};