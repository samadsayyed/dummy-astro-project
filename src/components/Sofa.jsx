/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Sofa.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Sofa.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Couch_-_cushion_-_Right_Cube001_1'].geometry} material={materials['Fabric_Backcushion.001']} />
        <mesh geometry={nodes['Couch_-_cushion_-_Right_Cube001_2'].geometry} material={materials['Wood_Pegs.001']} />
        <mesh geometry={nodes['Couch_-_cushion_-_Right_Cube001_3'].geometry} material={materials['Fabric_Cushions.001']} />
      </group>
      <mesh geometry={nodes['Couch_-_cushion_-_Right_Cube001_Baked'].geometry} material={materials['Couch_-_cushion_-_Right_Cube.001_Baked']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/Sofa.glb')
