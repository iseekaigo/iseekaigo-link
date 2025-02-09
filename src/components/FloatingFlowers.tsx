import React from "react";

const FloatingFlowers = () => {
  // Generate 20 flowers with random positions and animations
  const flowers = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 0.5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {flowers.map((flower) => (
        <img
          key={flower.id}
          src="/blossom-festival-flower-2.svg"
          alt="Flower"
          className="absolute animate-float opacity-15"
          style={{
            left: flower.left,
            top: flower.top,
            animationDelay: flower.animationDelay,
            transform: `rotate(${flower.rotation}deg) scale(${flower.scale})`,
            width: "55px",
            height: "55px",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingFlowers;
