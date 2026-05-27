'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

export default function RestablecerPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const supabase = useMemo(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    return url && key ? createClient(url, key) : null;
  }, []);

  useEffect(() => {
    const prepareRecoverySession = async () => {
      if (!supabase) {
        setError('Faltan variables de Supabase para restablecer contraseña.');
        return;
      }

      try {
        const hashParams = new URLSearchParams(
          globalThis.location.hash.replace('#', '')
        );
        const accessToken = hashParams.get('access_token');
        const refreshToken = hashParams.get('refresh_token');

        if (accessToken && refreshToken) {
          const { error: setSessionError } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (setSessionError) {
            setError('El enlace no es válido o ya expiró. Solicita uno nuevo.');
            return;
          }
        } else {
          const { data } = await supabase.auth.getSession();
          if (!data.session) {
            setError('Enlace inválido. Solicita nuevamente la recuperación.');
            return;
          }
        }

        setIsReady(true);
      } catch (err) {
        console.error('Error validating recovery link:', err);
        setError('No fue posible validar el enlace de recuperación.');
      }
    };

    prepareRecoverySession();
  }, [supabase]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!supabase) {
      setError('Supabase no está configurado.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setIsSubmitting(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setIsSubmitting(false);

    if (updateError) {
      setError(updateError.message || 'No se pudo actualizar la contraseña.');
      return;
    }

    await supabase.auth.signOut();
    setSuccess('Contraseña actualizada correctamente. Ahora puedes iniciar sesión.');

    setTimeout(() => {
      router.push('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3]">
      <section className="py-16 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-md mx-auto">
          <div className="mb-8 text-sm text-[#6B6B5B]">
            <Link href="/" className="hover:text-[#E89B5A] transition-colors">
              Inicio
            </Link>{' '}
            <span className="mx-2">»</span>
            <span className="text-[#4A4A3F] font-medium">Restablecer contraseña</span>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#4A4A3F] mb-2">
                Nueva contraseña
              </h1>
              <p className="text-[#6B6B5B]">
                Ingresa y confirma tu nueva contraseña.
              </p>
            </div>

            {!isReady && !error && (
              <p className="text-sm text-[#6B6B5B] text-center mb-4">Validando enlace...</p>
            )}

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
                  htmlFor="password"
                  className="block text-sm font-semibold text-[#4A4A3F] mb-2"
                >
                  Nueva contraseña <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  disabled={!isReady || isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none transition-all text-[#4A4A3F] placeholder-gray-400"
                  placeholder="Mínimo 6 caracteres"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-[#4A4A3F] mb-2"
                >
                  Confirmar contraseña <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                  disabled={!isReady || isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none transition-all text-[#4A4A3F] placeholder-gray-400"
                  placeholder="Repite la contraseña"
                />
              </div>

              <button
                type="submit"
                disabled={!isReady || isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                  !isReady || isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white hover:shadow-xl hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? 'Actualizando...' : 'Guardar nueva contraseña'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

