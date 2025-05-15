"use client"; // Mark this as a Client Component

// Basic placeholder for MatrixRain component
// We will implement the actual canvas logic later

import React, { useRef, useEffect } from 'react';

interface MatrixRainProps {
  className?: string;
  characterSet?: string;
  mainColor?: string;
  fadeColor?: string; // This will be a rgba string for the background fill, e.g., 'rgba(0, 0, 0, 0.05)'
  fontSize?: number;
  rainSpeed?: number; // Not directly used with requestAnimationFrame, but conceptually controls character fall speed via drop increment
}

const MatrixRain: React.FC<MatrixRainProps> = ({
  className,
  characterSet = 'NATHANAVERY', // Expanded character set
  mainColor = '#00FF41',
  fadeColor = 'rgba(0, 0, 0, 0.03)', // Alpha further increased for even shorter trails
  fontSize = 20,
  rainSpeed = 0.05, // rainSpeed further decreased for slower fall
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return; // Ensure parentElement exists

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Size canvas to its parent element (Hero section)
    let canvasWidth = canvas.parentElement.clientWidth;
    let canvasHeight = canvas.parentElement.clientHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    let columns = Math.floor(canvasWidth / fontSize);
    // Each drop now stores its y position and its persistent character
    let drops: Array<{ y: number; char: string }> = [];

    const initializeDrops = () => {
      drops = []; // Clear existing drops
      columns = Math.floor(canvasWidth / fontSize);
      for (let x = 0; x < columns; x++) {
        drops[x] = {
          // Initialize y to start streams at random negative (off-screen top) positions
          // This makes them fall into view. y is a multiplier for fontSize.
          y: Math.random() * (canvasHeight / fontSize) * -1,
          char: characterSet[Math.floor(Math.random() * characterSet.length)]
        };
      }
    };

    initializeDrops();

    const draw = () => {
      ctx.fillStyle = fadeColor;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      ctx.fillStyle = mainColor;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Use the persistent character for this drop
        const text = drops[i].char;
        ctx.fillText(text, i * fontSize, drops[i].y * fontSize);

        // When the drop has fallen off screen
        if (drops[i].y * fontSize > canvasHeight && Math.random() > 0.975) {
          // Reset its y position to the top
          drops[i].y = 0;
          // Give it a new persistent character for the next fall
          drops[i].char = characterSet[Math.floor(Math.random() * characterSet.length)];
        }
        // Increment y position
        drops[i].y += rainSpeed;
      }
    };

    const animate = () => {
      draw();
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      canvasWidth = canvas.parentElement.clientWidth;
      canvasHeight = canvas.parentElement.clientHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      initializeDrops(); // Reinitialize drops with new dimensions and characters
    };

    window.addEventListener('resize', handleResize);
    animate(); // Start the animation

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterSet, mainColor, fadeColor, fontSize, rainSpeed]); // Dependencies for the effect

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute top-0 left-0 w-full h-full z-0 ${className || ''}`}
    />
  );
};

export default MatrixRain; 