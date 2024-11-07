// ModuleSelection.js
import React from 'react';
import { Link } from 'react-router-dom';

const ModuleSelection = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    },
    heading: {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '2rem',
    },
    buttonContainer: {
      display: 'flex',
      gap: '2rem',
    },
    buttonLink: {
      textDecoration: 'none',
    },
    button: {
      padding: '1rem 2rem',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: '#4CAF50',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.1s',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Choose a Module</h1>
      <div style={styles.buttonContainer}>
        <Link to="/2d" style={styles.buttonLink}>
          <button 
            style={styles.button}
            onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
          >
            2D Try-On
          </button>
        </Link>
        <Link to="/3d" style={styles.buttonLink}>
          <button 
            style={styles.button}
            onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
          >
            3D Try-On
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ModuleSelection;