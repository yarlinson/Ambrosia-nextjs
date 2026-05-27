'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RecuperarPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/auth/recover-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Error al enviar el correo');
      }

      setSuccess(data.message || 'Revisa tu correo para continuar.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar el formulario');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3]">
      <section className="py-16 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-md mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-[#6B6B5B]">
            <Link href="/" className="hover:text-[#E89B5A] transition-colors">
              Inicio
            </Link>{' '}
            <span className="mx-2">»</span>
            <span className="text-[#4A4A3F] font-medium">Recuperar contraseña</span>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#4A4A3F] mb-2">
                Recupera tu contraseña
              </h1>
              <p className="text-[#6B6B5B]">Te enviaremos un enlace por correo.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
                  {success}
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#4A4A3F] mb-2"
                >
                  Correo Electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none transition-all text-[#4A4A3F] placeholder-gray-400"
                  placeholder="tu@email.com"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white hover:shadow-xl hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar enlace'}
              </button>

              <div className="text-center pt-2">
                <Link
                  href="/login"
                  className="text-sm text-[#E89B5A] hover:underline"
                >
                  Volver a iniciar sesión
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

