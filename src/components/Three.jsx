import { Canvas,  useThree, useFrame} from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls, Stats} from '@react-three/drei'
import { Vector3 } from 'three'


function Rig() {
    const { camera, mouse } = useThree()
    const vec = new Vector3()
  
    return useFrame(() => {
      camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.5)
      camera.lookAt(0, 0, 0.1)
  
    })
  }


function Model(props) {
    const { scene } = useGLTF('../public/models/eye/scene.gltf')
    return <primitive object={scene} {...props} />
}


function Three() {

    return (
        <Canvas dpr={[1,2]} shadows={null} camera={{fov:45, near: 0.1, far: 1000, position: [0, 0, 5] }} style={{ "position": "absolute"}}>
            <PresentationControls speed={1.5} global polar={[-0.1, Math.PI / 4 ]}>
                <Stage environment={"sunset"}>
                    <Model scale={0.02} />
                </Stage>
            </PresentationControls>
            <Rig/>
        </Canvas>
    )
}

export default Three