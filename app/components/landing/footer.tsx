import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  plataforma: [
    { name: "Dashboard", href: "/" },
    { name: "Simulacros", href: "/simulacros" },
    { name: "Resultados", href: "/resultados" },
    { name: "Instituciones", href: "/instituciones" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "#mision-vision" },
    { name: "Caracteristicas", href: "#caracteristicas" },
    { name: "Objetivos", href: "#objetivos" },
    { name: "Contacto", href: "#contacto" },
  ],
  legal: [
    { name: "Terminos y Condiciones", href: "#" },
    { name: "Politica de Privacidad", href: "#" },
    { name: "Proteccion de Datos", href: "#" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

export function Footer() {
  return (
    <footer id="contacto" className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand and contact */}
          <div className="lg:col-span-1">
            <Link href="/inicio" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="EDUelo Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg bg-white p-1"
              />
              <span className="text-xl">
                <span className="font-bold">EDU</span>
                <span className="font-light">elo</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Plataforma educativa digital para la preparacion academica basada en datos.
            </p>
            
            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a href="mailto:contacto@eduelo.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                contacto@eduelo.com
              </a>
              <a href="tel:+573001234567" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                +57 300 123 4567
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Bogota, Colombia</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Plataforma</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.plataforma.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Empresa</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">
              {new Date().getFullYear()} EDUelo. Todos los derechos reservados.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
