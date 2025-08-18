import { motion } from 'framer-motion'

export default function ContainerMotion({ children, delay = 0, padding = '0' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`bg-gradient relative overflow-hidden rounded-lg border-[1px] border-gray-400 p-${padding} ml-2 mr-2 sm:ml-0 sm:mr-0`}
    >
      {children}
    </motion.div>
  )
}
