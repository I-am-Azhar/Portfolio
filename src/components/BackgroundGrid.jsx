import React from 'react';

const BackgroundGrid = ({ className = "absolute inset-0 z-0 pointer-events-none" }) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `
          linear-gradient(to right, #e7e5e4 1px, transparent 1px),
          linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 0",
        maskImage: `
             repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)
      `,
        WebkitMaskImage: `
       repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)
      `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
};

export default BackgroundGrid;
