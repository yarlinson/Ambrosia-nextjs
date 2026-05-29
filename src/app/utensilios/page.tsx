import Link from "next/link";
import Image from "next/image";

const utensilios = [
  {
    nombre: "Vaso con escotadura antiderrame 3 onzas",
    precio: "$30.000",
    imagen: "/images/vaso-escotadura-antiderrame-3-onzas.png",
    categoria: "Vasos",
  },
  {
    nombre: "Plato con borde elevado",
    precio: "$35.000",
    imagen: "/images/plato-borde-elevado.png",
    categoria: "Platos",
  },
  {
    nombre: "Taza de sorbo doble asas antiderrames con pitillo",
    precio: "$40.000",
    imagen: "/images/taza-sorbo-antiderrame-pitillo.png",
    categoria: "Platos",
  },
  {
    nombre: "Cubiertos ergonómicos set de 3 piezas",
    precio: "$50.000",
    imagen: "/images/cubiertos-ergonomicos-3-piezas.png",
    categoria: "Cubiertos",
  },
  {
    nombre: "Kit básico",
    precio: "$100.000",
    imagen: "/images/kit-basico.png",
    categoria: "Kit básico",
  },
  {
    nombre: "Kit intermedio",
    precio: "$130.000",
    imagen: "/images/kit-intermedio.png",
    categoria: "Kit intermedio",
  },
  {
    nombre: "Kit premium",
    precio: "$215.000",
    imagen: "/images/kit-premium.png",
    categoria: "Kit premium",
  },
  {
    nombre: "Espesante 275gr",
    precio: "$85.000",
    imagen: "/images/espesante.png",
    categoria: "Suplemento dietario",
  },
];

export default function UtensiliosPage() {
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
            <span className="text-[#4A4A3F] font-medium">Utensilios</span>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A3F] mb-6">
              Utensilios{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E89B5A] to-[#D97757]">
                Adaptados
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B6B5B] max-w-3xl mx-auto leading-relaxed">
              Productos especializados diseñados para facilitar una alimentación
              segura y cómoda para personas con disfagia. Todos nuestros utensilios
              están adaptados según estándares de seguridad y ergonomía.
            </p>
          </div>

          {/* Productos Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {utensilios.map((utensilio) => (
              <div
                key={utensilio.nombre}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-200 overflow-hidden group"
              >
                {/* Imagen del producto */}
                <div className="relative w-full h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden p-6">
                  <Image
                    src={utensilio.imagen}
                    alt={utensilio.nombre}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Categoría */}
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#FAF8F3] text-[#E89B5A]">
                      {utensilio.categoria}
                    </span>
                  </div>

                  {/* Nombre */}
                  <h2 className="text-xl font-bold text-[#4A4A3F] mb-3 line-clamp-2">
                    {utensilio.nombre}
                  </h2>

                  {/* Precio */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold text-[#E89B5A]">
                        {utensilio.precio}
                      </span>
                    </div>

                    {/* Botón de compra */}
                    <button className="w-full mt-4 py-3 rounded-xl font-semibold text-base transition-all duration-300 bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white hover:shadow-lg hover:scale-105">
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-[#6B6B5B] max-w-4xl mx-auto">
              Todos nuestros utensilios están diseñados con los más altos estándares
              de calidad y seguridad. Para más información sobre disponibilidad y
              envío,{" "}
              <Link
                href="/contact"
                className="text-[#E89B5A] hover:underline font-medium"
              >
                contáctanos
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

