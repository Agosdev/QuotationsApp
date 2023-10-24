import { useGLTF } from "@react-three/drei";


interface IGeneric3DObject { 
    name: string;
    model: string;
    reference?: any;
    scale?: number,
    position?: any,
    onClick?: () => void;
    children?: any;
}

const Model3D = ({name, reference, scale, position, onClick, model, children}: IGeneric3DObject) => {
    const { scene } = useGLTF(model)

    return (
        <mesh name={name} ref={reference} scale={scale} position={position} onClick={onClick} >
         {scene && <primitive object={scene}  />}
        {children}
        </mesh>
    )
}

export default Model3D;