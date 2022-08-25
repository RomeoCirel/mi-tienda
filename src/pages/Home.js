import React, {useContext} from 'react'
import {RouteContext} from '../contexts/RouteContext';
export default function Home() {
  const [, setSectionName] = useContext(RouteContext)
  setSectionName('Home')
  return (
    <div></div>
  )
}
