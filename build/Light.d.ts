import { AR } from 'expo';
import { THREE } from 'expo-three';
declare class Light extends THREE.PointLight {
    constructor();
    _data: AR.LightEstimation | null;
    data: AR.LightEstimation | null;
    update(): void;
}
export default Light;
