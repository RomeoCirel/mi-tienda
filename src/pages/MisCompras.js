import React, {useContext} from 'react'
import {RouteContext} from '../contexts/RouteContext';
export const MisCompras = ({ setSection }) => {
  const [, setSectionName] = useContext(RouteContext)
  setSectionName('Mis Compras')
  return (
    <div></div>
  )
}

export default MisCompras