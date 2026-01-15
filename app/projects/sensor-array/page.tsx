// app/projects/sensor-array/page.tsx
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
  IconTemperature,
  IconDroplets,
  IconWind,
  IconSun,
  IconCloud,
  IconCircuitBattery,
  IconDatabase,
  IconChartLine,
  IconEye,
  IconBroadcast,
  IconCpu,
  IconSeo,
  IconWash,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SensorArrayPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  const sensorModules = [
    {
      id: 1,
      name: "Flame Sensor",
      description: "Fire detection and flame monitoring",
      icon: <IconWash className="h-6 w-6 text-red-500" />,
      color: "from-red-500 to-orange-500",
    },
    {
      id: 2,
      name: "Color Sensor",
      description: "RGB color detection and analysis",
      icon: <IconEye className="h-6 w-6 text-purple-500" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Soil Moisture",
      description: "Ground humidity level measurement",
      icon: <IconDroplets className="h-6 w-6 text-blue-500" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      name: "Rotation Sensor",
      description: "Angular position and speed detection",
      icon: <IconWind className="h-6 w-6 text-green-500" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      name: "Sound Sensor",
      description: "Audio level and frequency monitoring",
      icon: <IconBroadcast className="h-6 w-6 text-yellow-500" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      name: "Liquid Level",
      description: "Fluid depth and volume measurement",
      icon: <IconDroplets className="h-6 w-6 text-cyan-500" />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 7,
      name: "Temperature",
      description: "Ambient temperature monitoring",
      icon: <IconTemperature className="h-6 w-6 text-red-500" />,
      color: "from-red-500 to-pink-500",
    },
    {
      id: 8,
      name: "Light Sensor",
      description: "Illumination level detection",
      icon: <IconSun className="h-6 w-6 text-yellow-500" />,
      color: "from-yellow-500 to-amber-500",
    },
    {
      id: 9,
      name: "Pressure Sensor",
      description: "Atmospheric pressure measurement",
      icon: <IconCloud className="h-6 w-6 text-gray-500" />,
      color: "from-gray-500 to-blue-500",
    },
  ];

  const navItems = [
    { name: "Home", link: "/", icon: <IconArrowLeft className="h-4 w-4" /> },
    { name: "Overview", link: "#overview" },
    { name: "Sensors", link: "#sensors" },
    { name: "Architecture", link: "#architecture" },
    { name: "Data Flow", link: "#dataflow" },
    { name: "Applications", link: "#applications" },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Sensor Systems Lead",
      designation: "Hardware Integration",
      image: "/team/sensor1.jpg",
    },
    {
      id: 2,
      name: "Data Analytics",
      designation: "ESP32 Programming",
      image: "/team/sensor2.jpg",
    },
    {
      id: 3,
      name: "Environmental Analysis",
      designation: "Weather Monitoring",
      image: "/team/sensor3.jpg",
    },
    {
      id: 4,
      name: "System Architecture",
      designation: "STM32 Integration",
      image: "/team/sensor4.jpg",
    },
  ];

  const hardwareComponents = [
    {
      name: "Waveshare Sensor Kit",
      description: "13-module Arduino-compatible sensor array with cables",
      specs: [
        "13 different sensors",
        "Female connector cables",
        "Arduino compatible",
        "Educational kit",
      ],
      link: "https://botland.com.pl/zestawy-czujnikow/4511-zestaw-13-modulow-z-przewodami-do-arduino-waveshare-9467-5904422309596.html",
    },
    {
      name: "ELEGOO Electronics Kit",
      description: "Upgraded electronic fun kit with comprehensive tutorials",
      specs: [
        "Learning kit",
        "Multiple projects",
        "Beginner friendly",
        "Complete tutorials",
      ],
      link: "https://www.elegoo.com/blogs/arduino-projects/elegoo-electronic-fun-kit-upgraded-electronic-fun-kit-tutorial",
    },
    {
      name: "STM32F446RE",
      description: "High-performance ARM Cortex-M4 microcontroller",
      specs: [
        "180 MHz CPU",
        "512 KB Flash",
        "128 KB RAM",
        "Advanced peripherals",
      ],
      link: "https://www.st.com/en/microcontrollers-microprocessors/stm32f446re.html",
    },
    {
      name: "ESP32 Microcontroller",
      description: "Dual-core processor with Wi-Fi and Bluetooth capabilities",
      specs: [
        "Wi-Fi & Bluetooth",
        "Dual-core 240 MHz",
        "Rich peripherals",
        "Low power",
      ],
      link: "#",
    },
  ];

  const dataFlowSteps = [
    {
      id: 1,
      name: "Environmental Sensing",
      content:
        "Multiple sensor modules continuously monitor various environmental parameters in real-time",
    },
    {
      id: 2,
      name: "Data Acquisition",
      content:
        "STM32 and Arduino systems read analog/digital signals from all connected sensors",
    },
    {
      id: 3,
      name: "Signal Processing",
      content:
        "Raw sensor data is filtered, calibrated, and converted to meaningful measurements",
    },
    {
      id: 4,
      name: "Data Transmission",
      content:
        "Processed data is sent via ESP32 to cloud services or local storage systems",
    },
    {
      id: 5,
      name: "Analysis & Visualization",
      content:
        "Data is analyzed, patterns are identified, and results are visualized on dashboards",
    },
    {
      id: 6,
      name: "Control Actions",
      content:
        "System can trigger automated responses based on sensor readings and predefined rules",
    },
  ];

  const potentialApplications = [
    {
      title: "Smart Agriculture",
      description:
        "Monitor soil conditions, automate irrigation, and optimize crop growth",
      icon: <IconDroplets className="h-8 w-8" />,
      metrics: ["Soil moisture", "Temperature", "Light levels", "Humidity"],
    },
    {
      title: "Environmental Monitoring",
      description:
        "Track air quality, weather patterns, and pollution levels in real-time",
      icon: <IconCloud className="h-8 w-8" />,
      metrics: ["Air quality", "Pressure", "Rainfall", "Wind speed"],
    },
    {
      title: "Smart Home Automation",
      description:
        "Create responsive environments based on occupancy, light, and temperature",
      icon: <IconTemperature className="h-8 w-8" />,
      metrics: ["Room occupancy", "Light levels", "Temperature", "Sound"],
    },
    {
      title: "Industrial Monitoring",
      description:
        "Monitor equipment conditions, detect anomalies, and prevent failures",
      icon: <IconCircuitBattery className="h-8 w-8" />,
      metrics: ["Vibration", "Temperature", "Pressure", "Liquid levels"],
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
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          <LampContainer>
            <h1 className="mt-8 bg-gradient-to-br from-cyan-400 via-purple-400 to-blue-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
              Environmental Sensor Array
            </h1>
          </LampContainer>

          <div className="mt-8 text-center">
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IoT sensor network for real-time environmental
              monitoring, data collection, and automated control systems
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#sensors">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-black text-white flex items-center space-x-2 px-6 py-3"
              >
                <span>Explore Sensors</span>
                <IconArrowRight className="h-4 w-4" />
              </HoverBorderGradient>
            </Link>
            <Link href="#applications">
              <button className="px-8 py-3 rounded-full bg-gradient-to-b from-purple-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                View Applications
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
              Project <span className="text-cyan-400">Overview</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A flexible IoT platform integrating multiple sensor modules with
              advanced microcontrollers for environmental monitoring and data
              analysis
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative">
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Core Concept
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      This project explores the integration of multiple sensor
                      technologies with modern microcontrollers to create a
                      versatile environmental monitoring system.
                    </p>
                    <p className="text-gray-300">
                      By combining various sensor modules with STM32 and ESP32
                      platforms, we can collect comprehensive environmental data
                      and enable intelligent control systems.
                    </p>
                    <div className="pt-4 border-t border-gray-800">
                      <h4 className="font-bold text-white mb-3">
                        Primary Focus Areas:
                      </h4>
                      <ul className="grid grid-cols-2 gap-3">
                        <li className="flex items-center gap-2 text-gray-300">
                          <div className="h-2 w-2 bg-cyan-500 rounded-full"></div>
                          Data Acquisition
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                          <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                          Sensor Integration
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                          <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                          Real-time Monitoring
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                          <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                          Automated Control
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Hardware Platform
                </h3>
                <div className="space-y-4">
                  {hardwareComponents.map((component, index) => (
                    <motion.a
                      key={component.name}
                      href={component.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="block group"
                    >
                      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {component.name}
                          </h4>
                          <IconArrowRight className="h-4 w-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <p className="text-gray-400 text-sm mb-3">
                          {component.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {component.specs.map((spec, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensors Section */}
      <section
        id="sensors"
        className="py-20 bg-gradient-to-b from-transparent to-gray-900/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sensor <span className="text-purple-400">Modules</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Comprehensive collection of environmental sensors for
              multi-parameter monitoring
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sensorModules.map((sensor, index) => (
                <motion.div
                  key={sensor.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div
                    className={`bg-gradient-to-br ${sensor.color} p-0.5 rounded-xl`}
                  >
                    <div className="bg-gray-900 rounded-xl p-5 h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-gray-800">
                          {sensor.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg">
                            {sensor.name}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {sensor.description}
                          </p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-gray-800">
                        <div className="text-xs text-gray-500">
                          Sample Applications
                        </div>
                        <div className="mt-2 flex gap-2">
                          {["Monitoring", "Detection", "Control"].map(
                            (tag, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300"
                              >
                                {tag}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sensor Network Visualization */}
            <div className="mt-16">
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Sensor Network Architecture
                </h3>
                <div className="flex flex-col items-center">
                  <div className="relative w-full max-w-3xl">
                    {/* Central Hub */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="p-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full">
                        <IconCpu className="h-12 w-12 text-white" />
                      </div>
                      <div className="text-center mt-4">
                        <div className="font-bold text-white">
                          ESP32/STM32 Hub
                        </div>
                        <div className="text-sm text-gray-400">
                          Central Processor
                        </div>
                      </div>
                    </div>

                    {/* Sensor Nodes */}
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="absolute"
                        style={{
                          top: `${50 + 40 * Math.sin((i * Math.PI) / 2)}%`,
                          left: `${50 + 40 * Math.cos((i * Math.PI) / 2)}%`,
                        }}
                      >
                        <div className="p-4 bg-gray-800 rounded-xl border border-cyan-800">
                          <IconSeo className="h-8 w-8 text-cyan-400" />
                        </div>
                      </div>
                    ))}

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      {[0, 1, 2, 3].map((i) => (
                        <line
                          key={i}
                          x1="50%"
                          y1="50%"
                          x2={`${50 + 40 * Math.cos((i * Math.PI) / 2)}%`}
                          y2={`${50 + 40 * Math.sin((i * Math.PI) / 2)}%`}
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          strokeDasharray="4"
                        />
                      ))}
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#22d3ee"
                            stopOpacity="0.5"
                          />
                          <stop
                            offset="100%"
                            stopColor="#8b5cf6"
                            stopOpacity="0.5"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-gray-400 text-center mt-12 max-w-2xl">
                    Distributed sensor network with centralized data processing.
                    Multiple sensor modules communicate with the main controller
                    which aggregates, processes, and transmits data for
                    analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Flow Section */}
      <section id="dataflow" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Data <span className="text-blue-400">Processing Pipeline</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <CardStack items={dataFlowSteps} />
          </div>

          {/* Real-time Visualization */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Real-time Data Dashboard
                  </h3>
                  <p className="text-gray-300 mb-6">
                    The system provides comprehensive visualization of sensor
                    data through interactive dashboards, enabling real-time
                    monitoring and analysis.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <IconChartLine className="h-6 w-6 text-green-400" />
                      <div>
                        <div className="font-bold text-white">
                          Live Data Streaming
                        </div>
                        <div className="text-sm text-gray-400">
                          Real-time sensor readings and trends
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <IconDatabase className="h-6 w-6 text-blue-400" />
                      <div>
                        <div className="font-bold text-white">
                          Historical Analysis
                        </div>
                        <div className="text-sm text-gray-400">
                          Long-term data storage and pattern recognition
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <IconBroadcast className="h-6 w-6 text-purple-400" />
                      <div>
                        <div className="font-bold text-white">Alert System</div>
                        <div className="text-sm text-gray-400">
                          Automated notifications for critical conditions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6">
                    <div className="aspect-video bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <IconChartLine className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
                        <p className="text-gray-400">
                          Data Visualization Dashboard
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <div className="text-xl font-bold text-cyan-400 mb-1">
                          13+
                        </div>
                        <div className="text-xs text-gray-400">
                          Sensor Types
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <div className="text-xl font-bold text-green-400 mb-1">
                          24/7
                        </div>
                        <div className="text-xs text-gray-400">Monitoring</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <div className="text-xl font-bold text-purple-400 mb-1">
                          Real-time
                        </div>
                        <div className="text-xs text-gray-400">Updates</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section
        id="applications"
        className="py-20 bg-gradient-to-b from-transparent to-gray-900/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Potential <span className="text-green-400">Applications</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Versatile platform adaptable to various environmental monitoring
              and control scenarios
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {potentialApplications.map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                        {app.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {app.title}
                        </h3>
                        <p className="text-gray-300">{app.description}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                      <h4 className="font-bold text-white mb-3">
                        Monitored Parameters
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {app.metrics.map((metric, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Development <span className="text-cyan-400">Team</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The team exploring sensor technologies and IoT integration for
              environmental monitoring
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <AnimatedTooltip items={teamMembers} />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Project Flexibility
              </h3>
              <p className="text-gray-300 leading-relaxed">
                This project serves as a foundational platform for exploring
                sensor technologies. The modular design allows for easy
                expansion with additional sensors, integration with different
                microcontrollers, and adaptation to specific monitoring
                scenarios as research progresses.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-cyan-400">
                <IconArrowRight className="h-4 w-4" />
                <span>More details to be added as project develops</span>
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
                Environmental Sensor Array
              </h3>
              <p className="text-gray-500">University IoT Research Project</p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Back to Home
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
              © {new Date().getFullYear()} University IoT Research Lab. Modular
              sensor platform for environmental monitoring and data analysis.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
