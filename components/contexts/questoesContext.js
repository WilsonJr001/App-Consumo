import React, { createContext, useState } from 'react';

export const contexto = createContext({});

function Provedor({ children }) {
    const [resposta, setResposta] = useState([])


    return (
        <contexto.Provider value={{ resposta, setResposta }}>
            {children}
        </contexto.Provider>
    )
}
export default Provedor;