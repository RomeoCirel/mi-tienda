import { createContext, useState } from 'react';

export const RouteContext = createContext()

export const RouteProvider = props => {
    const [sectionName, setSectionName] = useState('seccioncontext')

    return <RouteContext.Provider value={[sectionName, setSectionName]}>{props.children }</RouteContext.Provider>
}

