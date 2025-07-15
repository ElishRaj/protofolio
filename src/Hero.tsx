import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import MeImage from "../assets/ME.png";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 text-white relative overflow-hidden">
      {/* Left Content */}
      <div className="max-w-xl md:mr-8 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          Hi, I'm <span className="text-cyan-400">Elish Raj</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 font-medium">
          I'm a{" "}
          <span className="text-cyan-400 font-bold">
            <Typewriter
              words={[
                "Software Engineer",
                "Full Stack Developer",
                "Data Analyst",
                "Android Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h2>
        <p className="mb-8 text-base md:text-lg text-gray-300 leading-relaxed">
          I love building modern software, designing smooth user experiences,
          and turning data into valuable insights. Let's connect and create
          something outstanding!
        </p>
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:scale-110 transition-transform duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:scale-110 transition-transform duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:scale-110 transition-transform duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:scale-110 transition-transform duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Right Image with Clean Animation */}
      <div className="mt-10 md:mt-0 relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10">
        {/* Profile Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={MeImage}
            alt="Elish Raj"
            className="w-[85%] h-[85%] object-cover rounded-full z-20 shadow-xl shadow-cyan-500/20"
            style={{
              clipPath: "circle(50% at 50% 50%)",
              animation: "float 4s ease-in-out infinite"
            }}
          />
          
          {/* Simple Animated Ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[90%] h-[90%] rounded-full border-2 border-cyan-400/30"></div>
            <div 
              className="absolute w-[95%] h-[95%] rounded-full border-t-2 border-cyan-400"
              style={{
                animation: "spin 8s linear infinite",
                boxShadow: "0 0 10px rgba(0, 231, 255, 0.5)"
              }}
            ></div>
          </div>
          
          {/* Subtle Floating Dots */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-400/80"
              style={{
                width: "8px",
                height: "8px",
                left: `${Math.random() * 70 + 15}%`,
                top: `${Math.random() * 70 + 15}%`,
                animation: `pulse 3s ease-in-out infinite ${i * 0.5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.2);
              opacity: 1;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;