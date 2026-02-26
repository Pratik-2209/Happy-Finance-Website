import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function TestimonialCard({ name, location, rating = 5, text, product, index = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
        >
            {/* Large decorative quote mark */}
            <div className="text-5xl font-900 text-indigo-100 leading-none mb-3 select-none" aria-hidden="true">❝</div>

            {/* Review text */}
            <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-5">{text}</p>

            {/* Rating */}
            <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        size={14}
                        className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}
                    />
                ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-700 text-sm shrink-0">
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="text-sm font-600 text-slate-900">{name}</p>
                    <p className="text-xs text-slate-400">{location} · {product}</p>
                </div>
            </div>
        </motion.div>
    )
}
