import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { Resizable } from "react-resizable";

import "react-resizable/css/styles.css"; // Import Resizable styles

const backgroundOptions = [
  {
    value:
      "/Assets/Rooms/japandi-living-room-interior-design_53876-145502.avif",
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
    value: "/Assets/Models/2d/Modern-Kitchen-PNG-Free-Image.png",
    label: "Modern-Kitchen-PNG",
  },
  {
    value: "/Assets/Models/2d/wardrobe-dark-brown.png",
    label: "wardrobe-dark",
  },
  {
    value: "/Assets/Models/2d/Modern-Kitchen-PNG.png",
    label: "Modern-Kitchen",
  },
  {
    value: "/Assets/Models/2d/Wardrobe-PNG-Transparent-Picture.png",
    label: "Wardrobe",
  },
  // ... more model options
];

const TryOnApp2D = () => {
  const [selectedBackground, setSelectedBackground] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [overlaySize, setOverlaySize] = useState({ width: 150, height: 80 });
  const [isResizing, setIsResizing] = useState(false);

  const nodeRef = useRef(null);

  const handleBackgroundSelect = (e) => {
    console.log("Selected Background:", e.target.value); // Debug line
    setSelectedBackground(e.target.value);
};

const handleModelSelect = (e) => {
    console.log("Selected Model:", e.target.value); // Debug line
    setSelectedModel(e.target.value);
};

  // Handle product resize
  const handleResize = (e, { size }) => {
    setOverlaySize(size);
  };

  // Handle Go Back button click to reset the states and file inputs
  const handleGoBack = () => {
    setSelectedBackground("");
    setSelectedModel("");
    setOverlaySize({ width: 150, height: 80 });
    setIsResizing(false);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Virtual Try-On</h2>

      <p>Background</p>
      <select
        value={selectedBackground}
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

      <p>2D Model</p>
      <select
        value={selectedModel}
        onChange={handleModelSelect}
        style={{ marginBottom: "20px" }}
      >
        <option value="">Select a model</option>
        {modelOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div
        style={{
          position: "relative",
          marginTop: "20px",
          maxWidth: "90%",
          margin: "0 auto",
        }}
      >
        {selectedBackground && selectedModel && (
          <div>
            <img
              src={selectedBackground}
              alt="Selected Background"
              style={{
                width: "100%",
                maxWidth: "1000px",
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
            />

            <Draggable disabled={isResizing} nodeRef={nodeRef}>
              <div ref={nodeRef}>
                <Resizable
                  width={overlaySize.width}
                  height={overlaySize.height}
                  onResize={handleResize}
                  resizeHandles={["se"]}
                  onResizeStart={(e) => {
                    e.stopPropagation();
                    setIsResizing(true);
                  }}
                  onResizeStop={(e) => {
                    e.stopPropagation();
                    setIsResizing(false);
                  }}
                >
                  <div
                    style={{
                      width: overlaySize.width,
                      height: overlaySize.height,
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  >
                    <img
                      src={selectedModel}
                      alt="Selected Model"
                      style={{
                        width: "100%",
                        height: "100%",
                        cursor: isResizing ? "nwse-resize" : "move",
                        opacity: "0.9",
                      }}
                    />
                  </div>
                </Resizable>
              </div>
            </Draggable>
          </div>
        )}
      </div>

      {selectedBackground && selectedModel && (
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

export default TryOnApp2D;
