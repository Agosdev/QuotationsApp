import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loading from "../Loading/Loading";
import { OrbitControls } from "@react-three/drei";
import { BackgroundCon } from "@/styles/Layout3DElements";

interface ILayout3D {
  children: React.ReactNode,
  loading?: boolean
}

const Layout3D = ({children, loading = false}: ILayout3D) => {
  return (
    <BackgroundCon>
        <Canvas>
            <Suspense fallback={loading ? <Loading /> : null}>
                {children}
                <OrbitControls autoRotate enablePan={false} />  
            </Suspense>
        </Canvas>
    </BackgroundCon>
  );
};

export default Layout3D;
