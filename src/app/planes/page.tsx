import Link from "next/link";

const planes = [
  {
    nombre: "Plan Mensual",
    precio: "$4.000.000",
    descripcion:
      "Diseñado para asegurar acompañamiento constante y menús adaptados a la guía IDDSI.",
    beneficios: [
      "Menús personalizados según nivel IDDSI (3–6)",
      "3 comidas principales + 2 refrigerios diarios",
      "Valoración nutricional y ajuste semanal",
      "Acompañamiento quincenal fonoaudiológico",
      "Soporte virtual continuo (acceso a la revista, talleres informativos)",
      "Guía de manipulación y calentamiento de los alimentos",
      "Entrega a domicilios",
    ],
    destacado: false,
  },
  {
    nombre: "Plan Trimestral",
    precio: "$6.000.000",
    descripcion:
      "Ideal para un enfoque prolongado con seguimiento profesional integral.",
    beneficios: [
      "Evaluación fonoaudiológica y nutricional inicial y final",
      "Ciclo de menús de 27 días con preferencias estandarizadas",
      "Seguimiento nutricional mensual",
      "1 sesión de talleres individuales personalizados virtuales",
      "Asesoría telefónica",
      "Acceso a comunidad virtual de apoyo",
    ],
    destacado: true,
  },
];

// Icono de calendario SVG
const CalendarIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export default function PlanesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3]">
      <section className="py-16 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-[#6B6B5B]">
            <Link href="/" className="hover:text-[#E89B5A] transition-colors">
              Inicio
            </Link>{" "}
            <span className="mx-2">»</span>
            <span className="text-[#4A4A3F] font-medium">Planes</span>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A3F] mb-6">
              Selecciona el plan ideal para ti
            </h1>
            <p className="text-lg md:text-xl text-[#6B6B5B] max-w-3xl mx-auto leading-relaxed">
              Nuestros planes están diseñados para proporcionar acompañamiento
              clínico, nutricional y fonoaudiológico especializado en disfagia.
            </p>
          </div>

          {/* Planes Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {planes.map((plan, index) => (
              <div
                key={plan.nombre}
                className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col ${
                  plan.destacado
                    ? "border-2 border-[#E89B5A] md:scale-105"
                    : "border border-gray-200"
                }`}
              >
                {/* Badge "Más popular" */}
                {plan.destacado && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-md">
                      Más popular
                    </span>
                  </div>
                )}

                <div className="p-8 lg:p-10 flex flex-col h-full">
                  {/* Icono y Header */}
                  <div className="mb-8">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
                        plan.destacado
                          ? "bg-gradient-to-br from-[#E89B5A] to-[#D97757]"
                          : "bg-gradient-to-br from-[#E89B5A]/90 to-[#D97757]/90"
                      }`}
                    >
                      <CalendarIcon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-[#4A4A3F] mb-3">
                      {plan.nombre}
                    </h2>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-[#E89B5A]">
                        {plan.precio}
                      </span>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-[#6B6B5B] mb-8 text-base leading-relaxed">
                    {plan.descripcion}
                  </p>

                  {/* Lista de beneficios */}
                  <ul className="space-y-4 flex-grow mb-8">
                    {plan.beneficios.map((beneficio, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="w-2 h-2 bg-[#E89B5A] rounded-full"></div>
                        </div>
                        <span className="ml-3 text-[#4A4A3F] text-sm leading-relaxed">
                          {beneficio}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Botón */}
                  <Link
                    href="/preinscripcion"
                    className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 block text-center ${
                      plan.destacado
                        ? "bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white hover:shadow-xl hover:scale-105"
                        : "bg-gradient-to-r from-[#E89B5A]/90 to-[#D97757]/90 text-white hover:shadow-lg hover:from-[#E89B5A] hover:to-[#D97757]"
                    }`}
                  >
                    Reservar plan
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-[#6B6B5B] max-w-4xl mx-auto">
              Todos los planes incluyen seguimiento profesional y adaptación
              continua según las necesidades del paciente. Consulta nuestros{" "}
              <Link
                href="/"
                className="text-[#E89B5A] hover:underline font-medium"
              >
                Términos y condiciones
              </Link>{" "}
              para más información.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


