import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+';
    const fontSize = 14;
    const columns = Math.ceil(window.innerWidth / fontSize);
    const drops = new Array(columns).fill(1);
    
    // Glitch parameters
    let glitchActive = false;
    let glitchTimer = 0;
    let glitchDuration = 0;

    const draw = () => {
      // Semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0'; // Green text
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Randomly brighten some characters
        if (Math.random() > 0.98) {
             ctx.fillStyle = '#ccff00'; // Neon highlight
        } else {
             ctx.fillStyle = '#00ff41'; // Matrix green
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Scanline effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      for (let i = 0; i < canvas.height; i += 4) {
        ctx.fillRect(0, i, canvas.width, 2);
      }

      // Glitch Effect
      if (!glitchActive && Math.random() < 0.01) {
        glitchActive = true;
        glitchDuration = Math.floor(Math.random() * 10) + 5;
      }

      if (glitchActive) {
        glitchTimer++;
        
        const sliceHeight = Math.random() * 50 + 10;
        const sliceY = Math.random() * canvas.height;
        const offset = (Math.random() - 0.5) * 20;

        // Draw a slice of the canvas offset horizontally
        const imageData = ctx.getImageData(0, sliceY, canvas.width, sliceHeight);
        ctx.putImageData(imageData, offset, sliceY);

        // Chromatic aberration for the glitch slice
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
        ctx.fillRect(0, sliceY, canvas.width, sliceHeight);
        ctx.fillStyle = 'rgba(0, 0, 255, 0.1)';
        ctx.fillRect(offset * 2, sliceY, canvas.width, sliceHeight);
        ctx.globalCompositeOperation = 'source-over';

        if (glitchTimer >= glitchDuration) {
          glitchActive = false;
          glitchTimer = 0;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-slate-950">
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-30"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
};

export default InteractiveBackground;
