'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function PerfilPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#E89B5A] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#6B6B5B]">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3]">
      <section className="py-16 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-[#6B6B5B]">
            <Link href="/" className="hover:text-[#E89B5A] transition-colors">
              Inicio
            </Link>{' '}
            <span className="mx-2">»</span>
            <span className="text-[#4A4A3F] font-medium">Mi Perfil</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-br from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl font-bold text-white">
                {user.nombreCompleto
                  ? user.nombreCompleto
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()
                      .slice(0, 2)
                  : user.email[0].toUpperCase()}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A4A3F] mb-2">
              Mi Perfil
            </h1>
            <p className="text-lg text-[#6B6B5B]">
              Gestiona tu información personal y preferencias
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 mb-6">
            <h2 className="text-2xl font-bold text-[#4A4A3F] mb-6">Información Personal</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Nombre Completo */}
              <div>
                <label className="block text-sm font-semibold text-[#6B6B5B] mb-2">
                  Nombre Completo
                </label>
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-[#4A4A3F]">
                  {user.nombreCompleto || 'No especificado'}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#6B6B5B] mb-2">
                  Correo Electrónico
                </label>
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-[#4A4A3F] break-all">
                  {user.email}
                </div>
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-semibold text-[#6B6B5B] mb-2">
                  Teléfono
                </label>
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-[#4A4A3F]">
                  {user.telefono || 'No especificado'}
                </div>
              </div>

              {/* ID de Usuario */}
              <div>
                <label className="block text-sm font-semibold text-[#6B6B5B] mb-2">
                  ID de Usuario
                </label>
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-[#4A4A3F] text-xs font-mono break-all">
                  {user.id}
                </div>
              </div>

              {/* Condición del Paciente */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#6B6B5B] mb-2">
                  Condición del Paciente
                </label>
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-[#4A4A3F] min-h-[60px]">
                  {user.condicionPaciente || 'No especificado'}
                </div>
              </div>

              {/* Nivel IDDSI */}
              <div>
                <label className="block text-sm font-semibold text-[#6B6B5B] mb-2">
                  Nivel IDDSI
                </label>
                <div className="px-4 py-3 bg-gradient-to-r from-[#E89B5A]/10 to-[#D97757]/10 rounded-xl text-[#4A4A3F] font-semibold">
                  {user.nivelIddsi ? `Nivel ${user.nivelIddsi}` : 'No especificado'}
                </div>
              </div>

              {/* Plan Seleccionado */}
              <div>
                <label className="block text-sm font-semibold text-[#6B6B5B] mb-2">
                  Plan Seleccionado
                </label>
                <div className="px-4 py-3 bg-gradient-to-r from-[#E89B5A]/10 to-[#D97757]/10 rounded-xl text-[#4A4A3F] font-semibold capitalize">
                  {user.planSeleccionado
                    ? user.planSeleccionado === 'mensual'
                      ? 'Plan Mensual - $4.000.000'
                      : user.planSeleccionado === 'trimestral'
                        ? 'Plan Trimestral - $6.000.000'
                        : user.planSeleccionado
                    : 'No seleccionado'}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/planes"
              className="flex-1 py-4 rounded-xl font-semibold text-center bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              Ver Planes
            </Link>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className={`flex-1 py-4 rounded-xl font-semibold border-2 border-[#E89B5A] text-[#E89B5A] hover:bg-[#E89B5A] hover:text-white transition-all duration-300 ${
                isLoggingOut ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoggingOut ? 'Cerrando sesión...' : 'Cerrar Sesión'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

