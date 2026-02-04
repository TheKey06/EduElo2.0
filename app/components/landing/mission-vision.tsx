import { Target, Eye, Heart } from "lucide-react"

const values = [
  "Calidad pedagogica",
  "Accesibilidad",
  "Etica",
  "Proteccion de datos",
  "Mejora continua",
]

export function MissionVision() {
  return (
    <section id="mision-vision" className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nuestra Esencia
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Mision, Vision y Valores
          </p>
        </div>

        {/* Mission and Vision cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <div className="relative overflow-hidden rounded-2xl bg-primary p-8 lg:p-10">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Mision</h3>
              <p className="mt-4 text-lg leading-relaxed text-white/90">
                Proveer una plataforma educativa digital que permita a estudiantes y colegios 
                mejorar su desempeno academico mediante simulacros, contenidos pedagogicos y 
                analitica clara.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative overflow-hidden rounded-2xl bg-foreground p-8 lg:p-10">
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Vision</h3>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Ser una plataforma educativa de referencia en Colombia y Latinoamerica para 
                la preparacion academica basada en datos.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-8 lg:p-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Nuestros Valores</h3>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {values.map((value) => (
              <span
                key={value}
                className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
