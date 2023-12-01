import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Computers = () => {
  return (
  <div >
          <Canvas style={{  justifyItems:"end", zIndex:0, position:"absolute", width: "100%", height: "100%" }}>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                  
                />
              </Sphere>
            </Suspense>
          </Canvas>
          </div>
     
    
  )
}

export default Computers