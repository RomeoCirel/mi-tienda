import React from 'react'
import { Header } from '../components/Header'

export const LayoutPrincipal = ({ sectionName, children }) => {
    return (
      <>
            <Header sectionName={sectionName || 'Titulo de la Seccion'} />
            <div className='container mx-auto px-4'>
                {children ?? 'No hay nada para mostrar'}
            </div>
      </>
  )
}
