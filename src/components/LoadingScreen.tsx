import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  isLoading: boolean
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-myblack"
        >
          {/* Logo / title */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="font-Lob text-2xl text-white md:text-3xl"
          >
            <span className="text-mypink">Swar</span> Shraddhs
          </motion.p>

          {/* Spinner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="mt-8"
          >
            <div className="loader-spinner" aria-hidden />
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.3 }}
            className="mt-6 font-Dosis text-sm font-medium text-gray-400"
          >
            Loading...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
