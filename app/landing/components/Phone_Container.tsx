/* Aqui debe ir la imagen con logo o en un futuro un video de la app */

import { motion } from "framer-motion";

function PhoneWithShip() {
  return (
    <div className="relative w-full aspect-9/19 bg-linear-to-br from-[#0f172a] to-[#1e293b] rounded-[50px] p-3 shadow-2xl">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-30 h-7.5 bg-[#0f172a] rounded-b-4xl z-10">
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#1e293b] border-2 border-white/10 rounded-full" />
      </div>

      {/* Screen */}
      <div className="relative w-full h-full bg-[#0a1628] rounded-[42px] overflow-hidden">
        {/* Ocean Background */}
        <div className="absolute inset-0 bg-linear-to-b from-[#0c1a2e] via-[#0a1628] to-[#081221]">
          {/* Water Ripples */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ width: 0, height: 0, opacity: 0.6 }}
              animate={{ 
                width: [0, 100], 
                height: [0, 100], 
                opacity: [0.6, 0] 
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2.5,
                ease: "easeOut"
              }}
              className="absolute border border-blue-500/20 rounded-full"
              style={{
                top: `${20 + i * 25}%`,
                left: `${30 + i * 15}%`
              }}
            />
          ))}

          {/* Ship */}
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, -1, 0, 1, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-30 md:w-37.5"
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
            }}
          >
            {/* Wake */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-50">
              <div className="absolute left-[30%] w-0.5 h-full bg-linear-to-b from-transparent via-blue-400/30 to-transparent" />
              <div className="absolute right-[30%] w-0.5 h-full bg-linear-to-b from-transparent via-blue-400/30 to-transparent" />
              
              {[60, 70, 80].map((top, i) => (
                <motion.div
                  key={i}
                  initial={{ width: 20, height: 20, opacity: 1 }}
                  animate={{ 
                    width: [20, 60],
                    height: [20, 60],
                    opacity: [1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeOut"
                  }}
                  className="absolute left-1/2 -translate-x-1/2 border border-blue-400/30 rounded-full"
                  style={{ top: `${top}%` }}
                />
              ))}
            </div>

            {/* Ship Hull */}
            <div className="relative">
              {/* Bow */}
              <div 
                className="absolute -top-3.75 left-1/2 -translate-x-1/2 w-0 h-0"
                style={{
                  borderLeft: '28px solid transparent',
                  borderRight: '28px solid transparent',
                  borderBottom: '25px solid rgba(203, 213, 225, 0.95)'
                }}
              />

              {/* Main Hull */}
              <div className="relative mx-auto w-14 md:w-17.5 h-30 md:h-35 bg-linear-to-b from-slate-200/95 via-slate-300/95 to-slate-400/90 rounded-[28px_28px_32px_32px] shadow-inner">
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-slate-400/40" />
                <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-slate-400/40" />

                {/* Bridge */}
                <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-8 md:w-10 h-9 md:h-11 bg-linear-to-b from-slate-50/90 to-slate-200/90 rounded shadow-lg">
                  {/* Windows */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-1.5 h-2 bg-blue-500/60 rounded-sm shadow-inner"
                        style={{
                          boxShadow: 'inset 0 0 4px rgba(14, 165, 233, 0.8)'
                        }}
                      />
                    ))}
                  </div>

                  {/* Smokestacks */}
                  <div className="absolute -top-2 left-2.5 w-1.5 h-2.5 bg-linear-to-b from-red-400/90 to-red-600/90 rounded-t shadow" />
                  <div className="absolute -top-2 right-2.5 w-1.5 h-2.5 bg-linear-to-b from-red-400/90 to-red-600/90 rounded-t shadow" />
                </div>

                {/* Deck Equipment */}
                <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-4 h-3 bg-slate-400/80 rounded shadow" />

                {/* Stern Deck */}
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-10 md:w-12.5 h-5 md:h-6 bg-slate-300/80 rounded shadow-inner" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}