import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  IconArrowRight,
  IconShieldCode,
  IconRoute,
  IconSeedling,
} from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern";

export default function Home() {
  const projects = [
    {
      id: "zigbee-alarm",
      name: "ZigBee Alarm System",
      description:
        "Advanced IoT-based home security with Face ID and a Telegram Bot",
      tags: ["ZigBee2MQTT", "Face ID", "Raspberry Pi 5", "Flask"],
      icon: <IconShieldCode className="h-6 w-6" />,
    },
    {
      id: "warehouse-robot",
      name: "Autonomous Warehouse Robot",
      description:
        "Intelligent robotic system for autonomous navigation with LiDAR and UE5",
      tags: ["ESP32-S3", "LiDAR", "Unreal Engine", "Autonomous"],
      icon: <IconRoute className="h-6 w-6" />,
    },
    {
      id: "sensor-array",
      name: "Environmental Data Collection",
      description:
        "Real-time IoT system for environmental monitoring with ESP8266 and InfluxDB",
      tags: ["ESP8266", "InfluxDB", "Python", "Real-time"],
      icon: <IconSeedling className="h-6 w-6" />,
    },
  ];

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "#projects" },
    { name: "Team", link: "#team" },
    { name: "Research", link: "#research" },
    { name: "Contact", link: "#contact" },
  ];

  const words = [
    { text: "Build" },
    { text: "Innovative" },
    { text: "IoT" },
    { text: "Solutions" },
    { text: "Today." },
  ];

  const flipWords = ["smarter", "connected", "efficient", "intelligent"];

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Elements */}
      <BackgroundBeams className="absolute inset-0 z-0" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Stock image - replace with your own or keep this placeholder */}
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/18136105/pexels-photo-18136105.jpeg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/60 to-purple-900/30" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                IoT Innovation Lab
              </span>
            </h1>
            <div className="h-1 w-24 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />

            <TypewriterEffectSmooth
              words={words}
              className="text-2xl md:text-3xl lg:text-4xl m-6 justify-center"
            />

            <div className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Creating <FlipWords words={flipWords} />
              devices that transform everyday life through cutting-edge
              technology and university research
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#projects">
              <HoverBorderGradient
                containerClassName="rounded-full w-full"
                as="button"
                className="bg-black text-white flex items-center space-x-2 px-8 py-4 text-lg"
              >
                <span>Explore Projects</span>
                <IconArrowRight className="h-5 w-5" />
              </HoverBorderGradient>
            </Link>
            <Link href="#research">
              <button className="px-10 py-4 rounded-full w-full bg-linear-to-b from-blue-600 to-purple-600 text-white font-medium text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 group">
                <span className="flex items-center gap-2 justify-center">
                  Our Research
                  <IconArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover our innovative IoT solutions built from scratch by
              university students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div key={project.id} className="relative group">
                <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500 overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={`/projects/${project.id}`}>
                        <button className="w-full py-2 px-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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

          <div className="relative flex h-125 flex-col items-center justify-center overflow-hidden rounded-lg">
            <GridPattern
              className={cn(
                "mask-[radial-gradient(300px_circle_at_center,white,transparent)]"
              )}
            />
            <p className="text-lg font-bold md:text-xl text-gray-300 text-center leading-relaxed max-sm:w-full sm:w-[50%]">
              Our multidisciplinary team combines expertise in{" "}
              <span className="text-blue-400">embedded systems</span>,{" "}
              <span className="text-purple-400">wireless communication</span>,
              and <span className="text-green-400">visualization</span> to
              create groundbreaking IoT solutions that address real-world
              challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Footer/CTA */}
      <footer id="contact" className="py-20 relative border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Innovate with Us?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join our IoT research group or collaborate on our next
              groundbreaking project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#team">
                <button className="px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                  Get in Touch
                </button>
              </Link>
              <Link href="#projects">
                <button className="px-8 py-3 border border-gray-700 rounded-full text-white font-medium hover:bg-gray-800/50 transition-all duration-300">
                  View All Projects
                </button>
              </Link>
            </div>
            <p className="mt-12 text-gray-500 text-sm">
              © {new Date().getFullYear()} University IoT Innovation Lab. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
