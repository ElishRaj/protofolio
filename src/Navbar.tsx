import { useEffect, useState } from 'react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Mount animation
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop Only Navbar */}
      <header
        className={`
          hidden md:flex fixed top-2 left-1/2 transform -translate-x-1/2 w-[98%] max-w-screen-xl z-50
          px-6 py-4 border border-white/10 rounded-2xl backdrop-blur-2xl
          bg-white/5 text-white items-center justify-between
          transition-all duration-400 ease-[cubic-bezier(0.45,0,0.55,1)]
          shadow-[0_0_20px_rgba(255,255,255,0.1)]
          ${mounted && visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95'}
        `}
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-wide font-sans hover:text-purple-400 transition">
            Elisha Raj
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-10 text-2xl font-semibold">
          {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-gray-300 hover:text-purple-400 transition duration-200 relative group"
            >
              <span className="relative z-10">{label}</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
