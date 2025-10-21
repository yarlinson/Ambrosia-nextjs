'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-amber-500 to-yellow-400'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src="/Logo Ambrosia.png"
                alt="Ambrosia Logo"
                width={240}
                height={180}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/iddsi-guide" 
              className={`font-medium transition-colors duration-300 hover:text-amber-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Tratamientos
            </Link>
            <Link 
              href="/menu" 
              className={`font-medium transition-colors duration-300 hover:text-amber-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Menús y Recetas
            </Link>
            <Link 
              href="/about" 
              className={`font-medium transition-colors duration-300 hover:text-amber-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Consejos
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium transition-colors duration-300 hover:text-amber-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Habla con un experto
            </Link>
            <Link 
              href="/accessibility" 
              className={`font-medium transition-colors duration-300 hover:text-amber-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Nosotros
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors">
            <svg 
              className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
