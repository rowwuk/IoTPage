// app/projects/sensor-array/page.tsx
"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  IconArrowRight,
  IconTemperature,
  IconDroplets,
  IconCloud,
  IconDatabase,
  IconChartLine,
  IconCpu,
  IconSeo,
  IconWifi,
  IconChartAreaLine,
  IconServer,
  IconAlertCircle,
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
      name: "BME680",
      description: "Temperature, humidity, pressure & air quality",
      icon: <IconCloud className="h-6 w-6 text-cyan-500" />,
      color: "from-cyan-500 to-blue-500",
      features: ["Temperature", "Humidity", "Pressure", "Air Quality"],
    },
    {
      id: 2,
      name: "DHT11",
      description: "Temperature and humidity sensor",
      icon: <IconTemperature className="h-6 w-6 text-red-500" />,
      color: "from-red-500 to-orange-500",
      features: ["Temperature", "Humidity"],
    },
    {
      id: 3,
      name: "Soil Moisture",
      description: "Ground humidity level measurement",
      icon: <IconDroplets className="h-6 w-6 text-green-500" />,
      color: "from-green-500 to-emerald-500",
      features: ["Soil Humidity", "Plant Health"],
    },
  ];

  const technologyStack = [
    {
      name: "ESP8266",
      description: "Main measurement node with Wi-Fi",
      icon: <IconCpu className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Python + Flask",
      description: "Application server backend",
      icon: <IconServer className="h-8 w-8" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "InfluxDB 3 Core",
      description: "Time-series database",
      icon: <IconDatabase className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "UDP Broadcast",
      description: "Wi-Fi communication protocol",
      icon: <IconWifi className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "HTML/CSS/JS",
      description: "Frontend visualization",
      icon: <IconChartAreaLine className="h-8 w-8" />,
      color: "from-red-500 to-pink-500",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Michał Kowalczyk",
      designation: "Project Lead",
      image: "/team/sensor1.jpg",
    },
    {
      id: 2,
      name: "Krystian Kowalski",
      designation: "Hardware Engineer",
      image: "/team/sensor2.jpg",
    },
    {
      id: 3,
      name: "Filip Jorka",
      designation: "Backend Developer",
      image: "/team/sensor3.jpg",
    },
    {
      id: 4,
      name: "Kamil Grzybek",
      designation: "Frontend Developer",
      image: "/team/sensor4.jpg",
    },
  ];

  const systemFeatures = [
    {
      id: 1,
      name: "Real-time Data Collection",
      content: "Continuous environmental monitoring with multiple sensor types",
    },
    {
      id: 2,
      name: "Local Network Operation",
      content:
        "Functions without internet access using Wi-Fi LAN communication",
    },
    {
      id: 3,
      name: "Time-series Database",
      content:
        "InfluxDB 3 Core for efficient historical data storage and queries",
    },
    {
      id: 4,
      name: "Browser Visualization",
      content: "Real-time data visualization through web interface",
    },
    {
      id: 5,
      name: "UDP Broadcast",
      content:
        "Wi-Fi communication without requiring server IP address knowledge",
    },
    {
      id: 6,
      name: "Wireless Operation",
      content:
        "ESP8266 operates independently without wired connections to server",
    },
  ];

  const dataAnalysis = [
    {
      title: "Temperature & Humidity Trends",
      description: "Track environmental changes over time for climate analysis",
      icon: <IconChartLine className="h-8 w-8" />,
      metrics: ["Daily patterns", "Seasonal changes", "Anomaly detection"],
    },
    {
      title: "Air Quality Assessment",
      description:
        "Monitor indoor air quality for health and comfort optimization",
      icon: <IconCloud className="h-8 w-8" />,
      metrics: ["VOC levels", "Pressure changes", "Humidity balance"],
    },
    {
      title: "Plant Condition Monitoring",
      description: "Track soil moisture for optimal plant growth conditions",
      icon: <IconDroplets className="h-8 w-8" />,
      metrics: ["Soil humidity", "Temperature range", "Watering needs"],
    },
    {
      title: "Anomaly Detection",
      description: "Identify unusual environmental patterns and trigger alerts",
      icon: <IconAlertCircle className="h-8 w-8" />,
      metrics: ["Threshold alerts", "Pattern deviation", "Event logging"],
    },
  ];

  const futureFeatures = [
    "Threshold-based alerts and notifications",
    "Device control integration",
    "Grafana dashboard integration",
    "Support for multiple measurement nodes",
    "Advanced data analytics",
    "Mobile application",
  ];

  if (!isClient) return null;

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <BackgroundBeams />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6798183/pexels-photo-6798183.jpeg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-purple-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                University IoT Project
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Environmental Data Collection System
              </span>
            </h1>

            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-8" />

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Real-time IoT system for environmental monitoring, data
              collection, and visualization without internet dependency
            </p>

            {/* Project Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                "ESP8266",
                "InfluxDB",
                "Python Flask",
                "Real-time",
                "Wi-Fi",
                "UDP",
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
              <Link href="#architecture">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-black text-white flex items-center space-x-2 px-8 py-4 text-lg"
                >
                  <span>System Architecture</span>
                  <IconArrowRight className="h-5 w-5" />
                </HoverBorderGradient>
              </Link>
              <Link href="#analysis">
                <button className="px-10 py-4 rounded-full bg-gradient-to-b from-cyan-600 to-purple-600 text-white font-medium text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300">
                  Data Analysis
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
              Project <span className="text-cyan-400">Overview</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A complete IoT system for collecting, transmitting, storing, and
              visualizing environmental data in real-time
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative">
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    System Objectives
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
                      <div className="p-3 rounded-lg bg-cyan-500/20">
                        <IconSeo className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">
                          Environmental Data Collection
                        </h4>
                        <p className="text-gray-300">
                          Gather real-time data from multiple sensor types
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
                      <div className="p-3 rounded-lg bg-purple-500/20">
                        <IconWifi className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">
                          Local Network Transmission
                        </h4>
                        <p className="text-gray-300">
                          Send data over Wi-Fi LAN without internet dependency
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
                      <div className="p-3 rounded-lg bg-blue-500/20">
                        <IconDatabase className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">
                          Time-series Database Storage
                        </h4>
                        <p className="text-gray-300">
                          Efficient storage and querying with InfluxDB
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
                      <div className="p-3 rounded-lg bg-green-500/20">
                        <IconChartAreaLine className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">
                          Browser Visualization
                        </h4>
                        <p className="text-gray-300">
                          Real-time data display through web interface
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Technology Stack
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technologyStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div
                        className={`bg-gradient-to-br ${tech.color} p-0.5 rounded-xl`}
                      >
                        <div className="bg-gray-900 rounded-xl p-5 h-full">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="p-3 rounded-lg bg-gray-800">
                              {tech.icon}
                            </div>
                            <h3 className="font-bold text-white">
                              {tech.name}
                            </h3>
                          </div>
                          <p className="text-gray-400 text-sm">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
              System <span className="text-purple-400">Architecture</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Wireless IoT network using UDP broadcast for seamless data
              transmission
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Network Topology */}
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Network Topology
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* ESP8266 Node */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-800 mb-4">
                    <IconCpu className="h-16 w-16 text-cyan-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    ESP8266 Node
                  </h3>
                  <p className="text-gray-400">
                    Reads sensor data and broadcasts via Wi-Fi
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    Port 8888 UDP Broadcast
                  </div>
                </motion.div>

                {/* Wi-Fi Network */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-800 mb-4">
                      <IconWifi className="h-16 w-16 text-purple-400 mx-auto" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-20 -z-10"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Wi-Fi LAN
                  </h3>
                  <p className="text-gray-400">
                    Local network communication without internet
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    UDP Broadcast Network
                  </div>
                </motion.div>

                {/* Server */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-800 mb-4">
                    <IconServer className="h-16 w-16 text-blue-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Flask Server
                  </h3>
                  <p className="text-gray-400">
                    Receives data and stores in InfluxDB
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    Python + Flask Application
                  </div>
                </motion.div>
              </div>

              {/* Connection Flow */}
              <div className="hidden md:block mt-12">
                <div className="flex items-center justify-between px-8">
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-cyan-500 via-cyan-500 to-purple-500"></div>
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-purple-500 via-purple-500 to-blue-500"></div>
                </div>
              </div>
            </div>

            {/* Sensor Modules */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Environmental Sensors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sensorModules.map((sensor) => (
                  <motion.div
                    key={sensor.id}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div
                      className={`bg-gradient-to-br ${sensor.color} p-0.5 rounded-xl h-full`}
                    >
                      <div className="bg-gray-900 rounded-xl p-6 h-full">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-gray-800">
                            {sensor.icon}
                          </div>
                          <h3 className="font-bold text-white text-lg">
                            {sensor.name}
                          </h3>
                        </div>
                        <p className="text-gray-400 mb-4">
                          {sensor.description}
                        </p>
                        <div className="pt-4 border-t border-gray-800">
                          <h4 className="font-bold text-white mb-3">
                            Measurements
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {sensor.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* System Workflow - Simple Cards */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                System Workflow
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {systemFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    {/* Card */}
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full overflow-hidden">
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Step number */}
                      <div className="inline-block px-4 py-2 mb-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
                        <span className="font-bold text-white">
                          Step {feature.id}
                        </span>
                      </div>

                      {/* Content */}
                      <h4 className="text-xl font-bold text-white mb-3">
                        {feature.name}
                      </h4>
                      <p className="text-gray-300">{feature.content}</p>

                      {/* Bottom gradient line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Analysis Section */}
      <section id="analysis" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Data <span className="text-green-400">Analysis</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Comprehensive environmental insights through real-time data
              monitoring
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataAnalysis.map((analysis, index) => (
                <motion.div
                  key={analysis.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-green-500/20">
                        {analysis.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {analysis.title}
                        </h3>
                        <p className="text-gray-300">{analysis.description}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                      <h4 className="font-bold text-white mb-3">Key Metrics</h4>
                      <div className="flex flex-wrap gap-2">
                        {analysis.metrics.map((metric, idx) => (
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

            {/* InfluxDB Integration */}
            <div className="mt-16">
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      InfluxDB 3 Core Integration
                    </h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg mt-1">
                          <IconDatabase className="h-5 w-5 text-purple-400" />
                        </div>
                        <p className="text-gray-300">
                          Time-series data storage optimized for environmental
                          metrics
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg mt-1">
                          <IconChartLine className="h-5 w-5 text-blue-400" />
                        </div>
                        <p className="text-gray-300">
                          Fast query performance for real-time data
                          visualization
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-green-500/20 rounded-lg mt-1">
                          <IconChartAreaLine className="h-5 w-5 text-green-400" />
                        </div>
                        <p className="text-gray-300">
                          Historical data analysis and trend identification
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6">
                      <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                        <div className="text-center">
                          <IconDatabase className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                          <p className="text-gray-400">Real-time Data Stream</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                          <div className="text-xl font-bold text-cyan-400 mb-1">
                            Real-time
                          </div>
                          <div className="text-xs text-gray-400">
                            Data Ingestion
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                          <div className="text-xl font-bold text-green-400 mb-1">
                            Fast Queries
                          </div>
                          <div className="text-xs text-gray-400">
                            Performance
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                          <div className="text-xl font-bold text-blue-400 mb-1">
                            Historical
                          </div>
                          <div className="text-xs text-gray-400">
                            Data Storage
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                          <div className="text-xl font-bold text-purple-400 mb-1">
                            Time-series
                          </div>
                          <div className="text-xs text-gray-400">Optimized</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Development */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Future <span className="text-yellow-400">Development</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Planned enhancements and expansion possibilities for the system
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Upcoming Features
                  </h3>
                  <ul className="space-y-3">
                    {futureFeatures.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-800">
                    <IconAlertCircle className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">
                      System Expansion
                    </h4>
                    <p className="text-gray-400">
                      Scalable architecture for multiple nodes and integrations
                    </p>
                  </div>
                </div>
              </div>
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
              The team behind the Environmental Data Collection System
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <AnimatedTooltip items={teamMembers} />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Project Achievement
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Successfully developed a complete IoT ecosystem for
                environmental monitoring that operates independently of internet
                connectivity. The system demonstrates practical application of
                wireless sensor networks, time-series databases, and real-time
                web visualization in a university research context.
              </p>
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
                Environmental Data Collection System
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
              © {new Date().getFullYear()} University IoT Research Lab.
              Real-time environmental monitoring system using ESP8266, InfluxDB,
              and Flask.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
