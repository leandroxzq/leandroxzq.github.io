import { motion } from 'framer-motion'

export default function ContainerMotion({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={
        'relative border-2 border-gray-500 bg-gray-900 rounded-lg shadow-md overflow-hidden bg-gradient'
      }
    >
      {children}
    </motion.div>
  )
}
