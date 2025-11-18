'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await login(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
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
            <span className="text-[#4A4A3F] font-medium">
              Iniciar Sesión
            </span>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#4A4A3F] mb-2">
              Bienvenido de nuevo
            </h1>
            <p className="text-[#6B6B5B]">
              Inicia sesión para acceder a tu perfil
            </p>
          </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

              {/* Email */}
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

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-[#4A4A3F] mb-2"
                >
                  Contraseña <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none transition-all text-[#4A4A3F] placeholder-gray-400"
                  placeholder="Ingresa tu contraseña"
                />
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <Link
                  href="/recuperar-password"
                  className="text-sm text-[#E89B5A] hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white hover:shadow-xl hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? 'Procesando...' : 'Iniciar Sesión'}
              </button>
            </form>

            {/* Link to Preinscripción */}
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-[#6B6B5B] mb-4">
                ¿No tienes cuenta?
              </p>
              <Link
                href="/preinscripcion"
                className="inline-block w-full py-3 rounded-xl font-semibold text-base bg-white border-2 border-[#E89B5A] text-[#E89B5A] hover:bg-[#E89B5A] hover:text-white transition-all duration-300"
              >
                Preinscríbete aquí
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

