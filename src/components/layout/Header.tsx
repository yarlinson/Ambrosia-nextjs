'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };

    if (isProfileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileMenuOpen]);

  const handleLogout = async () => {
    await logout();
    setIsProfileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F3]/95 backdrop-blur-md shadow-lg' 
          : 'bg-[#FAF8F3] shadow-md'
      }`}
    >
      <div className="w-full mx-auto px-3 sm:px-5 lg:px-8 h-24 py-2">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center z-10 h-full flex-shrink-0">
            <div className="relative h-full flex items-center max-w-[180px]">
              <Image
                src="/LogoNuevo.png"
                alt="Ambrosia Logo"
                width={180}
                height={72}
                className="object-contain h-full w-auto"
                priority
              />
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-4 text-lg flex-shrink-0">
          {/* Disfagia con submenú */}
          <div className="relative group">
            <button 
              className={`font-semibold text-lg transition-colors duration-300 hover:text-[#E89B5A] flex items-center space-x-2 ${
                'text-[#4A4A3F]'
              }`}
            >
              <span>Disfagia</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Submenú */}
            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <Link 
                  href="/disfagia/que-es" 
                  className="block px-3 py-2 text-sm text-[#4A4A3F] hover:bg-[#FAF8F3] hover:text-[#E89B5A] transition-colors duration-200"
                >
                  ¿Qué es?
                </Link>
                <Link 
                  href="/disfagia/sintomas" 
                  className="block px-3 py-2 text-sm text-[#4A4A3F] hover:bg-[#FAF8F3] hover:text-[#E89B5A] transition-colors duration-200"
                >
                  Síntomas
                </Link>
              </div>
            </div>
          </div>
            {/* Tratamientos con submenú */}
            <div className="relative group">
              <button 
                className={`font-semibold text-lg transition-colors duration-300 hover:text-[#E89B5A] flex items-center space-x-2 text-[#4A4A3F]`}
              >
                <span>Tratamientos</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Submenú Tratamientos */}
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link 
                    href="/tratamientos/como-se-trata" 
                    className="block px-3 py-2 text-sm text-[#4A4A3F] hover:bg-[#FAF8F3] hover:text-[#E89B5A] transition-colors duration-200"
                  >
                    ¿Cómo se trata la disfagia?
                  </Link>
                  <Link 
                    href="/tratamientos/desnutricion" 
                    className="block px-3 py-2 text-sm text-[#4A4A3F] hover:bg-[#FAF8F3] hover:text-[#E89B5A] transition-colors duration-200"
                  >
                    Desnutrición y disfagia
                  </Link>
                  <Link 
                    href="/tratamientos/adaptacion-texturas" 
                    className="block px-3 py-2 text-sm text-[#4A4A3F] hover:bg-[#FAF8F3] hover:text-[#E89B5A] transition-colors duration-200"
                  >
                    Adaptación de texturas
                  </Link>
                  <Link 
                    href="/tratamientos/alimentos-riesgo" 
                    className="block px-3 py-2 text-sm text-[#4A4A3F] hover:bg-[#FAF8F3] hover:text-[#E89B5A] transition-colors duration-200"
                  >
                    Alimentos de Riesgo
                  </Link>
                  <Link 
                    href="/tratamientos/recomendaciones-posturales" 
                    className="block px-3 py-2 text-sm text-[#4A4A3F] hover:bg-[#FAF8F3] hover:text-[#E89B5A] transition-colors duration-200"
                  >
                    Recomendaciones Posturales
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              href="/planes"
              className={`font-semibold text-lg transition-colors duration-300 hover:text-[#E89B5A] text-[#4A4A3F]`}
            >
              Planes
            </Link>
            <Link 
              href="/anexos" 
              className={`font-semibold text-lg transition-colors duration-300 hover:text-[#E89B5A] text-[#4A4A3F]`}
            >
              Anexos
            </Link>
            <Link 
              href="/contact" 
              className={`font-semibold text-lg transition-colors duration-300 hover:text-[#E89B5A] text-[#4A4A3F]`}
            >
              Contacto
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3 ml-4">
            {isAuthenticated ? (
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold text-sm bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Mi Perfil</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isProfileMenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                    <div className="p-4 border-b border-gray-100">
                      <p className="text-sm font-semibold text-[#4A4A3F] truncate">
                        {user?.nombreCompleto || 'Usuario'}
                      </p>
                      <p className="text-xs text-[#6B6B5B] truncate">
                        {user?.email}
                      </p>
                    </div>
                    <div className="py-1">
                      <Link
                        href="/perfil"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-sm text-[#4A4A3F] hover:bg-[#FAF8F3] transition-colors"
                      >
                        <svg className="w-5 h-5 text-[#E89B5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>Ver Perfil</span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span>Cerrar Sesión</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg font-semibold text-sm bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white hover:shadow-lg transition-all duration-300"
              >
                Iniciar Sesión
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-md hover:bg-gray-200/50 transition-colors">
            <svg 
              className={`w-6 h-6 transition-colors duration-300 text-[#4A4A3F]`} 
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
