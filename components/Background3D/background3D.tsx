import { Canvas} from "@react-three/fiber";
import { Suspense } from "react";
 import {   OrbitControls} from "@react-three/drei";
import Scene3D from "../Scene3D/scene3D";
import Loading from "../Loading/loading";


const Background3D = () => { 

return (

    <Canvas>
        <Suspense fallback={<Loading />}>
        <Loading />
            {/* <Scene3D />
            <OrbitControls autoRotate enablePan={false} /> */}
        </Suspense>
    </Canvas>
 )
}

export default Background3D;