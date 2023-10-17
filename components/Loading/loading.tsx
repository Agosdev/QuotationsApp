import { Center, Float, Text3D, useMatcapTexture } from '@react-three/drei'
import React from 'react'


const Loading = () => {
  const [matcapTexture] = useMatcapTexture("3B3C3F_DAD9D5_929290_ABACA8");

  const opts = {
    color: "#99ccff",
    height: 0.5,
    lineHeight: 1,
    letterSpacing: 0.5,
    size: 0.5,
    textAlign: 'center',
    font: "/fonts/gt.json"
  }

  return (
    <Center scale={[0.9, 1, 1]}>
        <Float speed={10}>
          <Text3D {...opts}>
          {`LOADING...`}
          <meshMatcapMaterial color="white" matcap={matcapTexture} />
          </Text3D>
      </Float>
    </Center>

  )
}

export default Loading