import { Canvas} from "@react-three/fiber";
import { Suspense } from "react";
import Intro3D from "../Intro3D/Intro3D";
import { OrbitControls} from "@react-three/drei";


const BackgroundLayout = () => { 
 

return (

<Canvas >
<Suspense fallback={null}>
 <Intro3D/>
</Suspense>
<OrbitControls  enablePan={false} />
</Canvas>

)
}

export default BackgroundLayout;