import React from 'react';

export function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1584 891">
        <g id="GridLines">
          {/* Vertical Lines */}
          {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000, 1040, 1080, 1120, 1160, 1200, 1240, 1280, 1320, 1360, 1400, 1440, 1480, 1520, 1560].map((x, i) => (
             <line key={`v-${i}`} x1={x + 0.5} x2={x + 0.5} y1="0" y2="100%" stroke="var(--stroke-0, #898989)" strokeOpacity="0.08" />
          ))}
          
          {/* Horizontal Lines */}
          {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880].map((y, i) => (
            <line key={`h-${i}`} x1="0" x2="100%" y1={y + 0.5} y2={y + 0.5} stroke="var(--stroke-0, #898989)" strokeOpacity="0.08" />
          ))}

          {/* Purple Accent Lines (Sparse) */}
          <line x1="40.5" x2="40.5" y1="0" y2="100%" stroke="#5D3A7F" strokeOpacity="0.05" />
          <line x1="0" x2="100%" y1="40.5" y2="40.5" stroke="#5D3A7F" strokeOpacity="0.05" />
          <line x1="0" x2="100%" y1="440.5" y2="440.5" stroke="#5D3A7F" strokeOpacity="0.05" />
        </g>
      </svg>
    </div>
  );
}
