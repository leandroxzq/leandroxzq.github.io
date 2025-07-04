'use client'

import Page from '@/components/Page'
import RotatingLines from '@/components/RotatingLines'

import { Press_Start_2P } from 'next/font/google'
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
})

export default function About() {
  return (
    <Page>
      <div className="space-y-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative dark:bg-gray-900 p-6 rounded-lg shadow-md overflow-hidden"
        >
          <RotatingLines />
          <div className="relative z-10">
            <h3 className={`text-xl font-semibold mb-4 ${pressStart2P.className}`}>About Me</h3>
            <p className="leading-relaxed">About me</p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md overflow-hidden"
        >
          <RotatingLines />
          <div className="relative z-10">
            <h3
              className={`text-xl font-semibold text-gray-800 dark:text-white mb-4 ${pressStart2P.className}`}
            >
              Contact
            </h3>
            <div className="space-y-3">
              <a
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                href="https://github.com/leandroxzq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                <span>leandroxzq</span>
              </a>
              <a
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                href="https://www.linkedin.com/in/leandrosilvaz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                <span>leandrosilvaz</span>
              </a>

              <p className="flex gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>leandrosilvazw25@gmail.com</span>
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </Page>
  )
}
