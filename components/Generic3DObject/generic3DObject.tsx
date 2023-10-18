
interface IGeneric3DObject { 
    name: string;
    reference?: any;
    object: any,
    scale?: number,
    position?: any,
    texture?: any,
    onClick?: () => void;
}

const Generic3DObject = ({name, reference, scale, position, object, texture, onClick}: IGeneric3DObject) => {

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} name={name} ref={reference} scale={scale} position={position} onClick={onClick} >
          {
            texture && object ?
            <>
            {object}
            <meshStandardMaterial map={texture} />
            </>

            :
            <>
            {object}
            <meshStandardMaterial />
            </>
          }
        </mesh>
    )
}

export default Generic3DObject;