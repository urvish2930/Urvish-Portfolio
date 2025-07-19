import React from 'react';

const CursorGlow = ({ mousePosition }) => {
  return (
    <div
      className="fixed pointer-events-none z-50 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transition-all duration-300"
      style={{
        left: mousePosition.x - 192,
        top: mousePosition.y - 192,
      }}
    />
  );
};

export default CursorGlow;