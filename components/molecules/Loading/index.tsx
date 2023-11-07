import React, {memo} from 'react'
import { Cloud, Float, Text3D, useMatcapTexture } from '@react-three/drei'
import { Colors } from '@/enums';
 

const Loading = () => {
 
  const [matcapTexture] = useMatcapTexture("3B3C3F_DAD9D5_929290_ABACA8");

  const textProps = {
    letterSpacing: 0.1,
    size: 0.3,
    textAlign: 'right',
    font: "/fonts/gt.json"
  }

  return (
    <>
        <Float speed={10}>

          <Cloud color={Colors.BLUE} scale={3} position={[15,6,-4]} />
          <Cloud color={Colors.BLUE} scale={3} position={[-1,-3,-4]} />

          <spotLight intensity={300} angle={Math.PI/1} position={[-8,5,-3]} />
          <spotLight intensity={300} angle={Math.PI/1} position={[-8,15,-3]} />

          <Text3D {...textProps}>
            {`Good things come \nto those who \nwait...`}
            <meshMatcapMaterial color="white" matcap={matcapTexture} />
          </Text3D>

       </Float>
    </>
  )
}

export default memo(Loading)