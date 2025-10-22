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
          {/* Disfagia con submenú */}
          <div className="relative group">
            <button 
              className={`font-medium transition-colors duration-300 hover:text-amber-500 flex items-center space-x-1 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <span>Disfagia</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Submenú */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2">
                <Link 
                  href="/disfagia/que-es" 
                  className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                >
                  ¿Qué es?
                </Link>
                <Link 
                  href="/disfagia/sintomas" 
                  className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                >
                  Síntomas
                </Link>
              </div>
            </div>
          </div>
            {/* Tratamientos con submenú */}
            <div className="relative group">
              <button 
                className={`font-medium transition-colors duration-300 hover:text-amber-500 flex items-center space-x-1 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <span>Tratamientos</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Submenú Tratamientos */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link 
                    href="/tratamientos/como-se-trata" 
                    className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                  >
                    ¿Cómo se trata la disfagia?
                  </Link>
                  <Link 
                    href="/tratamientos/desnutricion" 
                    className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                  >
                    Desnutrición y disfagia
                  </Link>
                  <Link 
                    href="/tratamientos/adaptacion-texturas" 
                    className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                  >
                    Adaptación de texturas
                  </Link>
                  <Link 
                    href="/tratamientos/alimentos-riesgo" 
                    className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                  >
                    Alimentos de Riesgo
                  </Link>
                  <Link 
                    href="/tratamientos/recomendaciones-posturales" 
                    className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                  >
                    Recomendaciones Posturales
                  </Link>
                </div>
              </div>
            </div>

            {/* Menús y Recetas con submenú */}
            <div className="relative group">
              <button 
                className={`font-medium transition-colors duration-300 hover:text-amber-500 flex items-center space-x-1 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <span>Menús y Recetas</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Submenú Menús y Recetas */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link 
                    href="/menu" 
                    className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                  >
                    Menús
                  </Link>
                  <Link 
                    href="/recetas" 
                    className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                  >
                    Recetas
                  </Link>
                  <Link 
                    href="/videorecetas" 
                    className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                  >
                    Videorecetas
                  </Link>
                </div>
              </div>
            </div>
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
