'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

const planes = [
  { value: 'mensual', nombre: 'Plan Mensual', precio: '$4.227.200' },
  { value: 'trimestral', nombre: 'Plan Trimestral', precio: '$6.340.800' },
];

const bancos = [
  'Bancolombia', 'Davivienda', 'Banco de Bogotá', 'Banco Popular',
  'Banco de Occidente', 'BBVA Colombia', 'Nequi', 'DaviPlata',
];

export default function MetodoPagoPage() {
  const { user, loading, isAuthenticated } = useAuth();
  const router = useRouter();
  const [metodoSeleccionado, setMetodoSeleccionado] = useState<string | null>(null);
  const [bancoPse, setBancoPse] = useState('');
  const [isPaying, setIsPaying] = useState(false);
  const [pagoExitoso, setPagoExitoso] = useState(false);
  const [pagoRealizado, setPagoRealizado] = useState(false);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [loading, isAuthenticated, router]);

  useEffect(() => {
    const saved = localStorage.getItem(`pago_${user?.id}`);
    if (saved === 'true') {
      setPagoRealizado(true);
    }
  }, [user]);

  const planInfo = planes.find((p) => p.value === user?.planSeleccionado);

  const handlePagar = () => {
    if (!metodoSeleccionado) return;
    if (metodoSeleccionado === 'pse' && !bancoPse) return;
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      setPagoExitoso(true);
      if (user?.id) {
        localStorage.setItem(`pago_${user.id}`, 'true');
      }
      setTimeout(() => setPagoRealizado(true), 500);
    }, 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#E89B5A] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3]">
      <section className="py-16 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-sm text-[#6B6B5B]">
            <Link href="/" className="hover:text-[#E89B5A] transition-colors">Inicio</Link>
            <span className="mx-2">»</span>
            <Link href="/perfil" className="hover:text-[#E89B5A] transition-colors">Mi Perfil</Link>
            <span className="mx-2">»</span>
            <span className="text-[#4A4A3F] font-medium">Método de Pago</span>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A4A3F] mb-4">
              Método de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E89B5A] to-[#D97757]">
                Pago
              </span>
            </h1>
            <p className="text-lg text-[#6B6B5B]">Completa el pago para activar tu plan</p>
          </div>

          {pagoRealizado ? (
            <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#4A4A3F] mb-2">¡Plan Activo!</h2>
              <div className="inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm mb-6">
                {planInfo ? `${planInfo.nombre} - ${planInfo.precio}` : 'Plan activo'}
              </div>
              <p className="text-[#6B6B5B] mb-8">Ya tienes acceso a todos los beneficios de tu plan.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/perfil" className="px-8 py-3 bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                  Ir a Mi Perfil
                </Link>
                <Link href="/planes" className="px-8 py-3 border-2 border-[#E89B5A] text-[#E89B5A] rounded-xl font-semibold hover:bg-[#FAF8F3] transition-all">
                  Ver Planes
                </Link>
              </div>
            </div>
          ) : !planInfo ? (
            <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
              <div className="w-20 h-20 bg-[#FAF8F3] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#E89B5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#4A4A3F] mb-4">No tienes un plan seleccionado</h2>
              <p className="text-[#6B6B5B] mb-8">Selecciona un plan para poder continuar con el pago.</p>
              <Link href="/planes" className="inline-block px-8 py-3 bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                Ver Planes Disponibles
              </Link>
            </div>
          ) : pagoExitoso ? (
            <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#4A4A3F] mb-2">¡Pago exitoso!</h2>
              <p className="text-[#6B6B5B] mb-2">Tu {planInfo.nombre} ha sido activado.</p>
              <p className="text-sm text-[#6B6B5B] mb-8">Recibirás una confirmación en tu correo.</p>
              <div className="w-full bg-gray-200 rounded-full h-2 max-w-xs mx-auto">
                <div className="bg-green-500 h-2 rounded-full w-full animate-pulse"></div>
              </div>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 mb-6">
                <h2 className="text-2xl font-bold text-[#4A4A3F] mb-2">Resumen del Plan</h2>
                <div className="flex items-center justify-between p-4 bg-[#FAF8F3] rounded-xl mt-4">
                  <div>
                    <p className="font-semibold text-[#4A4A3F]">{planInfo.nombre}</p>
                    <p className="text-sm text-[#6B6B5B]">Nivel IDDSI: {user.nivelIddsi ? `Nivel ${user.nivelIddsi}` : 'No especificado'}</p>
                  </div>
                  <p className="text-2xl font-bold text-[#E89B5A]">{planInfo.precio}</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-[#4A4A3F] mb-6">Selecciona tu método de pago</h2>

                <div className="space-y-4">
                  <button
                    onClick={() => setMetodoSeleccionado(metodoSeleccionado === 'tarjeta' ? null : 'tarjeta')}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                      metodoSeleccionado === 'tarjeta' ? 'border-[#E89B5A] bg-[#FAF8F3]' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xl">💳</span>
                        </div>
                        <div>
                          <p className="font-semibold text-[#4A4A3F]">Tarjeta crédito / débito</p>
                          <p className="text-sm text-[#6B6B5B]">Visa, Mastercard, American Express</p>
                        </div>
                      </div>
                      <svg className={`w-5 h-5 text-[#E89B5A] transition-transform ${metodoSeleccionado === 'tarjeta' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {metodoSeleccionado === 'tarjeta' && (
                    <div className="p-6 bg-gray-50 rounded-xl space-y-4 ml-4">
                      <input type="text" placeholder="Número de tarjeta" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] outline-none text-[#4A4A3F]" />
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="MM/AA" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] outline-none text-[#4A4A3F]" />
                        <input type="text" placeholder="CVV" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] outline-none text-[#4A4A3F]" />
                      </div>
                      <input type="text" placeholder="Nombre del titular" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] outline-none text-[#4A4A3F]" />
                    </div>
                  )}

                  <button
                    onClick={() => setMetodoSeleccionado(metodoSeleccionado === 'pse' ? null : 'pse')}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                      metodoSeleccionado === 'pse' ? 'border-[#E89B5A] bg-[#FAF8F3]' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xl">🏦</span>
                        </div>
                        <div>
                          <p className="font-semibold text-[#4A4A3F]">PSE</p>
                          <p className="text-sm text-[#6B6B5B]">Pagos seguros en línea</p>
                        </div>
                      </div>
                      <svg className={`w-5 h-5 text-[#E89B5A] transition-transform ${metodoSeleccionado === 'pse' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {metodoSeleccionado === 'pse' && (
                    <div className="p-6 bg-gray-50 rounded-xl ml-4">
                      <label className="block text-sm font-semibold text-[#4A4A3F] mb-3">Selecciona tu banco</label>
                      <div className="grid grid-cols-2 gap-3">
                        {bancos.map((banco) => (
                          <button
                            key={banco}
                            onClick={() => setBancoPse(banco)}
                            className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                              bancoPse === banco ? 'border-[#E89B5A] bg-[#FAF8F3] text-[#E89B5A]' : 'border-gray-200 text-[#4A4A3F] hover:border-gray-300'
                            }`}
                          >
                            {banco}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setMetodoSeleccionado(metodoSeleccionado === 'nequi' ? null : 'nequi')}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                      metodoSeleccionado === 'nequi' ? 'border-[#E89B5A] bg-[#FAF8F3]' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xl">📱</span>
                        </div>
                        <div>
                          <p className="font-semibold text-[#4A4A3F]">Nequi</p>
                          <p className="text-sm text-[#6B6B5B]">Paga desde tu app Nequi</p>
                        </div>
                      </div>
                      <svg className={`w-5 h-5 text-[#E89B5A] transition-transform ${metodoSeleccionado === 'nequi' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {metodoSeleccionado === 'nequi' && (
                    <div className="p-6 bg-gray-50 rounded-xl ml-4 text-center">
                      <p className="text-sm font-semibold text-[#4A4A3F] mb-2">Transfiere a:</p>
                      <p className="text-2xl font-bold text-[#E89B5A] mb-2">321 418 9983</p>
                      <p className="text-sm text-[#6B6B5B]">Ambrosia SAS - Nequi</p>
                      <div className="mt-4 inline-block bg-white p-4 rounded-xl border border-gray-200">
                        <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                          <span className="text-3xl">📲</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setMetodoSeleccionado(metodoSeleccionado === 'paypal' ? null : 'paypal')}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                      metodoSeleccionado === 'paypal' ? 'border-[#E89B5A] bg-[#FAF8F3]' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">P</span>
                        </div>
                        <div>
                          <p className="font-semibold text-[#4A4A3F]">PayPal</p>
                          <p className="text-sm text-[#6B6B5B]">Paga con tu cuenta de PayPal</p>
                        </div>
                      </div>
                      <svg className={`w-5 h-5 text-[#E89B5A] transition-transform ${metodoSeleccionado === 'paypal' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {metodoSeleccionado === 'paypal' && (
                    <div className="p-6 bg-gray-50 rounded-xl ml-4 text-center">
                      <p className="text-sm text-[#6B6B5B] mb-4">Serás redirigido a PayPal para completar el pago de forma segura.</p>
                      <button className="w-full py-3 bg-[#0070BA] text-white rounded-xl font-semibold hover:bg-[#005EA6] transition-colors">
                        Pagar con PayPal
                      </button>
                    </div>
                  )}
                </div>

                <div className="mt-8 space-y-3">
                  {metodoSeleccionado && (
                    <button
                      onClick={handlePagar}
                      disabled={isPaying || (metodoSeleccionado === 'pse' && !bancoPse)}
                      className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                        isPaying || (metodoSeleccionado === 'pse' && !bancoPse)
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white hover:shadow-xl hover:scale-[1.02]'
                      }`}
                    >
                      {isPaying ? 'Procesando pago...' : `Pagar ${planInfo.precio}`}
                    </button>
                  )}

                  {metodoSeleccionado === 'pse' && !bancoPse && (
                    <p className="text-sm text-red-500 text-center">Selecciona un banco para continuar</p>
                  )}
                </div>

                <p className="text-xs text-[#6B6B5B] text-center mt-6">
                  Tus datos están protegidos. Usamos conexión segura para procesar tu pago.
                </p>
              </div>

              {isPaying && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-3xl p-10 text-center shadow-2xl max-w-sm mx-4">
                    <div className="w-20 h-20 border-4 border-[#E89B5A] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                    <h3 className="text-xl font-bold text-[#4A4A3F] mb-2">Procesando pago</h3>
                    <p className="text-[#6B6B5B]">Por favor espera, no cierres esta ventana...</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
