/*AQUI DEBE IR LOS QR DE LOS MENUS DE DEMOSTRACION */


import { motion } from "framer-motion";

function InfoCard({ 
  icon, 
  label, 
  title, 
  description, 
  status,
  delay = 0 
}: { 
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  status?: 'online' | 'warning';
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
        delay 
      }}
      className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-xl p-6 min-w-60 max-w-70"
    >
      <div className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-wider mb-2">
        {status && (
          <motion.span 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-2 h-2 rounded-full ${
              status === 'warning' ? 'bg-orange-500' : 'bg-orange-500'
            }`}
          />
        )}
        {icon}
        {label}
      </div>
      <h3 className="text-lg font-semibold mb-1.5">{title}</h3>
      <p className="text-sm text-white/60 leading-relaxed">{description}</p>
    </motion.div>
  );
}