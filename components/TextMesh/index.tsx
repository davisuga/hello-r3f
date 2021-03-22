import { ReactNode } from "react";

interface TextMeshProps {
  children?: ReactNode;
  value?: string;
  position?: number[];
}

import * as THREE from "three";
const JetbrainsMonoBold = require("../../fonts/JetbrainsMonoBold.json");

const TextMesh = ({ value, position }: TextMeshProps) => {
  // parse JSON file with Three
  const font = new THREE.FontLoader().parse(JetbrainsMonoBold);

  // configure font geometry
  const textOptions = {
    font,
    size: 5,
    height: 1,
  };

  return (
    <mesh position={position || [0, 0, -3]}>
      <textGeometry attach="geometry" args={[value || "a", textOptions]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default TextMesh;
