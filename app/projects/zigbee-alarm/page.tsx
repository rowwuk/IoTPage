"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  IconArrowRight,
  IconBolt,
  IconCamera,
  IconCloud,
  IconDeviceMobile,
  IconFingerprint,
  IconShield,
  IconUsers,
  IconWifi,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ZigBeeAlarmPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Sebastian Szymański",
      designation: "Lead Developer",
      image: "../user.jpg",
    },
    {
      id: 2,
      name: "Cezary Piernikowski",
      designation: "Hardware Engineer",
      image: "../user.jpg",
    },
    {
      id: 3,
      name: "Kamil Łania",
      designation: "Systems Architect",
      image: "../user.jpg",
    },
    {
      id: 4,
      name: "Tomasz Siudmiak",
      designation: "Security Specialist",
      image: "../user.jpg",
    },
  ];

  const technologyStack = [
    {
      id: 1,
      name: "Raspberry Pi 5",
      icon: <IconBolt className="h-8 w-8 text-green-500" />,
      description: "Main processing unit running the entire system",
    },
    {
      id: 2,
      name: "ZigBee2MQTT",
      icon: <IconWifi className="h-8 w-8 text-blue-500" />,
      description: "ZigBee to MQTT bridge for device communication",
    },
    {
      id: 3,
      name: "MQTT Broker",
      icon: <IconCloud className="h-8 w-8 text-purple-500" />,
      description: "Message broker for IoT communication protocol",
    },
    {
      id: 4,
      name: "Flask + Python",
      icon: <IconShield className="h-8 w-8 text-yellow-500" />,
      description: "Backend server framework",
    },
    {
      id: 5,
      name: "RFID & Face ID",
      icon: <IconFingerprint className="h-8 w-8 text-red-500" />,
      description: "Multi-factor authentication methods",
    },
    {
      id: 6,
      name: "Telegram Bot",
      icon: <IconDeviceMobile className="h-8 w-8 text-cyan-500" />,
      description: "Remote control and notifications",
    },
  ];

  const systemFlow = [
    {
      id: 1,
      name: "Włączenie",
      content: "Inicjalizacja systemu i sekwencja uruchamiania sprzętu",
    },
    {
      id: 2,
      name: "Uruchomienie Serwera",
      content: "Inicjalizacja brokera MQTT i serwera internetowego Flask",
    },
    {
      id: 3,
      name: "Wykrywanie Czujników",
      content: "Czujniki ZigBee wysyłają dane o ruchu w czasie rzeczywistym",
    },
    {
      id: 4,
      name: "Przetwarzanie Danych",
      content: "Broker odbiera i przetwarza subskrybowane tematy",
    },
    {
      id: 5,
      name: "Kontrola Bezpieczeństwa",
      content:
        "System sprawdza stan uzbrojenia alarmu i uprawnienia użytkownika",
    },
    {
      id: 6,
      name: "Wyzwalacz Akcji",
      content: "Włączenie alarmu w przypadku wykrycia ruchu podczas uzbrojenia",
    },
  ];

  const features = [
    {
      title: "Integracja Bota Telegram",
      description:
        "Zdalne sterowanie alarmem za pomocą wiadomości Telegram - uzbrajanie/rozbrajanie, sprawdzanie statusu i powiadomienia w czasie rzeczywistym z dowolnego miejsca.",
      icon: <IconDeviceMobile className="h-10 w-10" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "System Wieloużytkownikowy",
      description:
        "Indywidualne konta z różnymi poziomami uprawnień umożliwiające spersonalizowaną kontrolę dostępu i ustawienia alarmów.",
      icon: <IconUsers className="h-10 w-10" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Uwierzytelnianie Za Pomocą Face ID",
      description:
        "Moduł rozpoznawania twarzy do autoryzacji użytkownika bez hasła za pomocą kamery, zwiększający bezpieczeństwo i wygodę.",
      icon: <IconCamera className="h-10 w-10" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Sieć Bezprzewodowa ZigBee",
      description:
        "Niezawodna, energooszczędna komunikacja bezprzewodowa między czujnikami a centralnym hubem, umożliwiająca elastyczną instalację.",
      icon: <IconWifi className="h-10 w-10" />,
      color: "from-orange-500 to-red-500",
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
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7522609/pexels-photo-7522609.jpeg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/60 to-green-900/30" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                Projekt Bezpiecznego Systemu IoT ZigBee
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                System Alarmowy ZigBee
              </span>
            </h1>

            <div className="h-1 w-32 bg-linear-to-r from-green-500 to-emerald-500 mx-auto rounded-full mb-8" />

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Zaawansowane zabezpieczenia domu oparte na technologii IoT z
              uwierzytelnianiem wieloskładnikowym, zdalnym zarządzaniem i
              monitorowaniem w czasie rzeczywistym
            </p>

            {/* Project Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                "ZigBee",
                "IoT Security",
                "Multi-factor Auth",
                "Telegram Bot",
                "Face ID",
                "Raspberry Pi",
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
                <button className="px-10 py-4 rounded-full w-full bg-linear-to-b from-green-600 to-emerald-600 text-white font-medium text-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300">
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
              Rozbudowa istniejącego systemu alarmowego opartego na Raspberry Pi
              z protokołami ZigBee i MQTT, dodająca nowe funkcje przydatne dla
              użytkowników alarmów.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Główne Cele
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg mt-1">
                      <IconShield className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-gray-300">
                      Rozszerzenie istniejącego systemu alarmowego o
                      zaawansowane funkcje
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg mt-1">
                      <IconWifi className="h-5 w-5 text-blue-400" />
                    </div>
                    <p className="text-gray-300">
                      Wdrożenie zdalnego sterowania za pomocą bota Telegram
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg mt-1">
                      <IconUsers className="h-5 w-5 text-purple-400" />
                    </div>
                    <p className="text-gray-300">
                      Dodaj zarządzanie wieloma użytkownikami z poziomami
                      uprawnień
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-cyan-500/20 rounded-lg mt-1">
                      <IconCamera className="h-5 w-5 text-cyan-400" />
                    </div>
                    <p className="text-gray-300">
                      Zintegruj funkcję Face ID, aby zwiększyć bezpieczeństwo
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Stos Technologiczny
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {technologyStack.map((tech) => (
                  <motion.div
                    key={tech.id}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-green-500 transition-colors"
                  >
                    <div className="flex justify-center mb-3">{tech.icon}</div>
                    <h4 className="font-bold text-white mb-1">{tech.name}</h4>
                    <p className="text-sm text-gray-400">{tech.description}</p>
                  </motion.div>
                ))}
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

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Sensor Layer */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-center"
                >
                  <div className="p-4 bg-blue-900/30 rounded-2xl border border-blue-800 mb-4">
                    <IconWifi className="h-12 w-12 text-blue-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    ZigBee Sensors
                  </h3>
                  <p className="text-gray-400">
                    Motion detection and environmental monitoring
                  </p>
                </motion.div>

                {/* Processing Layer */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="p-4 bg-green-900/30 rounded-2xl border border-green-800 mb-4">
                      <IconBolt className="h-12 w-12 text-green-400 mx-auto" />
                    </div>
                    <div className="absolute -inset-2 bg-linear-to-r from-blue-500 to-green-500 rounded-2xl blur-lg opacity-20 -z-10"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Raspberry Pi 5
                  </h3>
                  <p className="text-gray-400">
                    MQTT Broker + ZigBee2MQTT + Flask Server
                  </p>
                </motion.div>

                {/* Interface Layer */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-center"
                >
                  <div className="p-4 bg-purple-900/30 rounded-2xl border border-purple-800 mb-4">
                    <IconDeviceMobile className="h-12 w-12 text-purple-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Web App & Telegram
                  </h3>
                  <p className="text-gray-400">
                    Remote control and alarm management
                  </p>
                </motion.div>
              </div>

              {/* Connection Lines */}
              <div className="hidden md:block mt-12">
                <div className="flex items-center justify-between px-8">
                  <div className="h-0.5 flex-1 bg-linear-to-r from-transparent via-blue-500 to-green-500"></div>
                  <div className="h-0.5 flex-1 bg-linear-to-r from-green-500 via-green-500 to-purple-500"></div>
                </div>
              </div>

              {/* Workflow */}
              <div className="pt-4">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  System Workflow
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {systemFlow.map((step, index) => (
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
                        <div className="absolute inset-0 bg-linear-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Step number */}
                        <div className="inline-block px-4 py-2 mb-4 bg-gra≤`≥dient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30">
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
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-green-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Advanced <span className="text-purple-400">Features</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-linear-to-r rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full">
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
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-20 bg-linear-to-b from-transparent to-gray-900/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Development <span className="text-cyan-400">Team</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The talented group of students behind this innovative IoT security
              system
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <AnimatedTooltip items={teamMembers} />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              This project was developed as part of our university coursework,
              demonstrating practical application of IoT protocols, embedded
              systems, and security principles in a real-world home automation
              scenario.
            </p>
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
                        Monitorowanie czujników w czasie rzeczywistym
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        Interakcja z botem Telegram
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                        Uwierzytelnianie za pomocą Face ID
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <div className="h-2 w-2 bg-cyan-500 rounded-full"></div>
                        Kontrola dostępu wielu użytkowników
                      </li>
                    </ul>
                    <Link href="/">
                      <button className="w-full py-3 px-6 bg-linear-to-r from-green-600 to-blue-600 rounded-xl text-white font-medium hover:opacity-90 transition-opacity">
                        Zobacz Inne Projekty
                      </button>
                    </Link>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <a href="../presentations/zigbee-alarm.pdf">
                      <div
                        className="aspect-video bg-gray-800/50 rounded-lg flex items-center justify-center mb-4"
                        style={{
                          backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
                            url('../presentations/zigbee-alarm-thumb.jpg')`,
                          backgroundSize: `cover`,
                        }}
                      >
                        <div className="text-center">
                          <p className="text-white-400">Zobacz Prezentację</p>
                        </div>
                      </div>
                    </a>
                    <p className="text-gray-400 text-sm text-center">
                      System sterowania alarmem oparty na Raspberry Pi
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
                System Alarmowy ZigBee
              </h3>
              <p className="text-gray-500">
                Projekt Bezpiecznego Systemu IoT ZigBee
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
                href="/projects/warehouse-robot"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Warehouse Robot →
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
