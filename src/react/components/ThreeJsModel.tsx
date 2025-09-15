import React, { useEffect } from 'react'
import { initThreejs } from '@/scripts/threejs'

export default function ThreeJsModel() {


    useEffect(() => {
      initThreejs();
    }, [])
  return (
      <div id="canvas-container"></div> 
  )
}
