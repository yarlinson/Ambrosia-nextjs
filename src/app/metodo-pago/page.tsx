'use client';

import { useEffect, useState, useCallback, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

type PaymentMethodId = 'card' | 'pse' | 'paypal' | 'addi';

interface PaymentData {
  method: PaymentMethodId | null;
  card?: { number: string; expiry: string; cvc: string; name: string };
  pse?: { bank: string };
  addi?: { documentId: string; fullName: string; installments: number };
}

interface PaymentMethod {
  id: PaymentMethodId;
  name: string;
  description: string;
  gradient: string;
  icon: ReactNode;
}

const planes = [
  { value: 'mensual', nombre: 'Plan Mensual', precio: '$4.227.200' },
  { value: 'trimestral', nombre: 'Plan Trimestral', precio: '$6.340.800' },
];

const bancos = [
  'Bancolombia', 'Davivienda', 'Banco de Bogotá', 'Banco Popular',
  'Banco de Occidente', 'BBVA Colombia', 'DaviPlata',
];

const paymentMethods: PaymentMethod[] = [
  {
    id: 'card',
    name: 'Tarjeta crédito / débito',
    description: 'Visa, Mastercard, American Express',
    gradient: 'from-blue-500 to-blue-600',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    id: 'pse',
    name: 'PSE',
    description: 'Pago desde tu banco',
    gradient: 'from-emerald-500 to-emerald-600',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Paga con tu cuenta de PayPal',
    gradient: 'from-blue-700 to-blue-800',
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
      </svg>
    ),
  },
  {
    id: 'addi',
    name: 'Addi',
    description: 'Crédito en cuotas sin tarjeta',
    gradient: 'from-purple-500 to-purple-700',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const detectCardType = (number: string): string => {
  const cleaned = number.replace(/\D/g, '');
  if (/^4/.test(cleaned)) return 'Visa';
  if (/^5[1-5]/.test(cleaned)) return 'Mastercard';
  if (/^3[47]/.test(cleaned)) return 'American Express';
  if (/^6(?:011|5)/.test(cleaned)) return 'Discover';
  return '';
};

const formatCardNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, '').slice(0, 16);
  return cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
};

const formatExpiry = (value: string): string => {
  const cleaned = value.replace(/\D/g, '').slice(0, 4);
  if (cleaned.length > 2) return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
  return cleaned;
};

