import React from 'react'
import { Center, Cloud, Float,  Text3D, useMatcapTexture } from '@react-three/drei'
import { MeshStandardMaterial } from 'three';
 

const Loading = () => {
  const [matcapTexture] = useMatcapTexture("3B3C3F_DAD9D5_929290_ABACA8");

  const textProps = {
    letterSpacing: 0.5,
    size: 0.8,
    font: "/fonts/gt.json"
  }


  return (
    <Center scale={[0.5, 0.5, 0.9]}>
        <ambientLight intensity={0.5} />

        {/* <spotLight intensity={50} angle={Math.PI/8} position={[-10,0,6]} /> */}

        <spotLight intensity={50} angle={Math.PI/1} position={[-8,5,-3]} />
        <spotLight intensity={50} angle={Math.PI/1} position={[8,5,-3]} />

        <Float speed={10} floatingRange={[-1, -1]}>

          <Cloud color="#000000" scale={1} position={[4,4,4]} />
          <Cloud color="#3c90ff" scale={5} position={[-4,-4,-4]} />

          <Text3D {...textProps}>
            {`LOADING...`}
            <meshMatcapMaterial color="#74fffd" matcap={matcapTexture} />
          </Text3D>

          <mesh scale={10} rotation={[-Math.PI / 2, 0, 0]}  >
            <planeGeometry  args={[200, 200, 100, 100]} />
            <meshStandardMaterial color="#00595e"  transparent/>
           </mesh>
       </Float>
    </Center>
  )
}

export default Loading