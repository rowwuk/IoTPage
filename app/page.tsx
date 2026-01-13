// app/page.tsx
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { CardStack } from "@/components/ui/card-stack";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { LampContainer } from "@/components/ui/lamp";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  IconArrowRight,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconMicroscope,
  IconWifi,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  const projects = [
    {
      id: 1,
      name: "Smart Home Automation",
      description:
        "Voice-controlled home ecosystem using ESP32 and custom firmware",
      image: "/project1.jpg",
      tags: ["ESP32", "IoT", "Automation"],
      icon: <IconDeviceDesktop className="h-6 w-6" />,
    },
    {
      id: 2,
      name: "Precision Agriculture System",
      description:
        "Real-time soil monitoring with automated irrigation control",
      image: "/project2.jpg",
      tags: ["Sensors", "LoRa", "ML"],
      icon: <IconMicroscope className="h-6 w-6" />,
    },
    {
      id: 3,
      name: "Wearable Health Monitor",
      description: "Continuous vital signs monitoring with emergency alerts",
      image: "/project3.jpg",
      tags: ["BLE", "Wearable", "Healthcare"],
      icon: <IconWifi className="h-6 w-6" />,
    },
  ];

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "#projects" },
    { name: "Team", link: "#team" },
    { name: "Research", link: "#research" },
    { name: "Contact", link: "#contact" },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Alex Chen",
      designation: "IoT Lead",
      image: "/team1.jpg",
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      designation: "Embedded Systems",
      image: "/team2.jpg",
    },
    {
      id: 3,
      name: "James Kim",
      designation: "Cloud Architecture",
      image: "/team3.jpg",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      designation: "Data Analytics",
      image: "/team4.jpg",
    },
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

      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} className="z-50" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          <LampContainer>
            <h1 className="mt-8 bg-linear-to-br from-white to-gray-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
              IoT Innovation Lab
            </h1>
          </LampContainer>

          <div className="mt-8 text-center text-gray-300">
            <TypewriterEffectSmooth
              words={words}
              className="text-xl md:text-2xl items-center justify-center"
            />
            <div className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Creating{" "}
              <b>
                <FlipWords words={flipWords} />
              </b>
              devices that transform everyday life through cutting-edge
              technology
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#projects">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-black text-white flex items-center space-x-2 px-6 py-3"
              >
                <span>Explore Projects</span>
                <IconArrowRight className="h-4 w-4" />
              </HoverBorderGradient>
            </Link>
            <Link href="#research">
              <button className="px-8 py-3 rounded-full bg-linear-to-b from-blue-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                Our Research
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
              Our <span className="text-purple-400">Team</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate students driving innovation in IoT technology
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <AnimatedTooltip items={teamMembers} />
          </div>

          <div className="relative flex h-[500px] flex-col items-center justify-center overflow-hidden rounded-lg">
            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
              )}
            />
            <p className="text-lg font-bold md:text-xl text-gray-300 text-center leading-relaxed w-[50%]">
              Our multidisciplinary team combines expertise in{" "}
              <span className="text-blue-400">embedded systems</span>,{" "}
              <span className="text-purple-400">wireless communication</span>,
              and <span className="text-green-400">cloud computing</span> to
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
              <Link href="/contact">
                <button className="px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                  Get in Touch
                </button>
              </Link>
              <Link href="/projects">
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
