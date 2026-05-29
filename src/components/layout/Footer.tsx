import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-[#4A4A3F]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Image
                  src="/LogoNuevo.png"
                  alt="Ambrosia Logo"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Restaurante especializado en menús adaptados según las guías IDDSI, 
              enfocado en la inclusión social de personas con disfagia.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/ambrosia.foodcare" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#E89B5A] transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://wa.me/573214189983" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#E89B5A] transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Disfagia Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#4A4A3F]">Disfagia</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/disfagia/que-es" className="text-gray-600 hover:text-[#E89B5A] transition-colors duration-300 text-sm">
                  ¿Qué es la disfagia?
                </Link>
              </li>
              <li>
                <Link href="/disfagia/sintomas" className="text-gray-600 hover:text-[#E89B5A] transition-colors duration-300 text-sm">
                  Síntomas
                </Link>
              </li>
              <li>
                <Link href="/tratamientos/como-se-trata" className="text-gray-600 hover:text-[#E89B5A] transition-colors duration-300 text-sm">
                  ¿Cómo se trata?
                </Link>
              </li>
              <li>
                <Link href="/tratamientos/desnutricion" className="text-gray-600 hover:text-[#E89B5A] transition-colors duration-300 text-sm">
                  Desnutrición y disfagia
                </Link>
              </li>
              <li>
                <Link href="/tratamientos/adaptacion-texturas" className="text-gray-600 hover:text-[#E89B5A] transition-colors duration-300 text-sm">
                  Adaptación de texturas
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#4A4A3F]">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/videorecetas" className="text-gray-600 hover:text-[#E89B5A] transition-colors duration-300 text-sm">
                  Videorecetas
                </Link>
              </li>
              <li>
                <Link href="/tratamientos/alimentos-riesgo" className="text-gray-600 hover:text-[#E89B5A] transition-colors duration-300 text-sm">
                  Alimentos de Riesgo
                </Link>
              </li>
              <li>
                <Link href="/tratamientos/recomendaciones-posturales" className="text-gray-600 hover:text-[#E89B5A] transition-colors duration-300 text-sm">
                  Recomendaciones Posturales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#4A4A3F]">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <p className="text-gray-600 text-sm">Dirección</p>
                  <p className="text-gray-500 text-xs">Calle Principal 123, Ciudad</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div>
                  <p className="text-gray-600 text-sm">Teléfono</p>
                  <p className="text-gray-500 text-xs">321 418 9983</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div>
                  <p className="text-gray-600 text-sm">Gmail</p>
                  <p className="text-gray-500 text-xs">ambrosiacomeconplacer@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6m-9 8h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <div>
                  <p className="text-gray-600 text-sm">Instagram</p>
                  <p className="text-gray-500 text-xs">@ambrosia.foodcare</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <p className="text-gray-600 text-sm">Horarios</p>
                  <p className="text-gray-500 text-xs">Lun-Vie: 8:00-12:00 y 14:00-18:00</p>
                  <p className="text-gray-500 text-xs">Sáb: 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © 2026 Ambrosia. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6">
              <a href="/docs/Politica_Privacidad_Ambrosia.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#E89B5A] transition-colors duration-300 text-sm">
                Política de Privacidad
              </a>
              <a href="/docs/Terminos_y_Condiciones_Ambrosia.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#E89B5A] transition-colors duration-300 text-sm">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
