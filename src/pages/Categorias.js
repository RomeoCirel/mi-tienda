import React, {useContext} from 'react'
import {RouteContext} from '../contexts/RouteContext';
export const Categorias = () => {
    const [, setSectionName] = useContext(RouteContext)
    setSectionName('Categorias')
    return (
        <div></div>
    )
}

export default Categorias
