/* LANDING */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Ship,
  Navigation,
  Radio,
} from "lucide-react";
import {
  Menubar,
  MenubarMenu,
} from "@/common/components/organism/menubar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-[#FFF3EC] to-[#FFE6D3] text-black">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/70 backdrop-blur-xl shadow-sm"
              : "bg-white/90 backdrop-blur-md"
          }
        `}
      >
        <Menubar className="max-w-7xl mx-auto px-6 lg:px-12 w-full justify-between border-none bg-transparent">
          {/* Logo */}
          <MenubarMenu>
            <div className="flex items-center">
              <Image
                src="/toppingfly.webp"
                alt="ToppingFly Logo"
                width={200}
                height={50}
                priority
              />
            </div>
          </MenubarMenu>

          {/* Centered Menubar */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <Menubar className="border-none bg-transparent">
              <MenubarMenu>
                <Link href="/" className="px-3 py-2">Planes</Link>
              </MenubarMenu>

              <MenubarMenu>
                <Link href="/" className="px-3 py-2">Recursos</Link>
              </MenubarMenu>

              <MenubarMenu>
                <Link href="/" className="px-3 py-2">Nosotros</Link>
              </MenubarMenu>
            </Menubar>
          </div>

          {/* CTA Button */}
          <MenubarMenu>
            <a
              href="/auth"
              className="bg-orange-500 hover:bg-orange-600 border border-orange-600 px-7 py-3 rounded-lg text-sm transition-all flex items-center gap-2 text-white font-medium"
            >
              Ingresar <span>→</span>
            </a>
          </MenubarMenu>
        </Menubar>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center mb-8 tracking-tight leading-tight max-w-4xl"
        >
          Crea Menús Personalizados
          <br />
          con Facilidad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-xl text-black/60 text-center max-w-3xl mb-20 leading-relaxed"
        >
          Una herramienta fácil de usar para crear, organizar y actualizar menús
          en línea.
        </motion.p>

        {/* Phone Scene */}
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block absolute left-[-8%] top-[1%]"
          >
            <InfoCard
              label="Restaurante"
              title="Menú Completo"
              description="Carta digital con categorías y precios"
              delay={0.5}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block absolute right-[-8%] top-[1%]"
          >
            <InfoCard
              label="Hamburguesería"
              title="Fast Food"
              description="Menú rápido y accesible"
              delay={0.7}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block absolute left-[12%] top-[35%] bottom-0"
          >
            <InfoCard
              label="Pizzería"
              title="Especialidades"
              description="Menú de pizzas artesanales"
              delay={0.9}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block absolute right-[12%] top-[35%] bottom-0"
          >
            <InfoCard
              label="Heladería"
              title="Postres"
              description="Sabores y promociones"
              delay={1.1}
            />
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto w-[300px] md:w-[360px] relative"
          >
            <PhoneWithMenu />
          </motion.div>

          {/* Mobile Info Cards */}
          <div className="lg:hidden flex flex-col gap-4 mt-12 max-w-md mx-auto">
            <InfoCard
              label="Restaurante"
              title="Menú Completo"
              description="Carta digital personalizada"
              delay={1.2}
            />
            <InfoCard
              label="Hamburguesería"
              title="Fast Food"
              description="Menú rápido y accesible"
              delay={1.3}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  label,
  title,
  description,
  delay = 0,
}: {
  label: string;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-15, 0, -15] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className="text-center bg-white/90 backdrop-blur-xl border border-gray-200 rounded-xl p-4 min-w-[240px] max-w-[280px] shadow-lg"
    >
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">
        {label}
      </div>
      
      
      {/* QR Code Placeholder */}
     <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border-2 border-gray-300">
  <div className="w-full h-full flex items-center justify-center">
    <Image 
      src="/qr/QR_placeholder.png" 
      alt="QR Placeholder" 
      width={128}   // Ajusta el tamaño según lo necesites
      height={128}  // Ajusta el tamaño según lo necesites
      className="object-contain" // Asegura que la imagen se mantenga dentro del contenedor sin deformarse
    />
  </div>
</div>
      
      
    </motion.div>
  );
}

function PhoneWithMenu() {
  return (
    <div className="relative w-full aspect-[9/19] bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-[50px] p-3 shadow-2xl">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-[#0f172a] rounded-b-[20px] z-10">
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-[#1e293b] border-2 border-white/10 rounded-full" />
      </div>

      {/* Screen */}
      <div className="relative w-full h-full bg-white rounded-[42px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FFF3EC] to-[#FFE6D3]">
          {/* ToppingFly Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] md:w-[280px]"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="/toppingfly.webp"
                alt="ToppingFly Logo"
                className="w-full h-auto"
                style={{
                  filter: "drop-shadow(0 10px 30px rgba(251, 146, 60, 0.2))",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}