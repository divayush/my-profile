import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ModernBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    let animationId: number;
    let time = 0;

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Create flowing lines
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${270 + i * 50}, 100%, 70%, 0.3)`;
        ctx.lineWidth = 2;
        
        const offset = i * Math.PI * 0.5;
        for (let x = 0; x < canvas.width; x += 10) {
          const y = canvas.height * 0.5 + Math.sin((x * 0.005) + time + offset) * 100;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Floating orbs
      for (let i = 0; i < 5; i++) {
        const x = (canvas.width * 0.2) + (i * canvas.width * 0.15) + Math.sin(time + i) * 50;
        const y = (canvas.height * 0.3) + Math.cos(time * 0.7 + i) * 80;
        const radius = 30 + Math.sin(time * 2 + i) * 10;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `hsla(${270 + i * 30}, 100%, 70%, 0.6)`);
        gradient.addColorStop(1, `hsla(${270 + i * 30}, 100%, 70%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-60" 
           style={{ animation: "mesh-shift 20s ease-in-out infinite" }} />
      
      {/* Canvas for dynamic elements */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ mixBlendMode: "screen" }}
      />
      
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border border-purple-500/30 rotate-45"
        animate={{ rotate: [45, 405], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-32 right-32 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full"
        animate={{ 
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute top-1/3 right-20 w-12 h-12 border-2 border-cyan-500/40 rounded-full"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="floating-shape"
          style={{
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 6 + 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}