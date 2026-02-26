import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, centered = true, light = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={centered ? 'text-center' : ''}
        >
            {eyebrow && (
                <span className="inline-block text-xs font-700 uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full mb-4">
                    {eyebrow}
                </span>
            )}
            <h2 className={`text-3xl sm:text-4xl font-800 ${light ? 'text-white' : 'text-slate-900'} leading-tight mb-4`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-base sm:text-lg ${light ? 'text-slate-300' : 'text-slate-500'} max-w-2xl ${centered ? 'mx-auto' : ''} leading-relaxed`}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    )
}
