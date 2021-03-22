import React from "react";
import { Canvas } from "react-three-fiber";
import TextMesh from "../components/TextMesh";

export default function App() {
  // parse JSON file with Three

  return (
    <Canvas style={{ background: "#000", height: "100vh" }}>
      <TextMesh position={[-15, 0, -15]} value="Davi Suga" />
    </Canvas>
  );
}
