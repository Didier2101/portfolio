import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "+573028645014";
  const message = "Hola, estoy interesado en los servicios de Aurora Luminis. ¿Podrían brindarme más información?";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      className="fixed bottom-8 right-8 z-50 group"
    >
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 border border-orange-400/30 rounded-lg px-3 py-2 shadow-lg"
      >
        <p className="text-white text-sm font-mono whitespace-nowrap">
          &lt;WhatsApp /&gt;
        </p>
        <p className="text-gray-300 text-xs mt-1">
          ¿Tienes preguntas?
        </p>
        <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
          <div className="w-2 h-2 bg-orange-400 rotate-45" />
        </div>
      </motion.div>

      {/* Botón principal */}
      <button
        onClick={handleClick}
        className="relative group"
      >
        {/* Efecto de pulso */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-orange-400 rounded-full"
        />

        {/* Botón */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2 border-orange-400 shadow-lg hover:shadow-orange-400/25 transition-all duration-300 group-hover:border-orange-300">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>

        {/* Indicador de notificación */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-black rounded-full"
        >
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
        </motion.div>
      </button>

      {/* Efectos decorativos */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 border-2 border-orange-400/30 rounded-full pointer-events-none"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-2 border border-orange-400/20 rounded-full pointer-events-none"
      />
    </motion.div>
  );
}