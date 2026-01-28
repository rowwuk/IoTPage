// app/projects/website/page.tsx
"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  IconBrandNextjs,
  IconBrandGithub,
  IconCode,
  IconCloud,
  IconBrush,
  IconComponents,
  IconRobot,
  IconDeviceMobile,
  IconRocket,
  IconLayoutDashboard,
  IconPalette,
  IconCpu,
  IconDatabase,
  IconWorld,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WebsiteProjectPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  const developmentTeam = [
    {
      id: 1,
      name: "Główny Deweloper",
      designation: "Full Stack & UI/UX",
      image: "/team/dev1.jpg",
    },
    {
      id: 2,
      name: "AI Assistant",
      designation: "Generowanie kodu i struktur",
      image: "/team/ai.jpg",
    },
  ];

  const technologyStack = [
    {
      name: "Next.js 14",
      description: "React framework z App Router",
      color: "from-gray-500 to-black",
    },
    {
      name: "TypeScript",
      description: "Typowany JavaScript dla bezpieczeństwa",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      color: "from-cyan-500 to-teal-500",
    },
    {
      name: "Aceternity UI",
      description: "Komponenty animowane i interaktywne",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "shadcn/ui",
      description: "Komponenty dostępne z kopiuj-wklej",
      color: "from-emerald-500 to-green-500",
    },
    {
      name: "Tabler Icons",
      description: "Ikony SVG typu open-source",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Framer Motion",
      description: "Biblioteka animacji dla React",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "GitHub Pages",
      description: "Hosting statycznych stron",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "Vercel AI SDK",
      description: "Integracja z AI (OpenAI)",
      color: "from-violet-500 to-purple-500",
    },
  ];

  const developmentFeatures = [
    {
      id: 1,
      name: "Statyczna Generacja",
      description:
        "W pełni statyczna strona z Next.js output: 'export' - zero serwera, maksymalna wydajność",
      icon: <IconRocket className="h-8 w-8 text-orange-500" />,
    },
    {
      id: 2,
      name: "GitHub Pages Hosting",
      description:
        "Darmowy hosting na GitHub Pages z automatycznym wdrażaniem przez GitHub Actions",
      icon: <IconCloud className="h-8 w-8 text-blue-500" />,
    },
    {
      id: 3,
      name: "Komponenty UI",
      description:
        "Połączenie Aceternity UI (animacje) i shadcn/ui (dostępność) dla najlepszego UX",
      icon: <IconComponents className="h-8 w-8 text-purple-500" />,
    },
    {
      id: 4,
      name: "Asystent AI",
      description:
        "AI pomagało w generowaniu kodu, strukturze projektu i implementacji komponentów",
      icon: <IconRobot className="h-8 w-8 text-green-500" />,
    },
  ];

  const aiWorkflowSteps = [
    {
      id: 1,
      name: "Planowanie Architektury",
      content:
        "AI pomogło zaplanować strukturę projektu, wybrać technologie i zdefiniować komponenty",
    },
    {
      id: 2,
      name: "Generowanie Kodu",
      content:
        "Generowanie komponentów, stron i logiki na podstawie opisów w języku naturalnym",
    },
    {
      id: 3,
      name: "Stylowanie i Animacje",
      content:
        "Projektowanie UI/UX z wykorzystaniem Tailwind CSS i Framer Motion",
    },
    {
      id: 4,
      name: "Optymalizacja",
      content:
        "Sugestie optymalizacji wydajności, SEO i najlepszych praktyk React",
    },
    {
      id: 5,
      name: "Testowanie i Debugowanie",
      content:
        "Pomoc w identyfikacji i naprawie błędów, testowanie responsywności",
    },
    {
      id: 6,
      name: "Wdrożenie",
      content:
        "Konfiguracja GitHub Actions do automatycznego wdrażania na GitHub Pages",
    },
  ];

  const websiteFeatures = [
    {
      title: "W pełni responsywny",
      description:
        "Idealne wyświetlanie na wszystkich urządzeniach - od smartfonów po desktop",
      icon: <IconDeviceMobile className="h-10 w-10" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Niesamowite animacje",
      description:
        "Płynne animacje z Framer Motion i interaktywne komponenty Aceternity UI",
      icon: <IconBrush className="h-10 w-10" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Błyskawiczne ładowanie",
      description:
        "Optymalizacja wydajności dzięki statycznej generacji w Next.js 14",
      icon: <IconRocket className="h-10 w-10" />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "SEO Friendly",
      description:
        "Automatyczne generowanie meta tagów, sitemap i optymalizacja dla wyszukiwarek",
      icon: <IconWorld className="h-10 w-10" />,
      color: "from-green-500 to-emerald-500",
    },
  ];

  if (!isClient) return null;

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <BackgroundBeams />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/60 to-orange-900/30" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="text-sm font-medium text-white">
                Portfolio Technologiczne
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Nowoczesne Portfolio
              </span>
            </h1>

            <div className="h-1 w-32 bg-linear-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-8" />

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Strona portfolio zbudowana z Next.js, AI i najnowszych technologii
              frontend
            </p>

            {/* Project Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                "Next.js 14",
                "TypeScript",
                "AI Development",
                "GitHub Pages",
                "Aceternity UI",
                "shadcn/ui",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#code">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-black text-white flex items-center space-x-2 px-8 py-4 text-lg"
                >
                  <span>Zobacz Kod Źródłowy</span>
                  <IconCode className="h-5 w-5" />
                </HoverBorderGradient>
              </Link>
              <Link href="#architecture">
                <button className="px-10 py-4 rounded-full bg-linear-to-b from-orange-600 to-amber-600 text-white font-medium text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300">
                  Architektura Systemu
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-orange-400">O Projekcie</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Nowoczesna strona portfolio demonstrująca możliwości współczesnego
              developmentu frontend z wykorzystaniem AI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Kluczowe Cechy
                </h3>
                <div className="space-y-6">
                  {developmentFeatures.map((feature) => (
                    <motion.div
                      key={feature.id}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-800/50 transition-colors"
                    >
                      <div className="p-3 rounded-lg bg-gray-800">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">
                          {feature.name}
                        </h4>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Specyfikacje Techniczne
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <IconCpu className="h-6 w-6 text-orange-400" />
                    <h4 className="font-bold text-white">Wydajność</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Ładowanie strony:</span>
                      <span className="text-white">&lt; 1s</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Score Lighthouse:</span>
                      <span className="text-white">95+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rozmiar bundle:</span>
                      <span className="text-white">&lt; 500KB</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Hosting:</span>
                      <span className="text-white">GitHub Pages</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <IconDatabase className="h-6 w-6 text-blue-400" />
                    <h4 className="font-bold text-white">
                      Stack Technologiczny
                    </h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>Next.js 14 z App Router</li>
                    <li>TypeScript dla type safety</li>
                    <li>Tailwind CSS dla stylowania</li>
                    <li>Framer Motion dla animacji</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section
        id="architecture"
        className="py-20 bg-linear-to-b from-transparent to-gray-900/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-blue-400">Architektura</span> Systemu
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              {/* Three-Tier Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Frontend Layer */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-linear-to-b from-orange-500 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-gray-900 rounded-2xl p-6 border border-orange-800">
                    <div className="text-center mb-4">
                      <IconBrandNextjs className="h-12 w-12 text-orange-400 mx-auto mb-3" />
                      <h3 className="text-xl font-bold text-white">
                        Frontend Layer
                      </h3>
                      <p className="text-gray-400 mt-1">Next.js 14</p>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                        App Router
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                        Komponenty React
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                        TypeScript
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                        Tailwind CSS
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* UI Components Layer */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-linear-to-b from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-gray-900 rounded-2xl p-6 border border-blue-800">
                    <div className="text-center mb-4">
                      <IconComponents className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                      <h3 className="text-xl font-bold text-white">
                        UI Components
                      </h3>
                      <p className="text-gray-400 mt-1">Biblioteki UI</p>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        Aceternity UI
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        shadcn/ui
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        Framer Motion
                      </li>
                      <li className="flex items-center gap=2">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        Tabler Icons
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Deployment Layer */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-linear-to-b from-green-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-gray-900 rounded-2xl p-6 border border-green-800">
                    <div className="text-center mb-4">
                      <IconCloud className="h-12 w-12 text-green-400 mx-auto mb-3" />
                      <h3 className="text-xl font-bold text-white">
                        Deployment Layer
                      </h3>
                      <p className="text-gray-400 mt-1">Wdrażanie i hosting</p>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        GitHub Pages
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        GitHub Actions
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Static Export
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Custom Domain
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Connection Flow */}
              <div className="relative h-2 mx-8 mb-12">
                <div className="absolute inset-0 bg-linear-to-r from-orange-500 via-blue-500 to-green-500 rounded-full"></div>
                <div className="absolute -top-2 left-0 h-6 w-6 rounded-full bg-orange-500"></div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-blue-500"></div>
                <div className="absolute -top-2 right-0 h-6 w-6 rounded-full bg-green-500"></div>
              </div>

              {/* AI Development Workflow */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Proces Rozwoju z AI
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aiWorkflowSteps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 }}
                      whileHover={{ scale: 1.02 }}
                      className="relative group"
                    >
                      {/* Card */}
                      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full overflow-hidden">
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 via-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Step number */}
                        <div className="inline-block px-4 py-2 mb-4 bg-linear-to-r from-orange-500/20 to-blue-500/20 rounded-full border border-orange-500/30">
                          <span className="font-bold text-white">
                            Krok {step.id}
                          </span>
                        </div>

                        {/* Content */}
                        <h4 className="text-xl font-bold text-white mb-3">
                          {step.name}
                        </h4>
                        <p className="text-gray-300">{step.content}</p>

                        {/* Bottom gradient line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-orange-500 via-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-purple-400">Technologie</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Kompleksowy stack technologiczny wykorzystany do budowy strony
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {technologyStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`bg-linear-to-br ${tech.color} p-0.5 rounded-xl`}
                >
                  <div className="bg-gray-900 rounded-xl p-5 h-full">
                    <h3 className="font-bold text-white text-lg mb-2">
                      {tech.name}
                    </h3>
                    <p className="text-gray-400">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Features */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Kluczowe Funkcjonalności
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {websiteFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-linear-to-r rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl bg-linear-to-br ${feature.color}`}
                        >
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Section */}
      <section
        id="code"
        className="py-20 bg-linear-to-b from-transparent to-gray-900/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-green-400">Kod Źródłowy</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Repozytorium projektu i szczegóły implementacji
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Repozytorium GitHub
                  </h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="p-2 bg-green-500/20 rounded-lg mt-1">
                        <IconBrandGithub className="h-5 w-5 text-green-400" />
                      </div>
                      <p className="text-gray-300">
                        Pełny kod źródłowy dostępny publicznie na GitHub
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg mt-1">
                        <IconCode className="h-5 w-5 text-blue-400" />
                      </div>
                      <p className="text-gray-300">
                        TypeScript, React i nowoczesne praktyki developmentu
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-2 bg-purple-500/20 rounded-lg mt-1">
                        <IconLayoutDashboard className="h-5 w-5 text-purple-400" />
                      </div>
                      <p className="text-gray-300">
                        Architektura komponentów i struktura projektu
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-2 bg-orange-500/20 rounded-lg mt-1">
                        <IconPalette className="h-5 w-5 text-orange-400" />
                      </div>
                      <p className="text-gray-300">
                        System design tokens i zmienne CSS
                      </p>
                    </li>
                  </ul>

                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">
                      Komendy Developera
                    </h4>
                    <div className="text-sm text-gray-400 space-y-1 font-mono">
                      <p className="text-green-400">$ npm run dev</p>
                      <p className="text-gray-500">
                        ／／ Start development server
                      </p>
                      <p className="text-green-400">$ npm run build</p>
                      <p className="text-gray-500">／／ Build for production</p>
                      <p className="text-green-400">$ npm run export</p>
                      <p className="text-gray-500">／／ Export static site</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 overflow-hidden">
                  <div className="aspect-video bg-linear-to-br from-green-900/20 to-emerald-900/20 rounded-xl flex items-center justify-center mb-6">
                    <div className="text-center">
                      <IconBrandGithub className="h-20 w-20 text-green-400 mx-auto mb-4" />
                      <p className="text-gray-400">GitHub Repository</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Publiczne repozytorium kodu
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        100%
                      </div>
                      <div className="text-sm text-gray-400">Open Source</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400 mb-1">
                        MIT
                      </div>
                      <div className="text-sm text-gray-400">License</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400 mb-1">
                        CI/CD
                      </div>
                      <div className="text-sm text-gray-400">
                        GitHub Actions
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                      <div className="text-2xl font-bold text-orange-400 mb-1">
                        Static
                      </div>
                      <div className="text-sm text-gray-400">Export</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-cyan-400">Zespół</span> Rozwojowy
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ludzie i AI zaangażowani w tworzenie tego projektu
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <AnimatedTooltip items={developmentTeam} />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Osiągnięcia Projektu
                </h3>
                <p className="text-gray-300">
                  Udowodniliśmy, że współpraca człowieka z AI może przyspieszyć
                  rozwój o 300%, tworząc w pełni funkcjonalną, nowoczesną stronę
                  portfolio w rekordowym czasie.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    300%
                  </div>
                  <div className="text-gray-400">Szybszy rozwój z AI</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    &lt;1s
                  </div>
                  <div className="text-gray-400">Czas ładowania</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    95+
                  </div>
                  <div className="text-gray-400">Score Lighthouse</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">
                Portfolio Website
              </h3>
              <p className="text-gray-500">Next.js + AI Development Project</p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Powrót do Strony Głównej
              </Link>
              <Link
                href="/projects/warehouse-robot"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Warehouse Robot →
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-900 text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Portfolio Development. Demonstracja
              nowoczesnego developmentu frontend z wykorzystaniem AI.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
