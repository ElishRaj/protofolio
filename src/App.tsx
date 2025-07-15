import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ContactForm from './Contact';
import ProjectsSection from './ProjectsSection';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[300vh] text-white overflow-hidden">
      {/* Static background with grid pattern */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0d0b21] via-[#16163a] to-[#1c1f47]">
        {/* Original white grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48cGF0aCBkPSJNIDAgMCBMIDAgNTAgTCA1MCA1MCBMIDUwIDAgTCAwIDAgTSA1MCA1MCBMIDAgNTAgTCAwIDAgTCA1MCAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgLz48L3N2Zz4=')]"></div>
        
        {/* More intense pink grid highlight at cursor position */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.7) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(236, 72, 153, 0.7) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: `radial-gradient(
              circle at ${cursorPos.x}px ${cursorPos.y}px, 
              black 0%, 
              transparent 120px
            )`,
            WebkitMaskImage: `radial-gradient(
              circle at ${cursorPos.x}px ${cursorPos.y}px, 
              black 0%, 
              transparent 120px
            )`
          }}
        ></div>
        
        {/* Floating glow effects */}
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl"
          style={{ animation: "float-slow 8s ease-in-out infinite" }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl"
          style={{ animation: "float-slower 10s ease-in-out infinite" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ContactForm />
        <ProjectsSection/>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes float-slower {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }
        `}
      </style>
    </div>
  );
}

export default App;
