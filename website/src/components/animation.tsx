'use client'

import { useRef, useEffect } from 'react'

interface point {
  char: string;
  x: number;
  y: number;
}

export const GridAnimation = () => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 20;
    const grid: point[] = [];
    const half = (size - 1) / 2;

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        grid.push({
          char: "X",
          x: (x - half) / half,
          y: (y - half) / half
        })
      }
    }

    const width = canvas.width / 2;
    const height = canvas.height / 2;

    let frame = 0;

    const render = () => {
      frame++;

      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "12px Monospace";
      ctx.fillStyle = "white";

      for (const point of grid) {

        const rotatedX = point.x * Math.cos(frame * .005 + Math.abs(point.x) + Math.abs(point.y)) - point.y * Math.sin(frame * .005 + Math.abs(point.x) + Math.abs(point.y));
        const rotatedY = point.x * Math.sin(frame * .005 + Math.abs(point.x) + Math.abs(point.y)) + point.y * Math.cos(frame * .005 + Math.abs(point.x) + Math.abs(point.y));

        const offsetPoint = {
          x: rotatedX * (width * 0.5) + width,
          y: rotatedY * (height * 0.5) + height
        };

        ctx.fillText(point.char, Math.round(offsetPoint.x / 10) * 10, Math.round(offsetPoint.y / 10) * 10);
      }

      requestIdRef.current = requestAnimationFrame(render);
    }
    render();

    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, [])

  return <canvas ref={canvasRef} width={600} height={600}/>

}
  