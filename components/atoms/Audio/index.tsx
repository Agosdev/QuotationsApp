import { PositionalAudio } from "@react-three/drei";

interface IAudio {
    musicURL: string;
    distance?: number;
    ready?: boolean;
}

const Audio = ({ready = true, distance = 1,  musicURL}: IAudio) => { 
return (
    <>
    {ready && <PositionalAudio autoplay url={musicURL} loop distance={distance} hasPlaybackControl />}
    </>
)}

export default Audio;