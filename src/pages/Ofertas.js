import React, {useContext} from 'react'
import {RouteContext} from '../contexts/RouteContext';
export const Ofertas = () => {
const [, setSectionName] = useContext(RouteContext)
  setSectionName('Ofertas')
  return (
    <div></div>
  )
}

export default Ofertas
