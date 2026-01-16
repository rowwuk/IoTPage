// components/navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconHome,
  IconDeviceDesktop,
  IconRobot,
  IconTemperature,
  IconMenu2,
  IconX,
  IconArrowLeft,
} from "@tabler/icons-react";

const mainNavItems = [
  { name: "Home", href: "/", icon: <IconHome className="h-5 w-5" /> },
  {
    name: "ZigBee Alarm",
    href: "/projects/zigbee-alarm",
    icon: <IconDeviceDesktop className="h-5 w-5" />,
  },
  {
    name: "Warehouse Robot",
    href: "/projects/warehouse-robot",
    icon: <IconRobot className="h-5 w-5" />,
  },
  {
    name: "Sensor Array",
    href: "/projects/sensor-array",
    icon: <IconTemperature className="h-5 w-5" />,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if pathname starts with /projects
  const isProjectPage = pathname?.startsWith("/projects/");

  // Get project-specific navigation
  const getProjectNav = () => {
    if (pathname === "/projects/zigbee-alarm") {
      return [
        { name: "Overview", href: "#overview" },
        { name: "Architecture", href: "#architecture" },
        { name: "Features", href: "#features" },
        { name: "Team", href: "#team" },
      ];
    }
    if (pathname === "/projects/warehouse-robot") {
      return [
        { name: "Overview", href: "#overview" },
        { name: "Architecture", href: "#architecture" },
        { name: "Technology", href: "#technology" },
        { name: "Simulation", href: "#simulation" },
      ];
    }
    if (pathname === "/projects/sensor-array") {
      return [
        { name: "Overview", href: "#overview" },
        { name: "Sensors", href: "#sensors" },
        { name: "Data Flow", href: "#dataflow" },
        { name: "Applications", href: "#applications" },
      ];
    }
    return [];
  };

  const projectNavItems = getProjectNav();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Home */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative px-3 py-1.5 rounded-full bg-black/80 border border-gray-800">
                  <span className="font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    IoT Lab
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Main Pages */}
            <div className="hidden lg:flex items-center space-x-6">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-linear-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Navigation - Project Pages */}
            {isProjectPage && projectNavItems.length > 0 && (
              <div className="hidden lg:flex items-center space-x-4 ml-8">
                <div className="h-6 w-px bg-gray-800"></div>
                {projectNavItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-900/50 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
            >
              {isOpen ? (
                <IconX className="h-6 w-6" />
              ) : (
                <IconMenu2 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800"
            >
              <div className="container mx-auto px-4 py-6">
                {/* Main Navigation Links */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
                    Projects
                  </h3>
                  {mainNavItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          isActive
                            ? "bg-linear-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30"
                            : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-lg ${
                            isActive ? "bg-blue-500/20" : "bg-gray-800"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Project Page Navigation */}
                {isProjectPage && projectNavItems.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
                      On This Page
                    </h3>
                    <div className="space-y-1">
                      {projectNavItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
                        >
                          <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back to Projects Button */}
                {isProjectPage && (
                  <div className="mt-8 pt-6 border-t border-gray-800">
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-3"
                    >
                      <IconArrowLeft className="h-5 w-5" />
                      <span>Back to All Projects</span>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}
