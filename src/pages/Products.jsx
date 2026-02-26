import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import SectionHeading from '../components/SectionHeading'
import { products } from '../data/products'

const categories = ['All', 'Loans', 'Cards & Insurance']

function categorize(product) {
    if (['credit-card', 'insurance'].includes(product.slug)) return 'Cards & Insurance'
    return 'Loans'
}

export default function Products() {
    const [active, setActive] = useState('All')
    const filtered = active === 'All' ? products : products.filter(p => categorize(p) === active)

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Page header */}
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="inline-block text-xs font-700 uppercase tracking-widest text-indigo-300 bg-indigo-800/50 px-3 py-1.5 rounded-full mb-5">
                            Product Catalog
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-900 text-white mb-4">Financial Products</h1>
                        <p className="text-indigo-200 text-lg max-w-xl mx-auto">
                            Choose from our wide range of loans, cards, and insurance products — all with best-in-market rates.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Filter tabs + grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center mb-8"
                >
                    <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-1.5 inline-flex gap-1">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-600 transition-all ${active === cat
                                        ? 'bg-indigo-600 text-white shadow-sm'
                                        : 'text-slate-600 hover:bg-slate-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
                    {filtered.map((product, i) => (
                        <ProductCard key={product.slug} product={product} index={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}
