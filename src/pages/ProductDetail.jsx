import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    Home, User, Briefcase, Car, CreditCard, Shield,
    CheckCircle, FileText, Gift, ArrowLeft, ArrowRight, Star
} from 'lucide-react'
import { getProduct } from '../data/products'
import LeadCaptureForm from '../components/LeadCaptureForm'

const iconMap = { Home, User, Briefcase, Car, CreditCard, Shield }
const sectionTabs = ['Overview', 'Eligibility', 'Documents', 'Benefits']

export default function ProductDetail() {
    const { slug } = useParams()
    const product = getProduct(slug)
    const [activeTab, setActiveTab] = useState('Overview')

    if (!product) return <Navigate to="/products" replace />

    const Icon = iconMap[product.icon] || Home

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 pt-28 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 text-indigo-300 hover:text-white text-sm font-500 mb-8 transition-colors"
                    >
                        <ArrowLeft size={16} />
                        All Products
                    </Link>
                    <div className="grid lg:grid-cols-3 gap-10 items-start">
                        {/* Product info */}
                        <div className="lg:col-span-2">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
                                        <Icon size={32} className="text-white" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-700 uppercase tracking-widest text-indigo-300">Financial Product</span>
                                        <h1 className="text-3xl sm:text-4xl font-900 text-white">{product.title}</h1>
                                    </div>
                                </div>
                                <p className="text-indigo-200 text-lg mb-8 max-w-xl">{product.tagline}</p>

                                {/* Quick stats */}
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { label: 'Interest Rate', value: product.interestRate },
                                        { label: 'Max Amount', value: product.maxAmount },
                                        { label: 'Tenure', value: product.tenure },
                                    ].map(stat => (
                                        <div key={stat.label} className="bg-white/10 backdrop-blur rounded-2xl p-4">
                                            <p className="text-indigo-300 text-xs font-500 mb-1">{stat.label}</p>
                                            <p className="text-white font-700 text-sm">{stat.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Rating */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="hidden lg:flex flex-col items-center justify-center bg-white/10 backdrop-blur rounded-2xl p-6 text-center"
                        >
                            <div className="flex gap-0.5 mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-amber-400 fill-amber-400" />)}
                            </div>
                            <p className="text-3xl font-900 text-white mb-1">4.8</p>
                            <p className="text-indigo-300 text-sm">Based on 1,200+ reviews</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main content + sticky form */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-10 items-start">
                    {/* Tabs + content */}
                    <div className="lg:col-span-2">
                        {/* Tab navigation */}
                        <div className="bg-white rounded-2xl p-1.5 flex gap-1 mb-8 shadow-sm border border-slate-100 overflow-x-auto">
                            {sectionTabs.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 min-w-max px-4 py-2.5 rounded-xl text-sm font-600 transition-all whitespace-nowrap ${activeTab === tab
                                            ? 'bg-indigo-600 text-white shadow-sm'
                                            : 'text-slate-600 hover:bg-slate-50'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Tab content */}
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
                        >
                            {activeTab === 'Overview' && (
                                <div>
                                    <h2 className="text-xl font-800 text-slate-900 mb-4">About {product.title}</h2>
                                    <p className="text-slate-600 leading-relaxed">{product.overview}</p>

                                    {/* Benefits preview */}
                                    <div className="mt-8 grid sm:grid-cols-2 gap-4">
                                        {product.benefits.map(b => (
                                            <div key={b.title} className="flex gap-3 p-4 bg-slate-50 rounded-xl">
                                                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                                                    <Gift size={16} className="text-indigo-600" />
                                                </div>
                                                <div>
                                                    <p className="font-700 text-sm text-slate-900">{b.title}</p>
                                                    <p className="text-xs text-slate-500 mt-0.5">{b.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Eligibility' && (
                                <div>
                                    <h2 className="text-xl font-800 text-slate-900 mb-6">Eligibility Criteria</h2>
                                    <ul className="space-y-4">
                                        {product.eligibility.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                    <CheckCircle size={14} className="text-emerald-600" />
                                                </div>
                                                <span className="text-slate-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {activeTab === 'Documents' && (
                                <div>
                                    <h2 className="text-xl font-800 text-slate-900 mb-6">Documents Required</h2>
                                    <ul className="space-y-4">
                                        {product.documents.map((doc, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-6 h-6 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                                    <FileText size={14} className="text-indigo-600" />
                                                </div>
                                                <span className="text-slate-700">{doc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-6 text-xs text-slate-400 bg-amber-50 border border-amber-100 rounded-xl p-4">
                                        📋 Documents may vary based on the lender and specific loan program. Our advisor will provide the exact list based on your profile.
                                    </p>
                                </div>
                            )}

                            {activeTab === 'Benefits' && (
                                <div>
                                    <h2 className="text-xl font-800 text-slate-900 mb-6">Key Benefits</h2>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        {product.benefits.map((b, i) => (
                                            <div key={b.title} className="border border-indigo-100 rounded-2xl p-5 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all">
                                                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mb-3">
                                                    <Gift size={20} className="text-indigo-600" />
                                                </div>
                                                <h3 className="font-700 text-slate-900 mb-1">{b.title}</h3>
                                                <p className="text-sm text-slate-500">{b.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Sticky Application Form */}
                    <div className="lg:sticky lg:top-24">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                                    <Icon size={20} className="text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="font-700 text-slate-900">Apply for {product.title}</h3>
                                    <p className="text-xs text-slate-400">Get a callback in 30 mins</p>
                                </div>
                            </div>
                            <LeadCaptureForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
