'use client';

import { useEffect, useRef } from 'react';

export default function FallingPetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Petal & Sparkle Particle Class
    class Petal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      angle: number;
      spin: number;
      color: string;
      alpha: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * -height;
        this.size = Math.random() * 5 + 3;
        this.speedY = Math.random() * 1.2 + 0.5;
        this.speedX = Math.sin(Math.random() * Math.PI) * 0.5;
        this.angle = Math.random() * 360;
        this.spin = (Math.random() - 0.5) * 0.02;
        
        // Royal Rose Pink & Soft Gold Tones
        const colors = ['#D4AF37', '#E9C46A', '#E8B4B8', '#F3D98D', '#F8E1E7'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.7 + 0.3;
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y * 0.01) + this.speedX;
        this.angle += this.spin;

        if (this.y > height) {
          this.y = -20;
          this.x = Math.random() * width;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.globalAlpha = this.alpha;
        context.fillStyle = this.color;
        
        // Draw Soft Petal / Sparkle Oval
        context.beginPath();
        context.ellipse(0, 0, this.size, this.size * 1.8, Math.PI / 4, 0, 2 * Math.PI);
        context.fill();
        context.restore();
      }
    }

    const petalsCount = 35;
    const petals: Petal[] = Array.from({ length: petalsCount }, () => new Petal());

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}