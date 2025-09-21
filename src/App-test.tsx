import React from 'react';

const App = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          🌊 INGRES AI Assistant
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Groundwater Resource Estimation System
        </p>
        <div style={{ 
          background: 'rgba(255,255,255,0.2)', 
          padding: '2rem', 
          borderRadius: '10px',
          backdropFilter: 'blur(10px)'
        }}>
          <h2>✅ App is Working!</h2>
          <p>If you can see this, the React app is rendering correctly.</p>
          <p>Current time: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
