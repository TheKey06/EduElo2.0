
"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
// import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Caracteristicas", href: "#caracteristicas" },
  { name: "Mision y Vision", href: "#mision-vision" },
  { name: "Objetivos", href: "#objetivos" },
  { name: "Contacto", href: "#contacto" },
]

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border scroll-smooth">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/inicio" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="EDUelo Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl text-foreground">
            <span className="font-bold">EDU</span>
            <span className="font-light">elo</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link href="/">
            {/* <Button>Ingresar a la Plataforma</Button> */}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Abrir menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="space-y-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                {/* <Button className="w-full">Ingresar a la Plataforma</Button> */}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
