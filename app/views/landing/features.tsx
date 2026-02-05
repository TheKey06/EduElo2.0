import { 
  FileText, 
  BarChart3, 
  Users, 
  Shield, 
  Zap, 
  BookOpen 
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/views/ui/card"

const features = [
  {
    icon: FileText,
    title: "Simulacros de Calidad",
    description: "Accede a simulacros cuidadosamente disenados siguiendo estandares pedagogicos, disponibles a bajo costo para todos los estudiantes.",
  },
  {
    icon: BarChart3,
    title: "Analitica y Seguimiento",
    description: "Herramientas de seguimiento academico que permiten visualizar el progreso y detectar areas de mejora de forma clara y precisa.",
  },
  {
    icon: Users,
    title: "Integracion Total",
    description: "Un solo sistema que conecta a estudiantes, docentes y colegios, facilitando la comunicacion y el trabajo colaborativo.",
  },
  {
    icon: Shield,
    title: "Proteccion de Datos",
    description: "Compromiso con la seguridad y privacidad de la informacion de todos nuestros usuarios, cumpliendo con las normativas vigentes.",
  },
  {
    icon: Zap,
    title: "Resultados en Tiempo Real",
    description: "Obtiene retroalimentacion inmediata sobre tu desempeno, permitiendo ajustar tu preparacion de manera efectiva.",
  },
  {
    icon: BookOpen,
    title: "Contenido Pedagogico",
    description: "Banco de items y recursos educativos desarrollados por expertos para complementar tu preparacion academica.",
  },
]

export function Features() {
  return (
    <section id="caracteristicas" className="bg-accent/50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Caracteristicas
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Todo lo que necesitas para tu preparacion academica
          </p>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Nuestra plataforma ofrece las herramientas necesarias para que estudiantes 
            y colegios alcancen sus metas educativas.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="border-border bg-card transition-all hover:shadow-lg hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4 text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
