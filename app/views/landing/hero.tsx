import Link from "next/link"
import { Button } from "@/app/views/ui/buttons/button"
import { ArrowRight, PlayCircle } from "lucide-react"
import '@/styles/globals.css';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-125 w-125 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 h-125 w-125 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-accent px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Plataforma educativa lider en Colombia
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Prepara tu futuro academico con{" "}
            <span className="text-primary">simulacros de calidad</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Plataforma educativa digital que permite a estudiantes y colegios mejorar su 
            desempeno academico mediante simulacros, contenidos pedagogicos y analitica clara.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button size="lg" className="gap-2" variant='default'>
                Comenzar ahora
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" className="gap-2" variant="outline">
              <PlayCircle className="h-5 w-5" />
              Ver como funciona
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">500+</span>
              <span className="mt-1 text-sm text-muted-foreground">Colegios</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">50K+</span>
              <span className="mt-1 text-sm text-muted-foreground">Estudiantes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">10K+</span>
              <span className="mt-1 text-sm text-muted-foreground">Simulacros</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">98%</span>
              <span className="mt-1 text-sm text-muted-foreground">Satisfaccion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
