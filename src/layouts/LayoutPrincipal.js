import React, { useContext } from 'react'
import {Outlet} from 'react-router-dom'
import { Header } from '../components/Header'
import { RouteContext } from '../contexts/RouteContext'

export const LayoutPrincipal = () => {
    const [sectionName] = useContext(RouteContext)
    return (
      <>
            <Header sectionName={sectionName || 'Titulo de la Seccion'} />
            <div className='container mx-auto px-4'>
               <Outlet />
            </div>
      </>
  )
}
