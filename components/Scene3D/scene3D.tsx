import * as THREE from 'three';
import { useRef, useState } from "react";
import {  Cloud, Float, PerspectiveCamera,  Sparkles, Stars } from "@react-three/drei";
import {  useFrame } from "@react-three/fiber";
import Audio from "../Audio/audio";
import { getRandomInt } from "@/utils/randomNumber";
import Generic3DObject from "../Generic3DObject/generic3DObject";
import Model3D from "../Model3D/Model3D";
import Ocean from '../Ocean/ocean';


enum Colors {
  PINK = '#ff00f7',
  GREEN = '#00ff1e',
  YELLOW = '#f2ff00',
  PURPLE = '#802cff',
  BLUE = '#5cfdf5',
}
const cloudColorsList = [Colors.PINK, Colors.GREEN, Colors.YELLOW, Colors.PURPLE, Colors.BLUE]


const Scene3D = () => {
    const [cloudColor, setCloudColor] = useState<string>(Colors.BLUE)

    const ref = useRef<any>()

    useFrame((_, delta) => {
      ref.current.rotation.y += 0.1 * delta
    })

    const MoonTexture = new THREE.TextureLoader().load( "./textures/rock_boulder_dry_diff_4k.jpg" );

  return (
    <PerspectiveCamera>

        <ambientLight intensity={1} />

        <Generic3DObject name="moon" object={<sphereGeometry />} texture={MoonTexture} scale={50} position={[0,75,0]}/>

        <Stars />
      
        <Sparkles speed={0.8} size={15} scale={10} color={Colors.YELLOW} />

        <Generic3DObject name="clouds" reference={ref}  object={<Cloud segments={6} scale={0.03}  color={cloudColor}/>} scale={20} onClick={() => setCloudColor(cloudColorsList[getRandomInt(cloudColorsList.length)])}/>

        <Sparkles speed={0.5} size={3} scale={4} color={Colors.YELLOW} />

        <Float speed={5}>
          <Model3D name="ship" scale={0.5} model={'./models/ship_y.glb'} >
              <Audio musicURL="./audio/ween-the-argus.mp3" distance={0.5}/>
          </Model3D>
        </Float>

        <Ocean />

      </PerspectiveCamera>
    )
}

export default Scene3D;
