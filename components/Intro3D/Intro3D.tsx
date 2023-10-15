import { useRef } from "react";
import { Box, Cloud, Sky, Sparkles, Stars, useGLTF, useTexture } from "@react-three/drei";
import {  useFrame } from "@react-three/fiber";

const Intro3D = () => {
    const ref = useRef<any>()
    
    const props = useTexture({
        map: 'Ice003_1K-JPG_Color.jpg',
      })

      // useFrame((_, delta) => {
      //   ref.current.rotation.x += 1 * delta
      //   ref.current.rotation.y += 0.5 * delta
      // })

      const { scene } = useGLTF('./models/old_wooden_boat.glb')
    return(
      <>
      <gridHelper />

      <ambientLight intensity={1} />

      <primitive object={scene} />

      <mesh scale={100} >
      <Stars />
      </mesh>

      <mesh scale={10}  >
        <Sparkles speed={0.5} size={10}  color={'#f0fc03'} />
        <Cloud scale={0.02} />
      </mesh>

      <mesh scale={10} ref={ref} rotation={[-Math.PI / 2, 0, 0]} >
        <planeGeometry  args={[15, 15, 64, 64]}/>
        <meshStandardMaterial {...props} />
      </mesh>
      </>

    )
}

export default Intro3D;
