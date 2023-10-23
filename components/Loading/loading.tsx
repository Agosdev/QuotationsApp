import React from 'react'
import { Cloud, Float } from '@react-three/drei'
import { Colors } from '@/enums';
 

const Loading = () => {

  return (
    <>
        <Float speed={10}>

          <Cloud color={Colors.BLUE} scale={3} position={[15,6,-4]} />
          <Cloud color={Colors.BLUE} scale={3} position={[-1,-3,-4]} />

          <spotLight intensity={300} angle={Math.PI/1} position={[-8,5,-3]} />
          <spotLight intensity={300} angle={Math.PI/1} position={[-8,15,-3]} />

       </Float>
    </>
  )
}

export default Loading