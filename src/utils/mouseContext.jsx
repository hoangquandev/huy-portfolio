
import React, { createContext, useState } from 'react'
// Initiate Context
const MouseContext = createContext();
// Provide Context
export const MouseProvider = ({ children }) => {
    const [size, setSize] = useState(40);
    // const [zoom, setZoom] = useState(false);
    return (
        <MouseContext.Provider value={{ size, setSize }}>
            {children}
        </MouseContext.Provider>
    )
}

export default MouseContext;