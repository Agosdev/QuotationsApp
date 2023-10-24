import { Euler, Vector3 } from "@react-three/fiber";

interface IGeneric3DObject { 
    name: string,
    reference?: any,
    object: any,
    scale?: number,
    position?: Vector3,
    rotation?: Euler,
    texture?: any,
    color?: string,
    onClick?: () => void;
}

const Generic3DObject = ({name, reference, scale, position, rotation = [-Math.PI / 2, 0, 0], object, texture, color, onClick}: IGeneric3DObject) => {

    return (
        <mesh name={name} ref={reference} scale={scale} position={position} rotation={rotation} onClick={onClick} >
          {
            texture && object ?
            <>
            {object}
            <meshStandardMaterial map={texture} color={color}/>
            </>

            :
            <>
            {object}
            <meshStandardMaterial color={color}/>
            </>
          }
        </mesh>
    )
}

export default Generic3DObject;