export default function MetodoPagoPage() {
  const { user, loading, isAuthenticated } = useAuth();
  const router = useRouter();
  const [paymentData, setPaymentData] = useState<PaymentData>({ method: null });
  const [bancoPse, setBancoPse] = useState('');
  const [isPaying, setIsPaying] = useState(false);
  const [pagoExitoso, setPagoExitoso] = useState(false);
  const [pagoRealizado, setPagoRealizado] = useState(false);

  useEffect(() => {
    if (!loading && !isAuthenticated) router.push('/login');
  }, [loading, isAuthenticated, router]);

  useEffect(() => {
    const saved = localStorage.getItem(`pago_${user?.id}`);
    if (saved === 'true') setPagoRealizado(true);
  }, [user]);

  const planInfo = planes.find((p) => p.value === user?.planSeleccionado);

  const handleSelectMethod = useCallback((id: PaymentMethodId) => {
    setPaymentData((prev) => {
      if (prev.method === id) return { ...prev, method: null };
      return { method: id };
    });
    setBancoPse('');
  }, []);

  /*
   * TODO: Real payment gateway integration
   * Replace this function with actual API calls to your payment provider.
   * The paymentData object contains all form data needed.
   */
  const handlePagar = useCallback(async () => {
    if (!paymentData.method) return;
    if (paymentData.method === 'pse' && !bancoPse) return;
    if (paymentData.method === 'addi' && (!paymentData.addi?.documentId || !paymentData.addi?.fullName || !paymentData.addi?.installments)) return;

    setIsPaying(true);

    // Build payload for future API integration
    const payload = {
      method: paymentData.method,
      plan: user?.planSeleccionado,
      userId: user?.id,
      email: user?.email,
      ...(paymentData.method === 'card' && { card: paymentData.card }),
      ...(paymentData.method === 'pse' && { bank: bancoPse }),
      ...(paymentData.method === 'paypal' && {}),
      ...(paymentData.method === 'addi' && { addi: paymentData.addi }),
    };

    // TODO: POST to /api/pagos or your payment gateway
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsPaying(false);
    setPagoExitoso(true);
    if (user?.id) localStorage.setItem(`pago_${user.id}`, 'true');
    setTimeout(() => setPagoRealizado(true), 800);
  }, [paymentData, bancoPse, user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3] flex items-center justify-center">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-[#E89B5A]/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-[#E89B5A] rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3]">
      <section className="py-16 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-sm text-[#6B6B5B]">
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
            <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
              <div className="relative w-28 h-28 mx-auto mb-8">
                <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-25"></div>
                <div className="relative w-28 h-28 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-14 h-14 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-[#4A4A3F] mb-3">¡Plan Activo!</h2>
              <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full font-semibold text-sm border border-green-200 mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                {planInfo ? `${planInfo.nombre} - ${planInfo.precio}` : 'Plan activo'}
              </div>
              <p className="text-[#6B6B5B] mb-10 max-w-md mx-auto">
                Ya tienes acceso a todos los beneficios de tu plan. Disfruta de nuestros servicios especializados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/perfil" className="px-10 py-3.5 bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#E89B5A]/30 transition-all">
                  Ir a Mi Perfil
                </Link>
                <Link href="/planes" className="px-10 py-3.5 border-2 border-[#E89B5A] text-[#E89B5A] rounded-xl font-semibold hover:bg-[#FAF8F3] transition-all">
                  Ver Planes
                </Link>
                <button
                  onClick={() => {
                    if (user?.id) localStorage.removeItem(`pago_${user.id}`);
                    window.location.reload();
                  }}
                  className="px-10 py-3.5 border-2 border-red-200 text-red-500 rounded-xl font-semibold hover:bg-red-50 transition-all text-sm"
                >
                  Cancelar membresía
                </button>
              </div>
            </div>
          ) : !planInfo ? (
            <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
              <div className="w-20 h-20 bg-[#FAF8F3] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#E89B5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#4A4A3F] mb-4">No tienes un plan seleccionado</h2>
              <p className="text-[#6B6B5B] mb-8 max-w-sm mx-auto">
                Selecciona un plan para poder continuar con el pago y acceder a todos nuestros beneficios.
              </p>
              <Link href="/planes" className="inline-block px-10 py-3.5 bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#E89B5A]/30 transition-all">
                Ver Planes Disponibles
              </Link>
            </div>
          ) : pagoExitoso ? (
            <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
              <div className="relative w-28 h-28 mx-auto mb-8">
                <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-25"></div>
                <div className="relative w-28 h-28 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-14 h-14 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-[#4A4A3F] mb-3">¡Pago exitoso!</h2>
              <p className="text-[#6B6B5B] mb-2">Tu <strong>{planInfo.nombre}</strong> ha sido activado.</p>
              <p className="text-sm text-[#6B6B5B] mb-8">Recibirás una confirmación en tu correo electrónico.</p>
              <div className="w-full bg-gray-100 rounded-full h-2 max-w-xs mx-auto overflow-hidden">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full w-full animate-pulse"></div>
              </div>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#E89B5A]/20 to-[#D97757]/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#E89B5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[#6B6B5B]">Plan seleccionado</p>
                      <p className="text-lg font-bold text-[#4A4A3F]">{planInfo.nombre}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#6B6B5B]">Total a pagar</p>
                    <p className="text-2xl font-bold text-[#E89B5A]">{planInfo.precio}</p>
                  </div>
                </div>
                {user.nivelIddsi && (
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-sm text-[#6B6B5B]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Nivel IDDSI: <span className="font-semibold text-[#4A4A3F]">Nivel {user.nivelIddsi}</span>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
                <h2 className="text-xl font-bold text-[#4A4A3F] mb-8">
                  Selecciona tu método de pago
                </h2>

                <div className="space-y-4">
                  {paymentMethods.map((method) => {
                    const isSelected = paymentData.method === method.id;
                    return (
                      <div key={method.id}>
                        <button
                          type="button"
                          onClick={() => handleSelectMethod(method.id)}
                          className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                            isSelected
                              ? 'border-[#E89B5A] bg-[#FAF8F3] shadow-sm'
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center shrink-0 shadow-sm`}>
                              {method.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-[#4A4A3F]">{method.name}</p>
                              <p className="text-sm text-[#6B6B5B]">{method.description}</p>
                            </div>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                              isSelected ? 'border-[#E89B5A] bg-[#E89B5A]' : 'border-gray-300'
                            }`}>
                              {isSelected && (
                                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                          </div>
                        </button>

                        {isSelected && method.id === 'card' && (
                          <div className="overflow-hidden transition-all duration-300">
                            <div className="p-6 bg-gray-50/80 rounded-2xl mt-3 ml-4 border border-gray-100 space-y-5">
                              <div>
                                <label className="block text-sm font-semibold text-[#4A4A3F] mb-2">Número de tarjeta</label>
                                <div className="relative">
                                  <input
                                    type="text"
                                    inputMode="numeric"
                                    placeholder="1234 5678 9012 3456"
                                    value={paymentData.card?.number || ''}
                                    onChange={(e) => {
                                      const formatted = formatCardNumber(e.target.value);
                                      setPaymentData((prev) => ({
                                        ...prev,
                                        card: { ...prev.card!, number: formatted },
                                      }));
                                    }}
                                    className="w-full px-4 py-3.5 pl-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none text-[#4A4A3F] bg-white transition-all"
                                  />
                                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                  </svg>
                                  {paymentData.card?.number && (
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#6B6B5B] bg-gray-100 px-2 py-1 rounded-md">
                                      {detectCardType(paymentData.card.number) || '?'}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-semibold text-[#4A4A3F] mb-2">Fecha de vencimiento</label>
                                  <input
                                    type="text"
                                    inputMode="numeric"
                                    placeholder="MM/AA"
                                    value={paymentData.card?.expiry || ''}
                                    onChange={(e) => {
                                      const formatted = formatExpiry(e.target.value);
                                      setPaymentData((prev) => ({
                                        ...prev,
                                        card: { ...prev.card!, expiry: formatted },
                                      }));
                                    }}
                                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none text-[#4A4A3F] bg-white transition-all"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-semibold text-[#4A4A3F] mb-2">Código de seguridad</label>
                                  <input
                                    type="text"
                                    inputMode="numeric"
                                    placeholder="CVV"
                                    maxLength={4}
                                    value={paymentData.card?.cvc || ''}
                                    onChange={(e) => {
                                      const cleaned = e.target.value.replace(/\D/g, '').slice(0, 4);
                                      setPaymentData((prev) => ({
                                        ...prev,
                                        card: { ...prev.card!, cvc: cleaned },
                                      }));
                                    }}
                                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none text-[#4A4A3F] bg-white transition-all"
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-[#4A4A3F] mb-2">Nombre del titular</label>
                                <input
                                  type="text"
                                  placeholder="Como aparece en la tarjeta"
                                  value={paymentData.card?.name || ''}
                                  onChange={(e) => {
                                    setPaymentData((prev) => ({
                                      ...prev,
                                      card: { ...prev.card!, name: e.target.value },
                                    }));
                                  }}
                                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none text-[#4A4A3F] bg-white transition-all"
                                />
                              </div>
                              <div className="flex items-center gap-2 text-xs text-[#6B6B5B] pt-2">
                                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                Tus datos están cifrados con SSL
                              </div>
                            </div>
                          </div>
                        )}

                        {isSelected && method.id === 'pse' && (
                          <div className="overflow-hidden transition-all duration-300">
                            <div className="p-6 bg-gray-50/80 rounded-2xl mt-3 ml-4 border border-gray-100">
                              <label className="block text-sm font-semibold text-[#4A4A3F] mb-4">
                                Selecciona tu banco
                              </label>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {bancos.map((banco) => (
                                  <button
                                    key={banco}
                                    type="button"
                                    onClick={() => setBancoPse(banco)}
                                    className={`p-3.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                                      bancoPse === banco
                                        ? 'border-[#E89B5A] bg-[#FAF8F3] text-[#E89B5A] ring-1 ring-[#E89B5A]/20'
                                        : 'border-gray-200 text-[#4A4A3F] hover:border-gray-300 hover:shadow-sm bg-white'
                                    }`}
                                  >
                                    {banco}
                                  </button>
                                ))}
                              </div>
                              {bancoPse && (
                                <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 px-4 py-2.5 rounded-lg">
                                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  Banco seleccionado: <strong>{bancoPse}</strong>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {isSelected && method.id === 'paypal' && (
                          <div className="overflow-hidden transition-all duration-300">
                            <div className="p-6 bg-gray-50/80 rounded-2xl mt-3 ml-4 border border-gray-100">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0070BA] rounded-lg flex items-center justify-center">
                                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
                                  </svg>
                                </div>
                                <div>
                                  <p className="font-semibold text-[#4A4A3F]">PayPal</p>
                                  <p className="text-xs text-[#6B6B5B]">Pagos seguros internacionales</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
                                <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <p className="text-sm text-blue-700">
                                  Serás redirigido a PayPal para completar el pago de forma segura. Tus datos no se comparten con el vendedor.
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={handlePagar}
                                className="w-full py-3.5 bg-[#0070BA] text-white rounded-xl font-semibold hover:bg-[#005EA6] transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                              >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
                                </svg>
                                Pagar con PayPal
                              </button>
                            </div>
                          </div>
                        )}

                        {isSelected && method.id === 'addi' && (
                          <div className="overflow-hidden transition-all duration-300">
                            <div className="p-6 bg-gray-50/80 rounded-2xl mt-3 ml-4 border border-gray-100 space-y-5">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="font-semibold text-[#4A4A3F]">Addi</p>
                                  <p className="text-xs text-[#6B6B5B]">Crédito en cuotas sin necesidad de tarjeta</p>
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-[#4A4A3F] mb-2">Número de documento</label>
                                <input
                                  type="text"
                                  inputMode="numeric"
                                  placeholder="Cédula de ciudadanía"
                                  value={paymentData.addi?.documentId || ''}
                                  onChange={(e) => {
                                    const cleaned = e.target.value.replace(/\D/g, '').slice(0, 15);
                                    setPaymentData((prev) => ({
                                      ...prev,
                                      addi: { ...prev.addi!, documentId: cleaned },
                                    }));
                                  }}
                                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none text-[#4A4A3F] bg-white transition-all"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-[#4A4A3F] mb-2">Nombre completo</label>
                                <input
                                  type="text"
                                  placeholder="Como aparece en tu documento"
                                  value={paymentData.addi?.fullName || ''}
                                  onChange={(e) => {
                                    setPaymentData((prev) => ({
                                      ...prev,
                                      addi: { ...prev.addi!, fullName: e.target.value },
                                    }));
                                  }}
                                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none text-[#4A4A3F] bg-white transition-all"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-[#4A4A3F] mb-2">Número de cuotas</label>
                                <div className="grid grid-cols-4 gap-3">
                                  {[3, 6, 12, 24].map((cuota) => (
                                    <button
                                      key={cuota}
                                      type="button"
                                      onClick={() => {
                                        setPaymentData((prev) => ({
                                          ...prev,
                                          addi: { ...prev.addi!, installments: cuota },
                                        }));
                                      }}
                                      className={`p-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                                        paymentData.addi?.installments === cuota
                                          ? 'border-purple-500 bg-purple-50 text-purple-700 ring-1 ring-purple-500/20'
                                          : 'border-gray-200 text-[#4A4A3F] hover:border-gray-300 hover:shadow-sm bg-white'
                                      }`}
                                    >
                                      {cuota}
                                    </button>
                                  ))}
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-[#6B6B5B] pt-2">
                                <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Aprobación sujeta a evaluación de crédito de Addi
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 space-y-3">
                  {paymentData.method && paymentData.method !== 'paypal' && (
                    <button
                      type="button"
                      onClick={handlePagar}
                      disabled={isPaying || (paymentData.method === 'pse' && !bancoPse) || (paymentData.method === 'addi' && (!paymentData.addi?.documentId || !paymentData.addi?.fullName || !paymentData.addi?.installments))}
                      className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                        isPaying || (paymentData.method === 'pse' && !bancoPse) || (paymentData.method === 'addi' && (!paymentData.addi?.documentId || !paymentData.addi?.fullName || !paymentData.addi?.installments))
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white hover:shadow-xl hover:shadow-[#E89B5A]/30 hover:scale-[1.01] active:scale-[0.99]'
                      }`}
                    >
                      {isPaying ? 'Procesando pago...' : `Pagar ${planInfo.precio}`}
                    </button>
                  )}

                  {paymentData.method === 'pse' && !bancoPse && (
                    <p className="text-sm text-red-500 text-center flex items-center justify-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
                      </svg>
                      Selecciona un banco para continuar
                    </p>
                  )}
                  {paymentData.method === 'addi' && (!paymentData.addi?.documentId || !paymentData.addi?.fullName || !paymentData.addi?.installments) && (
                    <p className="text-sm text-red-500 text-center flex items-center justify-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
                      </svg>
                      Completa todos los campos para continuar
                    </p>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#6B6B5B]">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Conexión segura SSL
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Datos protegidos
                  </span>
                </div>
              </div>

              {isPaying && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
                  <div className="bg-white rounded-3xl p-12 text-center shadow-2xl max-w-sm mx-4">
                    <div className="relative w-20 h-20 mx-auto mb-8">
                      <div className="absolute inset-0 border-4 border-[#E89B5A]/20 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-t-[#E89B5A] rounded-full animate-spin"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#E89B5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#4A4A3F] mb-3">Procesando pago</h3>
                    <p className="text-[#6B6B5B] text-sm mb-6">
                      Estamos procesando tu pago de <strong className="text-[#4A4A3F]">{planInfo.precio}</strong>
                    </p>
                    <div className="flex justify-center gap-1">
                      <span className="w-2 h-2 bg-[#E89B5A] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-[#E89B5A] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-[#E89B5A] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                    <p className="text-xs text-[#6B6B5B] mt-6 flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Conexión segura
                    </p>
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
