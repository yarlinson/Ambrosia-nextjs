'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function PerfilPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [pagoRealizado, setPagoRealizado] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    const saved = localStorage.getItem(`pago_${user?.id}`);
    if (saved === 'true') {
      setPagoRealizado(true);
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout();
  };

  const handleCancelMembership = () => {
    if (user?.id) {
      localStorage.removeItem(`pago_${user.id}`);
      setPagoRealizado(false);
      setShowCancelModal(false);
    }
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
                      ? 'Plan Mensual - $4.227.200'
                      : user.planSeleccionado === 'trimestral'
                        ? 'Plan Trimestral - $6.340.800'
                        : user.planSeleccionado
                    : 'No seleccionado'}
                </div>
              </div>
            </div>
          </div>

          {/* Método de Pago */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  pagoRealizado ? 'bg-green-100' : 'bg-[#FAF8F3]'
                }`}>
                  <svg className={`w-7 h-7 ${pagoRealizado ? 'text-green-600' : 'text-[#E89B5A]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#4A4A3F]">Método de Pago</h2>
                  <p className="text-[#6B6B5B]">
                    {pagoRealizado
                      ? 'Tu plan está activo y al día'
                      : 'Completa el pago para activar tu plan'}
                  </p>
                </div>
              </div>
              <div className="text-right">
                {pagoRealizado ? (
                  <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Plan Activo
                  </span>
                ) : (
                  <Link href="/metodo-pago" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm">
                    Pagar ahora
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
            {pagoRealizado && user.planSeleccionado && (
              <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-sm text-green-700">
                  <strong>Plan activo:</strong>{' '}
                  {user.planSeleccionado === 'mensual' ? 'Plan Mensual - $4.227.200' : 'Plan Trimestral - $6.340.800'}
                </p>
              </div>
            )}
            {pagoRealizado && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setShowCancelModal(true)}
                  className="text-sm text-red-500 hover:text-red-600 hover:underline transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cancelar membresía
                </button>
              </div>
            )}
          </div>

          {showCancelModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-sm mx-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F] mb-2">Cancelar membresía</h3>
                <p className="text-[#6B6B5B] text-sm mb-8">
                  ¿Estás seguro? Perderás acceso a los beneficios de tu plan. Esta acción no se puede deshacer.
                </p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleCancelMembership}
                    className="w-full py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-all"
                  >
                    Sí, cancelar membresía
                  </button>
                  <button
                    onClick={() => setShowCancelModal(false)}
                    className="w-full py-3 border-2 border-gray-200 text-[#4A4A3F] rounded-xl font-semibold hover:bg-gray-50 transition-all"
                  >
                    Mantener membresía
                  </button>
                </div>
              </div>
            </div>
          )}

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

