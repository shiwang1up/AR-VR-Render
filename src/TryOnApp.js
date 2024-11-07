import React, { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "react-resizable/css/styles.css";

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  scene.position.set(0, 0, 0);
  return <primitive object={scene} scale={[.5, .5, .5]} />;
};

// Add background and model options
const backgroundOptions = [
  {
    value: "/Assets/Rooms/japandi-living-room-interior-design_53876-145502.avif",
    label: "japandi-living-room-interior",
  },
  {
    value: "/Assets/Rooms/pexels-photo-3935338.webp",
    label: "pexels-photo",
  },
  {
    value: "/Assets/Rooms/Room-vanity-flooring-wall-photos-3840x2400.jpg",
    label: "Room-vanity-flooring-wall",
  },
];

const modelOptions = [
  {
    value: "/Assets/Models/3d/Closet and clothes.glb",
    label: "Closet and clothes",
  },
  {
    value: "/Assets/Models/3d/Kitchen Cooktop and Counter.glb",
    label: "Kitchen Cooktop and Counter",
  },
  {
    value: "/Assets/Models/3d/Old-Fashioned Desk.glb",
    label: "Old-Fashioned Desk",
  },
  {
    value: "/Assets/Models/3d/Shelf Large.glb",
    label: "Shelf Large",
  },
  {
    value: "/Assets/Models/3d/Wardrobe.glb",
    label: "Wardrobe",
  },
  // Add more 3D model options as needed
];

const TryOnApp = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modelPath, setModelPath] = useState(null);

  const handleBackgroundSelect = (e) => {
    setSelectedImage(e.target.value);
  };

  const handleModelSelect = (e) => {
    setModelPath(e.target.value);
  };

  const handleGoBack = () => {
    setSelectedImage(null);
    setModelPath(null);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Virtual Try-On with 3D Model</h2>
      
      <p>Select Background Image:</p>
      <select
        value={selectedImage || ""}
        onChange={handleBackgroundSelect}
        style={{ marginBottom: "20px" }}
      >
        <option value="">Select a background</option>
        {backgroundOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <p>Select 3D Model:</p>
      <select
        value={modelPath || ""}
        onChange={handleModelSelect}
        style={{ marginBottom: "20px" }}
      >
        <option value="">Select a 3D model</option>
        {modelOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div style={{ position: "relative", marginTop: "20px", maxWidth: "90%", margin: "0 auto" }}>
        {selectedImage && modelPath && (
          <div style={{ position: "relative" }}>
            <img
              src={selectedImage}
              alt="Selected Background"
              style={{
                width: "100%",
                maxWidth: "1000px",
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Canvas
                style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
                camera={{ position: [0, 0, 5], fov: 60 }}
              >
                <Suspense fallback={null}>
                  <ambientLight intensity={1} />
                  <directionalLight position={[5, 5, 5]} intensity={1} />
                  <spotLight position={[-5, 5, 10]} intensity={0.8} angle={0.3} penumbra={1} />
                  <OrbitControls enableZoom={true} />
                  <Model modelPath={modelPath} />
                </Suspense>
              </Canvas>
            </div>
          </div>
        )}
      </div>

      {selectedImage && modelPath && (
        <button
          onClick={handleGoBack}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Go Back
        </button>
      )}
    </div>
  );
};

export default TryOnApp;