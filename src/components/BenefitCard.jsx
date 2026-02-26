import { motion } from 'framer-motion'

export default function BenefitCard({ icon: Icon, title, description, color = 'indigo', index = 0 }) {
    const colorMap = {
        indigo: 'bg-indigo-100 text-indigo-600',
        emerald: 'bg-emerald-100 text-emerald-600',
        amber: 'bg-amber-100 text-amber-600',
        rose: 'bg-rose-100 text-rose-600',
        purple: 'bg-purple-100 text-purple-600',
        blue: 'bg-blue-100 text-blue-600',
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1"
        >
            <div className={`w-12 h-12 ${colorMap[color] || colorMap.indigo} rounded-xl flex items-center justify-center mb-5`}>
                <Icon size={24} />
            </div>
            <h3 className="text-base font-700 text-slate-900 mb-2">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
        </motion.div>
    )
}
