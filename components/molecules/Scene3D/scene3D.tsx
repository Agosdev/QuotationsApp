import * as THREE from 'three';
import {  useCallback, useMemo, useRef, useState  } from "react";
import {  Cloud, Float, Html, PerspectiveCamera,  Sparkles, Stars } from "@react-three/drei";
import {  useFrame } from "@react-three/fiber";
import Audio from "../../atoms/Audio/Audio";
import { getRandomInt } from "@/utils/randomNumber";
import Generic3DObject from "../../atoms/Generic3DObject/Generic3DObject";
import Model3D from "../../atoms/Model3D/Model3D";
import { Colors } from '@/enums';

const cloudColorsList = [Colors.PINK, Colors.GREEN, Colors.YELLOW, Colors.PURPLE, Colors.BLUE]

interface IScene3D {
  HTMLContent: JSX.Element;
}

const Scene3D = ({HTMLContent}: IScene3D) => { 
    const [cloudColor, setCloudColor] = useState<Colors>(Colors.BLUE)

    const ref = useRef<any>(null)

    useFrame((_, delta) => {
      ref.current.rotation.y += 0.1 * delta
    })

    const handleChangeCloudColor = useCallback(() => {
      setCloudColor(cloudColorsList[getRandomInt(cloudColorsList.length)])
    }, []);
    
    const MoonTexture = useMemo(() => new THREE.TextureLoader().load( "./textures/rock_boulder_dry_diff_4k.jpg" ), []);
    const WaterTexture = useMemo(() => new THREE.TextureLoader().load( "./textures/Foam003_4K-JPG_Color.jpg" ), []);
    WaterTexture.wrapS = THREE.RepeatWrapping;
    WaterTexture.wrapT = THREE.RepeatWrapping;
    WaterTexture.repeat.set( 2, 2 );

  return (
    <PerspectiveCamera>

        <ambientLight intensity={1} />

        <Generic3DObject name="moon" object={<sphereGeometry />} texture={MoonTexture} scale={50} position={[0,75,0]}/>

        <Stars />
      
        <Sparkles speed={0.8} size={15} scale={10} color={Colors.YELLOW} />

        <Generic3DObject name="clouds" reference={ref}  object={<Cloud segments={6} scale={0.03}  color={cloudColor}/>} scale={20} onClick={() => handleChangeCloudColor()}/>

        <Sparkles speed={0.5} size={3} scale={4} color={Colors.YELLOW} />

        <Float speed={5}>
          <Model3D name="ship" scale={0.5} model={'./models/ship_y.glb'} >
              <Audio musicURL="./audio/ween-the-argus.mp3" distance={0.5}/>
          </Model3D>
        </Float>

        <Generic3DObject name="ocean" rotation={[-Math.PI / 2, 0, 0]} object={<planeGeometry  args={[200, 200, 100, 100]} />} texture={WaterTexture} scale={10} position={[0,-20, 0]} color={'lightblue'}/>

        <Html>
            {HTMLContent}
        </Html>


      </PerspectiveCamera>
    )
}

export default Scene3D;
