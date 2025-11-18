'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface FormData {
  nombreCompleto: string;
  email: string;
  telefono: string;
  condicionPaciente: string;
  nivelIddsi: string;
  observaciones: string;
  planSeleccionado: string;
}

export default function PreinscripcionPage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    nombreCompleto: '',
    email: '',
    telefono: '',
    condicionPaciente: '',
    nivelIddsi: '',
    observaciones: '',
    planSeleccionado: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const validateForm = (): boolean => {
    if (!formData.nombreCompleto.trim()) {
      setError('El nombre completo es requerido');
      return false;
    }
    if (!formData.email.trim()) {
      setError('El correo electrónico es requerido');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('El correo electrónico no es válido');
      return false;
    }
    if (!formData.telefono.trim()) {
      setError('El número de teléfono es requerido');
      return false;
    }
    if (!formData.condicionPaciente.trim()) {
      setError('La información sobre la condición del paciente es requerida');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/preinscripcion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al procesar la preinscripción');
      }

      setSuccess(true);
      setAccountCreated(data.accountCreated || false);
      
      // Redirigir después de mostrar el mensaje
      setTimeout(() => {
        if (data.accountCreated) {
          router.push('/login');
        } else {
          router.push('/planes');
        }
      }, 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar el formulario');
    } finally {
      setIsSubmitting(false);
    }
  };


  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#4A4A3F] mb-4">
            ¡Preinscripción exitosa!
          </h2>
          <p className="text-[#6B6B5B] mb-6">
            {accountCreated 
              ? 'Tu cuenta ha sido creada automáticamente. Revisa tu email para establecer tu contraseña y poder iniciar sesión.'
              : 'Tu información ha sido guardada exitosamente. Te redirigiremos en unos momentos...'}
          </p>
          {accountCreated && (
            <Link
              href="/login"
              className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Ir a Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3]">
      <section className="py-16 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-2xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-[#6B6B5B]">
            <Link href="/" className="hover:text-[#E89B5A] transition-colors">
              Inicio
            </Link>{' '}
            <span className="mx-2">»</span>
            <Link href="/planes" className="hover:text-[#E89B5A] transition-colors">
              Planes
            </Link>{' '}
            <span className="mx-2">»</span>
            <span className="text-[#4A4A3F] font-medium">Preinscripción</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A4A3F] mb-4">
              Regístrate y{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E89B5A] to-[#D97757]">
                Preinscríbete
              </span>
            </h1>
            <p className="text-lg text-[#6B6B5B] max-w-xl mx-auto">
              Completa tus datos personales para crear tu cuenta y acceder a nuestros servicios
              especializados en disfagia. Tu cuenta se creará automáticamente al enviar este formulario.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* Nombre Completo */}
              <div>
                <label
                  htmlFor="nombreCompleto"
                  className="block text-sm font-semibold text-[#4A4A3F] mb-2"
                >
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nombreCompleto"
                  name="nombreCompleto"
                  value={formData.nombreCompleto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none transition-all text-[#4A4A3F] placeholder-gray-400"
                  placeholder="Ej: Juan Pérez García"
                />
              </div>

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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none transition-all text-[#4A4A3F] placeholder-gray-400"
                  placeholder="Ej: juan.perez@email.com"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-semibold text-[#4A4A3F] mb-2"
                >
                  Número de Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none transition-all text-[#4A4A3F] placeholder-gray-400"
                  placeholder="Ej: +57 300 123 4567"
                />
              </div>

              {/* Plan Seleccionado */}
              <div>
                <label
                  htmlFor="planSeleccionado"
                  className="block text-sm font-semibold text-[#4A4A3F] mb-2"
                >
                  Plan Seleccionado
                </label>
                <select
                  id="planSeleccionado"
                  name="planSeleccionado"
                  value={formData.planSeleccionado}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none transition-all bg-white text-[#4A4A3F]"
                >
                  <option value="">Selecciona un plan (opcional)</option>
                  <option value="mensual">Plan Mensual - $4.000.000</option>
                  <option value="trimestral">Plan Trimestral - $6.000.000</option>
                </select>
              </div>

              {/* Condición del Paciente */}
              <div>
                <label
                  htmlFor="condicionPaciente"
                  className="block text-sm font-semibold text-[#4A4A3F] mb-2"
                >
                  Información sobre la condición del paciente <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="condicionPaciente"
                  name="condicionPaciente"
                  value={formData.condicionPaciente}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none transition-all resize-none text-[#4A4A3F] placeholder-gray-400"
                  placeholder="Describe la condición del paciente, nivel de disfagia, necesidades especiales, etc."
                />
              </div>

              {/* Nivel IDDSI */}
              <div>
                <label
                  htmlFor="nivelIddsi"
                  className="block text-sm font-semibold text-[#4A4A3F] mb-2"
                >
                  Nivel IDDSI (si lo conoces)
                </label>
                <select
                  id="nivelIddsi"
                  name="nivelIddsi"
                  value={formData.nivelIddsi}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none transition-all bg-white text-[#4A4A3F]"
                >
                  <option value="">No lo sé / No aplica</option>
                  <option value="0">Nivel 0 - Líquidos finos</option>
                  <option value="1">Nivel 1 - Líquidos ligeramente espesos</option>
                  <option value="2">Nivel 2 - Líquidos moderadamente espesos</option>
                  <option value="3">Nivel 3 - Líquidos extremadamente espesos</option>
                  <option value="4">Nivel 4 - Purés extremadamente espesos</option>
                  <option value="5">Nivel 5 - Purés espesos</option>
                  <option value="6">Nivel 6 - Purés suaves y húmedos</option>
                  <option value="7">Nivel 7 - Alimentos regulares</option>
                </select>
              </div>

              {/* Observaciones */}
              <div>
                <label
                  htmlFor="observaciones"
                  className="block text-sm font-semibold text-[#4A4A3F] mb-2"
                >
                  Observaciones Adicionales
                </label>
                <textarea
                  id="observaciones"
                  name="observaciones"
                  value={formData.observaciones}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none transition-all resize-none text-[#4A4A3F] placeholder-gray-400"
                  placeholder="Cualquier información adicional que consideres relevante..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white hover:shadow-xl hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? 'Procesando...' : 'Registrarme y Preinscribirme'}
                </button>
              </div>

              {/* Link to Login */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-[#6B6B5B]">
                  ¿Ya tienes cuenta?{' '}
                  <Link href="/login" className="text-[#E89B5A] font-semibold hover:underline">
                    Inicia sesión aquí
                  </Link>
                </p>
              </div>

              {/* Privacy Note */}
              <p className="text-xs text-[#6B6B5B] text-center pt-2">
                Al enviar este formulario, aceptas que procesemos tus datos personales según
                nuestra política de privacidad.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

