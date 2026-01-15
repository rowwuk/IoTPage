// app/projects/zigbee-alarm/page.tsx
"use client";

import { LampContainer } from "@/components/ui/lamp";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardStack } from "@/components/ui/card-stack";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  IconArrowLeft,
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
      image: "/team/sebastian.jpg",
    },
    {
      id: 2,
      name: "Cezary Piernikowski",
      designation: "Hardware Engineer",
      image: "/team/cezary.jpg",
    },
    {
      id: 3,
      name: "Kamil Łania",
      designation: "Systems Architect",
      image: "/team/kamil.jpg",
    },
    {
      id: 4,
      name: "Tomasz Siudmiak",
      designation: "Security Specialist",
      image: "/team/tomasz.jpg",
    },
  ];

  const navItems = [
    { name: "Home", link: "/", icon: <IconArrowLeft className="h-4 w-4" /> },
    { name: "Overview", link: "#overview" },
    { name: "Architecture", link: "#architecture" },
    { name: "Features", link: "#features" },
    { name: "Team", link: "#team" },
    { name: "Demo", link: "#demo" },
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
      name: "Power On",
      content: "System initialization and hardware boot sequence",
    },
    {
      id: 2,
      name: "Server Start",
      content: "MQTT broker and Flask web server initialization",
    },
    {
      id: 3,
      name: "Sensor Detection",
      content: "ZigBee sensors send real-time movement data",
    },
    {
      id: 4,
      name: "Data Processing",
      content: "Broker receives and processes subscribed topics",
    },
    {
      id: 5,
      name: "Security Check",
      content: "System checks alarm arming status and user permissions",
    },
    {
      id: 6,
      name: "Action Trigger",
      content: "Alarm activation if movement detected while armed",
    },
  ];

  const features = [
    {
      title: "Telegram Bot Integration",
      description:
        "Remote alarm control via Telegram messages - arm/disarm, status checks, and real-time notifications from anywhere.",
      icon: <IconDeviceMobile className="h-10 w-10" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Multi-User System",
      description:
        "Individual accounts with different permission levels for personalized access control and alarm settings.",
      icon: <IconUsers className="h-10 w-10" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Face ID Authentication",
      description:
        "Face recognition module for password-free user authorization using camera, enhancing security and convenience.",
      icon: <IconCamera className="h-10 w-10" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "ZigBee Wireless Network",
      description:
        "Reliable, low-power wireless communication between sensors and the central hub for flexible installation.",
      icon: <IconWifi className="h-10 w-10" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  if (!isClient) return null;

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <BackgroundBeams />

      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} className="z-50" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          <LampContainer>
            <h1 className="mt-8 bg-gradient-to-br from-green-400 to-blue-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
              ZigBee Alarm System
            </h1>
          </LampContainer>

          <div className="mt-8 text-center">
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced IoT-based monitoring and control system with multi-factor
              authentication and remote management
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#demo">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-black text-white flex items-center space-x-2 px-6 py-3"
              >
                <span>View Live Demo</span>
                <IconArrowRight className="h-4 w-4" />
              </HoverBorderGradient>
            </Link>
            <Link href="#architecture">
              <button className="px-8 py-3 rounded-full bg-gradient-to-b from-green-500 to-green-600 text-white font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300">
                System Architecture
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Project <span className="text-green-400">Overview</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              An expansion of the existing alarm system based on Raspberry Pi
              with ZigBee and MQTT protocols, adding new features useful for
              alarm users.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Core Objectives
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg mt-1">
                      <IconShield className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-gray-300">
                      Extend existing alarm system with advanced features
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg mt-1">
                      <IconWifi className="h-5 w-5 text-blue-400" />
                    </div>
                    <p className="text-gray-300">
                      Implement remote control via Telegram bot
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg mt-1">
                      <IconUsers className="h-5 w-5 text-purple-400" />
                    </div>
                    <p className="text-gray-300">
                      Add multi-user management with permission levels
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-cyan-500/20 rounded-lg mt-1">
                      <IconCamera className="h-5 w-5 text-cyan-400" />
                    </div>
                    <p className="text-gray-300">
                      Integrate Face ID for enhanced security
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Technology Stack
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
        className="py-20 bg-gradient-to-b from-transparent to-gray-900/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              System <span className="text-blue-400">Architecture</span>
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
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur-lg opacity-20 -z-10"></div>
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
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-blue-500 to-green-500"></div>
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-green-500 via-green-500 to-purple-500"></div>
                </div>
              </div>

              {/* System Flow */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  System Workflow
                </h3>
                <CardStack items={systemFlow} />
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
                <div className="absolute -inset-0.5 bg-gradient-to-r rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${feature.color}`}
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
        className="py-20 bg-gradient-to-b from-transparent to-gray-900/30"
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
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12 overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                  Live System Demonstration
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Experience the System
                    </h3>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-3 text-gray-300">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Real-time sensor monitoring
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        Telegram bot interaction
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                        Face ID authentication demo
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <div className="h-2 w-2 bg-cyan-500 rounded-full"></div>
                        Multi-user access control
                      </li>
                    </ul>
                    <Link href="/projects">
                      <button className="w-full py-3 px-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl text-white font-medium hover:opacity-90 transition-opacity">
                        View Other Projects
                      </button>
                    </Link>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <div className="aspect-video bg-gray-800/50 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🚀</div>
                        <p className="text-gray-400">System Demo Interface</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm text-center">
                      Interactive demonstration of the ZigBee alarm system
                      functionality
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
                ZigBee Alarm System
              </h3>
              <p className="text-gray-500">University IoT Project</p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Back to Home
              </Link>
              <Link
                href="#overview"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Project Overview
              </Link>
              <Link
                href="#team"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Meet the Team
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-900 text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} University IoT Innovation Lab. This
              project demonstrates practical application of IoT technologies.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
