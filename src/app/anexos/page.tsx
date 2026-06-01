import Link from "next/link";

const anexos = [
  {
    title: "Disfagia en Pacientes con Alzheimer",
    description:
      "Documentación especializada sobre los retos y recomendaciones para pacientes con Alzheimer que presentan disfagia.",
    file: "/docs/DISFAGIA EN PACIENTES CON ALZAHIMER.pdf",
    icon: "🧠",
  },
  {
    title: "Consecuencias y Tratamiento en la Disfagia",
    description:
      "Análisis de las principales complicaciones y abordajes terapéuticos disponibles para el tratamiento de la disfagia.",
    file: "/docs/CONSECUENCIAS Y TRATAMIENTO EN LA DISFAGIA.pdf",
    icon: "📘",
  },
  {
    title: "Disfagia en el Adulto Mayor",
    description:
      "Guía enfocada en identificar, evaluar y tratar la disfagia en personas mayores.",
    file: "/docs/DISFAGIA EN EL ADULTO MAYOR.pdf",
    icon: "👴",
  },
  {
    title: "Disfagia en Pacientes Neurológicos",
    description:
      "Recomendaciones nutricionales y terapéuticas para pacientes con alteraciones neurológicas que presentan disfagia.",
    file: "/docs/DISFAGIA EN PACIENTES NEUROLOGICOS.pdf",
    icon: "🧬",
  },
  {
    title: "Portafolio de Servicios Ambrosia",
    description:
      "Conoce nuestros servicios integrales de alimentación segura, planes personalizados, acompañamiento profesional y productos especializados para personas con disfagia.",
    file: "/docs/PORTAFOLIO DE SERVICIO AMBROSÍA (1).pdf",
    icon: "📋",
  },
  {
    title: "Ficha Técnica Ambrosia",
    description:
      "Modelo de atención integral para personas con disfagia. Especificaciones técnicas, características del servicio y protocolos de seguridad alimentaria.",
    file: "/docs/FICHA TECNICA AMBROSÍA.pdf",
    icon: "📄",
  },
  {
    title: "Buenas Prácticas de Manipulación de Alimentos",
    description:
      "Guía de buenas prácticas para la manipulación segura de alimentos adaptados, estándares de higiene y protocolos sanitarios.",
    file: "/docs/BUENAS PRÁCTICA DE MANIPULACIÓN DE ALIMENTOS AMBROSÍA.pdf",
    icon: "🧼",
  },
  {
    title: "Guía de Manipulación de Alimentos",
    description:
      "Protocolos de inocuidad alimentaria, estándares IDDSI, temperaturas seguras y buenas prácticas para la preparación y manipulación de alimentos adaptados.",
    file: "/docs/GUIA DE MANIPULACION DE ALIMENTOS_AMBROSIA.pdf",
    icon: "🍽️",
  },
];

export default function AnexosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] to-[#F9F7F2]">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 text-sm text-[#6B6B5B]">
            <Link href="/" className="hover:text-[#E89B5A] transition-colors">
              Inicio
            </Link>{" "}
            »{" "}
            <span className="text-[#4A4A3F] font-medium">
              Anexos y Documentos
            </span>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A4A3F] mb-4">
              Centro de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E89B5A] to-[#D97757]">
                Anexos
              </span>
            </h1>
            <p className="text-lg text-[#6B6B5B] max-w-3xl mx-auto leading-relaxed">
              Accede a documentación técnica y material de apoyo descargable
              para profundizar en los diferentes contextos clínicos de la
              disfagia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {anexos.map((anexo) => (
              <div
                key={anexo.title}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 border border-[#F0EBDD]"
              >
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center text-3xl text-white">
                      {anexo.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#4A4A3F]">
                        {anexo.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-[#6B6B5B] text-sm leading-relaxed mb-4">
                    {anexo.description}
                  </p>
                  <div className="rounded-xl border border-[#F0EBDD] overflow-hidden">
                    <iframe
                      src={`${anexo.file}#view=FitH`}
                      className="w-full h-64"
                      title={anexo.title}
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={anexo.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#E89B5A] text-[#E89B5A] font-semibold hover:bg-[#FFF6EF] transition-colors"
                  >
                    Ver en nueva pestaña
                  </a>
                  <a
                    href={anexo.file}
                    download
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white font-semibold hover:opacity-90 transition-opacity"
                  >
                    Descargar PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


