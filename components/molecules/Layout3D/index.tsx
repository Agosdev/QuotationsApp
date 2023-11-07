import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loading from "../Loading";
import { OrbitControls } from "@react-three/drei";

interface ILayout3D {
  children: React.ReactNode,
  loading?: boolean,
  orbitControls?: boolean
}

const Layout3D = ({children, loading = false, orbitControls = false}: ILayout3D) => {
  return (
  
        <Canvas>
            <Suspense fallback={loading ? <Loading /> : null}>
                {children}
                {orbitControls && <OrbitControls autoRotate enablePan={false} />}
            </Suspense>
        </Canvas>
  );
};

export default Layout3D;
