"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  IconArrowRight,
  IconRobot,
  IconMap,
  IconRoute,
  IconRadar2,
  IconCpu,
  IconEngine,
  IconCode,
  IconNetwork,
  IconGauge,
  Icon3dCubeSphere,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WarehouseRobotPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  const systemFeatures = [
    {
      id: 1,
      name: "Nawigacja Autonomiczna",
      description:
        "Samodzielne poruszanie się po płaskich powierzchniach magazynowych z wykorzystaniem zaawansowanego systemu wyznaczania tras",
      icon: <IconRoute className="h-8 w-8 text-green-500" />,
    },
    {
      id: 2,
      name: "Mapowanie w Czasie Rzeczywistym",
      description:
        "Ciągłe mapowanie otoczenia z rozdzielczością 5 cm przy użyciu algorytmów SLAM",
      icon: <IconMap className="h-8 w-8 text-blue-500" />,
    },
    {
      id: 3,
      name: "Wizualizacja w Unreal Engine",
      description:
        "Symulacja 3D i wizualizacja ruchu robota oraz środowiska magazynowego",
      icon: <IconEngine className="h-8 w-8 text-purple-500" />,
    },
    {
      id: 4,
      name: "Skanowanie LiDAR",
      description:
        "Precyzyjne skanowanie otoczenia za pomocą systemu Delta 2A LiDAR w celu dokładnego mapowania",
      icon: <IconRadar2 className="h-8 w-8 text-yellow-500" />,
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Gregorz Lademann",
      designation: "Hardware Engineer",
      image: "../user.jpg",
    },
    {
      id: 2,
      name: "Jakub Lidzbarski",
      designation: "Visualization Engineer",
      image: "../user.jpg",
    },
  ];

  const technologyStack = [
    {
      name: "ESP32-S3",
      description: "Główny mikrokontroler",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "SLAM Algorithms",
      description: "Jednoczesna lokalizacja i mapowanie",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "ROS",
      description: "System operacyjny robota",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Dijkstra",
      description: "Algorytm optymalnego wyznaczania trasy",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Unreal Engine 5",
      description: "Silnik wizualizacji 3D",
      color: "from-violet-500 to-purple-500",
    },
    {
      name: "Blender",
      description: "Program do modelowania 3D",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "WebSocket",
      description: "Protokół komunikacji w czasie rzeczywistym",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Python",
      description: "Język po stronie serwera",
      color: "from-emerald-500 to-green-500",
    },
    {
      name: "C++/Arduino",
      description: "Programowanie mikrokontrolerów",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const workflowSteps = [
    {
      id: 1,
      name: "Environment Scanning",
      content:
        "LiDAR skanuje środowisko magazynowe, tworząc wstępne dane chmury punktów",
    },
    {
      id: 2,
      name: "Map Generation",
      content:
        "Dane przetworzone do siatki o rozdzielczości 5 cm: 0 = wolne, 1 = zajęte, 3 = nieodkryte",
    },
    {
      id: 3,
      name: "Path Planning",
      content:
        "Algorytm Dijkstry oblicza optymalne trasy przez wolne przestrzenie",
    },
    {
      id: 4,
      name: "Autonomous Navigation",
      content: "Silniki krokowe wykonują precyzyjne ruchy wzdłuż zaplanowanych tras",
    },
    {
      id: 5,
      name: "Real-time Updates",
      content: "Ciągłe aktualizacje SLAM tworzą mapę w miarę jak robot bada nowe obszary",
    },
    {
      id: 6,
      name: "Visualization",
      content:
        "Silnik Unreal Engine wyświetla ruchy robotów i symulację magazynu w czasie rzeczywistym",
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
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/32778343/pexels-photo-32778343/free-photo-of-autonomous-delivery-robot-at-tech-conference.jpeg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/60 to-blue-900/30" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                Projekt Wizualizacji i Robotyki IoT
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Autonomiczny Robot Magazynowy
              </span>
            </h1>

            <div className="h-1 w-32 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8" />

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Inteligentny system robotyczny do autonomicznej nawigacji,
              mapowania w czasie rzeczywistym i wizualizacji 3D w środowiskach
              magazynowych
            </p>

            {/* Project Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                "Autonomous",
                "SLAM",
                "Unreal Engine",
                "LiDAR",
                "Robotics",
                "Pathfinding",
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
              <Link href="#demo">
                <HoverBorderGradient
                  containerClassName="rounded-full w-full"
                  as="button"
                  className="bg-black text-white flex items-center space-x-2 px-8 py-4 text-lg"
                >
                  <span>Zobacz Prezentację</span>
                  <IconArrowRight className="h-5 w-5" />
                </HoverBorderGradient>
              </Link>
              <Link href="#architecture">
                <button className="px-10 py-4 rounded-full w-full bg-linear-to-b from-cyan-600 to-blue-600 text-white font-medium text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300">
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
              <span className="text-green-400">Zarys Ogólny</span> Projektu
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Autonomiczny system robotyczny przeznaczony do środowisk
              magazynowych, wyposażony w funkcje mapowania w czasie
              rzeczywistym, planowania trasy oraz wizualizacji w silniku Unreal
              Engine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Podstawowe Możliwości
                </h3>
                <div className="space-y-6">
                  {systemFeatures.map((feature) => (
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
                Specyfikacje Systemu
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <IconGauge className="h-6 w-6 text-green-400" />
                    <h4 className="font-bold text-white">
                      Ograniczenia Wydajności
                    </h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Max Workspace Size:</span>
                      <span className="text-white">30×30 meters</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Maximum Speed:</span>
                      <span className="text-white">1 km/h</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Simultaneous Robots:</span>
                      <span className="text-white">Single robot control</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Map Resolution:</span>
                      <span className="text-white">5×5 cm grid</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <IconNetwork className="h-6 w-6 text-blue-400" />
                    <h4 className="font-bold text-white">Stos Komunikacyjny</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>WebSocket for real-time data transfer</li>
                    <li>Serial port for network configuration</li>
                    <li>MikroTik router with HP server</li>
                    <li>Windows-based control system</li>
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
                {/* Hardware Layer */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-linear-to-b from-green-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-gray-900 rounded-2xl p-6 border border-green-800">
                    <div className="text-center mb-4">
                      <IconRobot className="h-12 w-12 text-green-400 mx-auto mb-3" />
                      <h3 className="text-xl font-bold text-white">
                        Hardware Layer
                      </h3>
                      <p className="text-gray-400 mt-1">Physical Components</p>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        ESP32-S3 Microcontroller
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Delta 2A LiDAR Scanner
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Stepper Motors & Drivers
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Power Management System
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Processing Layer */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-linear-to-b from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-gray-900 rounded-2xl p-6 border border-blue-800">
                    <div className="text-center mb-4">
                      <IconCpu className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                      <h3 className="text-xl font-bold text-white">
                        Warstwa Przetwarzania
                      </h3>
                      <p className="text-gray-400 mt-1">
                        Inteligencja i Algorytmy
                      </p>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        Algorytm SLAM
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        Wyszukiwanie Ścieżki Dijkstry
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        Framework ROS
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        Mapowanie W Czasie Rzeczywistym
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Visualization Layer */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-linear-to-b from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-gray-900 rounded-2xl p-6 border border-purple-800">
                    <div className="text-center mb-4">
                      <Icon3dCubeSphere className="h-12 w-12 text-purple-400 mx-auto mb-3" />
                      <h3 className="text-xl font-bold text-white">
                        Warstwa Wizualizacji
                      </h3>
                      <p className="text-gray-400 mt-1">
                        Symulacja 3D i Interfejs
                      </p>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                        Unreal Engine 5
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                        3D Modele w Blenderze
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                        Interfejs Webowy Działający w Czasie Rzeczywistym
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                        Wizualizacja Mapy
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Connection Flow */}
              <div className="relative h-2 mx-8 mb-12">
                <div className="absolute inset-0 bg-linear-to-r from-green-500 via-blue-500 to-purple-500 rounded-full"></div>
                <div className="absolute -top-2 left-0 h-6 w-6 rounded-full bg-green-500"></div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-blue-500"></div>
                <div className="absolute -top-2 right-0 h-6 w-6 rounded-full bg-purple-500"></div>
              </div>

              {/* Workflow - Option 3 Cards */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Autonomiczny Przepływ Pracy
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {workflowSteps.map((step, index) => (
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
                        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Step number */}
                        <div className="inline-block px-4 py-2 mb-4 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
                          <span className="font-bold text-white">
                            Step {step.id}
                          </span>
                        </div>

                        {/* Content */}
                        <h4 className="text-xl font-bold text-white mb-3">
                          {step.name}
                        </h4>
                        <p className="text-gray-300">{step.content}</p>

                        {/* Bottom gradient line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
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
              <span className="text-purple-400">Stos</span> Technologiczny
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Kompleksowy zestaw technologii zasilających autonomicznego
              robota magazynowego
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

          {/* Programming Languages */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Języki Programowania
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-gray-800/50 rounded-xl">
                  <IconCode className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Python</h4>
                  <p className="text-gray-400">
                    Logika po stronie serwera, przetwarzanie danych i implementacja algorytmów
                  </p>
                  <div className="mt-4 inline-block px-4 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">
                    Podstawowy Język Serwera
                  </div>
                </div>
                <div className="text-center p-6 bg-gray-800/50 rounded-xl">
                  <IconCode className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">
                    C++ / Arduino
                  </h4>
                  <p className="text-gray-400">
                    Programowanie mikrokontrolerów do sterowania sprzętem w czasie rzeczywistym
                  </p>
                  <div className="mt-4 inline-block px-4 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">
                    Embedded Systems
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="specs" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-green-400">Zespół</span> Deweloperski
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Wielodyscyplinarny zespół odpowiedzialny za ten zaawansowany autonomiczny
              system robotyki
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <AnimatedTooltip items={teamMembers} />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Osiągnięcia Projektu
                </h3>
                <p className="text-gray-300">
                  Pomyślnie zintegrowaliśmy czujniki sprzętowe z zaawansowanymi
algorytmami i wizualizacją w czasie rzeczywistym, tworząc kompletny
autonomiczny system nawigacji dla środowisk magazynowych.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    100%
                  </div>
                  <div className="text-gray-400">Autonomous Navigation</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    5cm
                  </div>
                  <div className="text-gray-400">Mapping Precision</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    Real-time
                  </div>
                  <div className="text-gray-400">3D Visualization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12 overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                  Oryginalna Prezentacja
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Poznaj System
                    </h3>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-3 text-gray-300">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Nawigacja autonomiczna
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        Mapowanie w czasie rzeczywistym
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                        Wizualizacja w silniku Unreal Engine
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <div className="h-2 w-2 bg-cyan-500 rounded-full"></div>
                        Skanowanie LiDAR
                      </li>
                    </ul>
                    <Link href="/">
                      <button className="w-full py-3 px-6 bg-linear-to-r from-green-600 to-blue-600 rounded-xl text-white font-medium hover:opacity-90 transition-opacity">
                        Zobacz Inne Projekty
                      </button>
                    </Link>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <a href="../presentations/warehouse-robot.pdf">
                      <div
                        className="aspect-video bg-gray-800/50 rounded-lg flex items-center justify-center mb-4"
                        style={{
                          backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
                            url('../presentations/warehouse-robot-thumb.jpg')`,
                          backgroundSize: `cover`,
                        }}
                      >
                        <div className="text-center">
                          <p className="text-white-400">Zobacz Prezentację</p>
                        </div>
                      </div>
                    </a>
                    <p className="text-gray-400 text-sm text-center">
                      Autonomiczny robot magazynowy
                    </p>
                  </div>
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
                Autonomiczny Robot Magazynowy
              </h3>
              <p className="text-gray-500">
                Projekt Wizualizacji i Robotyki IoT
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Powrót do Strony Głównej
              </Link>
              <Link
                href="/projects/sensor-array"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sensor Array →
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-900 text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Jarosław Wojciuk, Aplikacje Internetu
              Rzeczy
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
