import * as THREE from 'three';
import React from 'react';

const Ocean = () => {

    const WaterTexture = new THREE.TextureLoader().load( "./textures/Foam003_4K-JPG_Color.jpg" );
    WaterTexture.wrapS = THREE.RepeatWrapping;
    WaterTexture.wrapT = THREE.RepeatWrapping;
    WaterTexture.repeat.set( 2, 2 );

  return (
    <mesh scale={10} rotation={[-Math.PI / 2, 0, 0]} position={[0,-20, 0]}>
        <planeGeometry  args={[200, 200, 100, 100]} />
        <meshStandardMaterial map={WaterTexture} color={'lightblue'} />
   </mesh> 
  );
};

export default Ocean;