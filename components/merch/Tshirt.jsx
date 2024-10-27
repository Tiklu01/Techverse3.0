/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/tshirt.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/tshirt.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.BindingPattern_1176917_Node.geometry} material={materials.contrast_FRONT_2699} />
      <mesh geometry={nodes.Body_Back_1_Node.geometry} material={materials.Body_FRONT_2677} />
      <mesh geometry={nodes.Body_Back_2_Node.geometry} material={materials.contrast_FRONT_2699} />
      <mesh geometry={nodes.Body_Back_3_Node.geometry} material={materials.contrast_FRONT_2699} />
      <mesh geometry={nodes.Body_Back_4_Node.geometry} material={materials.contrast_FRONT_2699} />
      <mesh geometry={nodes.Body_Back_5_Node.geometry} material={materials.contrast_FRONT_2699} />
      <mesh geometry={nodes.Body_Front_1_Node.geometry} material={materials['Body_FRONT_2677.001']} />
      <mesh geometry={nodes.Body_Front_2_Node.geometry} material={materials.contrast_FRONT_2699} />
      <mesh geometry={nodes.Body_Front_3_Node.geometry} material={materials.contrast_FRONT_2699} />
      <mesh geometry={nodes.Body_Front_4_Node.geometry} material={materials.contrast_FRONT_2699} />
      <mesh geometry={nodes.Body_Front_5_Node.geometry} material={materials.contrast_FRONT_2699} />
      <mesh geometry={nodes.Body_Front_Placket_Node.geometry} material={materials.Collar_FRONT_2664} />
      <mesh geometry={nodes.Body_Front_Placket_Node001.geometry} material={materials.Collar_FRONT_2671} />
      <mesh geometry={nodes.MatShape_1030771_Node.geometry} material={materials.PT_FABRIC_FRONT_353299} />
      <mesh geometry={nodes.MatShape_1030976_Node.geometry} material={materials.PT_FABRIC_FRONT_345739} />
      <mesh geometry={nodes.MatShape_1031211_Node.geometry} material={materials.PT_FABRIC_FRONT_360859} />
      <mesh geometry={nodes.MatShape_1031875_Node.geometry} material={materials.PT_FABRIC_FRONT_294253} position={[0, 1.27, 0.069]} />
      <mesh geometry={nodes.Pattern_125499_Node.geometry} material={materials.contrast_FRONT_2699} />
      <mesh geometry={nodes.Pattern_125500_Node.geometry} material={materials.contrast_FRONT_2699} />
      <mesh geometry={nodes.Sleeves_Node.geometry} material={materials.Collar_FRONT_2664} />
      <mesh geometry={nodes.Sleeves_Node001.geometry} material={materials.Collar_FRONT_2664} />
      <mesh geometry={nodes.StitchMatShape_1030968_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1031173_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1031346_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1031481_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1031616_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1031751_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1031789_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1031804_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1031842_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1031857_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1032010_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1032145_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1032280_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1032415_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1032430_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1032468_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1032483_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.StitchMatShape_1032521_Node.geometry} material={materials.Material2927} />
      <mesh geometry={nodes.MatShape_6177_Node.geometry} material={materials.Material624078} position={[0, 1.555, 0.055]} rotation={[1.083, 0, -0.004]} scale={[0.6, 1, 0.6]} />
      <mesh geometry={nodes.MatShape_6186_Node.geometry} material={materials.Material624078} position={[0.001, 1.51, 0.075]} rotation={[1.205, -0.007, 0.088]} scale={[0.6, 1, 0.6]} />
      <mesh geometry={nodes.MatShape_6195_Node.geometry} material={materials.Material624078} position={[0, 1.464, 0.09]} rotation={[1.288, 0, 0.044]} scale={[0.6, 1, 0.6]} />
      <mesh geometry={nodes.Collar.geometry} material={materials.Collar_FRONT_2683} />
      <mesh geometry={nodes.Collar_1.geometry} material={materials.Collar_BACK_2683} />
      <mesh geometry={nodes.Collar_2.geometry} material={materials.Collar_SIDE_2683} />
      <mesh geometry={nodes.Pattern_125497.geometry} material={materials.Collar_FRONT_2683} />
      <mesh geometry={nodes.Pattern_125497_1.geometry} material={materials.Collar_BACK_2683} />
      <mesh geometry={nodes.Pattern_125497_2.geometry} material={materials.Collar_SIDE_2683} />
      <mesh geometry={nodes.Pattern_125498.geometry} material={materials.Collar_FRONT_2683} />
      <mesh geometry={nodes.Pattern_125498_1.geometry} material={materials.Collar_BACK_2683} />
      <mesh geometry={nodes.Pattern_125498_2.geometry} material={materials.Collar_SIDE_2683} />
    </group>
  )
}

useGLTF.preload('/tshirt.glb')
