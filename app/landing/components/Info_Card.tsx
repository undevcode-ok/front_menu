"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface InfoCardProps {
  logoSrc: string;
  logoAlt: string;
  delay?: number;
  logoSize?: number;
}

export function InfoCard({ 
  logoSrc,
  logoAlt,
  delay = 0,
  logoSize = 80
}: InfoCardProps) {
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
      className="text-center bg-white/90 backdrop-blur-xl border border-gray-200 rounded-xl p-6 min-w-[240px] max-w-[280px] shadow-lg"
    >
      {/* Logo Image - Circular */}
      <div className="w-full mb-6 flex items-center justify-center">
        <div className="relative rounded-full overflow-hidden shadow-md" style={{ width: logoSize, height: logoSize }}>
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={logoSize}
            height={logoSize}
            className="object-cover"
          />
        </div>
      </div>

      {/* QR Code */}
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border-2 border-gray-300 hover:scale-105 transition-transform">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="/qr/QR_placeholder.png"
            alt="QR Placeholder"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
      </div>      
    </motion.div>
  );
}