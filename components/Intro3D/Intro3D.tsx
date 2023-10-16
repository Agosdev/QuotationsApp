import { useRef } from "react";
import {  Cloud, PerspectiveCamera,  Sparkles, Stars, useGLTF, useTexture } from "@react-three/drei";
import {  useFrame } from "@react-three/fiber";

const Intro3D = () => {
    const ref = useRef<any>()
    
    const props = useTexture({
        map: './textures/moon.jpeg',
      })
      
    const { scene } = useGLTF('./models/ship_y.glb')

      useFrame((_, delta) => {
        ref.current.rotation.x += 0.5 * delta
        ref.current.rotation.y += 0.1 * delta
      })


    return(
  <PerspectiveCamera>
      <ambientLight intensity={1} />

      <mesh scale={50} position={[0,75,0]}  >
        <sphereGeometry  />
        <meshStandardMaterial {...props} />
      </mesh>

      <mesh  >
      <Stars />
      </mesh>
     
      <mesh scale={10}  >
        <Sparkles speed={0.5} size={15}  color={'#f0fc03'} />
      </mesh>

      <mesh scale={20} ref={ref}  >
        <Cloud  scale={0.03}  color={'#5cfdf5'}/>
      </mesh>

      <mesh scale={1}  >
       <primitive object={scene}  />
      </mesh>

      {/* <mesh scale={10} ref={ref} rotation={[-Math.PI / 2, 0, 0]} >
        <planeGeometry  args={[15, 15, 64, 64]}/>
        <meshStandardMaterial {...props} />
      </mesh> */}

      </PerspectiveCamera>
    )
}

export default Intro3D;
