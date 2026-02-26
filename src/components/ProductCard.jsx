import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Home, User, Briefcase, Car, CreditCard, Shield,
} from 'lucide-react'

const iconMap = { Home, User, Briefcase, Car, CreditCard, Shield }

const colorMap = {
    indigo: {
        icon: 'bg-indigo-100 text-indigo-600',
        hoverBorder: 'hover:border-indigo-300',
    },
    purple: {
        icon: 'bg-purple-100 text-purple-600',
        hoverBorder: 'hover:border-purple-300',
    },
    blue: {
        icon: 'bg-blue-100 text-blue-600',
        hoverBorder: 'hover:border-blue-300',
    },
    emerald: {
        icon: 'bg-emerald-100 text-emerald-600',
        hoverBorder: 'hover:border-emerald-300',
    },
    rose: {
        icon: 'bg-rose-100 text-rose-600',
        hoverBorder: 'hover:border-rose-300',
    },
    amber: {
        icon: 'bg-amber-100 text-amber-600',
        hoverBorder: 'hover:border-amber-300',
    },
}

export default function ProductCard({ product, index = 0 }) {
    const Icon = iconMap[product.icon] || Home
    const colors = colorMap[product.color] || colorMap.indigo

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="h-full"
        >
            <Link to={`/products/${product.slug}`} className="block group h-full">
                <div
                    className={`h-full bg-white rounded-2xl border border-slate-200 ${colors.hoverBorder} p-7 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 flex flex-col`}
                >
                    {/* Icon */}
                    <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center mb-5`}>
                        <Icon size={24} />
                    </div>

                    {/* Title + Description */}
                    <h3 className="text-lg font-700 text-slate-900 mb-2">{product.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">{product.description}</p>

                    {/* Stats strip */}
                    {product.interestRate && (
                        <div className="flex items-center justify-between text-xs py-4 mb-4 border-t border-b border-slate-100">
                            <div>
                                <p className="text-slate-400 mb-1">Interest Rate</p>
                                <p className="font-600 text-slate-700">{product.interestRate}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-slate-400 mb-1">Max Amount</p>
                                <p className="font-600 text-slate-700">{product.maxAmount}</p>
                            </div>
                        </div>
                    )}

                    {/* CTA */}
                    <span className="inline-flex items-center gap-1.5 text-sm font-600 text-indigo-600 group-hover:gap-3 transition-all">
                        Know More
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>
            </Link>
        </motion.div>
    )
}
