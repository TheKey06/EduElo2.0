import { CheckCircle2, Rocket } from "lucide-react"

const specificObjectives = [
  "Facilitar el acceso a simulacros de calidad a bajo costo.",
  "Brindar herramientas de seguimiento academico.",
  "Integrar estudiantes, docentes y colegios en un solo sistema.",
]

export function Objectives() {
  return (
    <section id="objetivos" className="bg-accent/50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nuestro Proposito
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Objetivos
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* General Objective */}
          <div className="flex flex-col justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
              <Rocket className="h-7 w-7 text-white" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-foreground">Objetivo General</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Desarrollar una plataforma LMS enfocada en simulacros educativos y 
              acompanamiento pedagogico, proporcionando una solucion integral para 
              la preparacion academica.
            </p>
          </div>

          {/* Specific Objectives */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold text-foreground">Objetivos Especificos</h3>
            <ul className="mt-6 space-y-4">
              {specificObjectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground leading-relaxed">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
