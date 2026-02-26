import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

export default function StickyActions() {
    return (
        <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
            <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-13 h-13 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl shadow-lg shadow-emerald-200 flex items-center justify-center transition-colors"
            >
                <MessageCircle size={24} fill="white" />
            </motion.a>
            <motion.a
                href="tel:+919876543210"
                aria-label="Call us"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-13 h-13 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl shadow-lg shadow-indigo-200 flex items-center justify-center transition-colors"
            >
                <Phone size={22} />
            </motion.a>
        </div>
    )
}
