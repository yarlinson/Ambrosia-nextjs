import Link from "next/link";

const videos = [
  { title: "Videoreceta 1", src: "/media/VideoTiktok1.mp4" },
  { title: "Videoreceta 2", src: "/media/VideoTiktok2.mp4" },
  { title: "Videoreceta 3", src: "/media/VideoTiktok3.mp4" },
];

export default function VideoRecetasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3]">
      <section className="py-16 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-sm text-[#6B6B5B]">
            <Link href="/" className="hover:text-[#E89B5A] transition-colors">
              Inicio
            </Link>{" "}
            <span className="mx-2">»</span>
            <span className="text-[#4A4A3F] font-medium">Videorecetas</span>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A4A3F] mb-4">
              Videorecetas
            </h1>
            <p className="text-lg text-[#6B6B5B] max-w-2xl mx-auto">
              Explora nuestras recetas adaptadas en video.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.src}
                className="bg-white rounded-3xl shadow-xl p-4 border border-gray-100"
              >
                <p className="text-[#4A4A3F] font-semibold mb-3">{video.title}</p>
                <video
                  controls
                  preload="metadata"
                  className="w-full rounded-2xl"
                  src={video.src}
                >
                  <track
                    kind="captions"
                    src="/media/videorecetas-es.vtt"
                    srcLang="es"
                    label="Español"
                    default
                  />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
