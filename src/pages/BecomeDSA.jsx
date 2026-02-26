import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    TrendingUp, IndianRupee, Clock, Users, Award,
    Building, UserCheck, Laptop, Phone, CheckCircle, ArrowRight
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const dsaBenefits = [
    { icon: IndianRupee, color: 'emerald', title: 'Attractive Commissions', desc: 'Earn up to 1.5% commission on every loan disbursed through you. No income ceiling!' },
    { icon: Clock, color: 'indigo', title: 'Flexible Work Hours', desc: 'Work at your own pace, from wherever you want. No office, no fixed timings.' },
    { icon: Users, color: 'purple', title: 'Large Product Portfolio', desc: 'Offer Home Loans, Business Loans, Personal Loans, and more from 50+ lenders.' },
    { icon: TrendingUp, color: 'blue', title: 'Fast Growth Potential', desc: 'Top DSA partners earn ₹1 Lakh+ per month. Scale your business with our support.' },
    { icon: Award, color: 'amber', title: 'Training & Certification', desc: 'Get certified, trained, and equipped with all the tools you need to succeed.' },
    { icon: Laptop, color: 'rose', title: 'Digital Tools & CRM', desc: 'Access our proprietary CRM, lead tracking, and real-time commission dashboard.' },
]

const whoCanApply = [
    { icon: Building, title: 'Finance Professionals', desc: 'CAs, financial advisors, insurance agents, and wealth managers.' },
    { icon: UserCheck, title: 'Sales & Business Professionals', desc: 'Anyone with a strong professional network and sales acumen.' },
    { icon: Users, title: 'Existing DSAs', desc: 'Already a DSA elsewhere? Get better commissions and a wider product range here.' },
    { icon: Phone, title: 'Entrepreneurs', desc: 'First-time entrepreneurs looking for a business with low investment and high returns.' },
]

const steps = [
    { step: '01', title: 'Register', desc: 'Fill the simple registration form below.' },
    { step: '02', title: 'Verify', desc: 'Our team will verify your documents within 24 hours.' },
    { step: '03', title: 'Train', desc: 'Attend our free orientation and get certified.' },
    { step: '04', title: 'Earn', desc: 'Start referring clients and earning commissions from day one!' },
]

export default function BecomeDSA() {
    const [form, setForm] = useState({ name: '', mobile: '', email: '', city: '', experience: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Name is required'
        if (!/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = 'Enter valid 10-digit mobile'
        if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter valid email'
        if (!form.city.trim()) e.city = 'City is required'
        return e
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }
        console.log('DSA Registration:', form)
        setSubmitted(true)
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 pt-28 pb-24 px-4 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="inline-block text-xs font-700 uppercase tracking-widest text-indigo-300 bg-indigo-800/50 px-3 py-1.5 rounded-full mb-5">
                            DSA Partner Program
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-900 text-white leading-tight mb-6">
                            Turn Connections Into <br />
                            <span className="text-yellow-300">₹1 Lakh+ Monthly Income</span>
                        </h1>
                        <p className="text-indigo-200 text-lg max-w-2xl mx-auto mb-10">
                            Join India's fastest-growing DSA network. Refer loans to our 50+ lender network and earn industry-leading commissions without any investment.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { value: '500+', label: 'Active DSA Partners' },
                                { value: '₹1L+', label: 'Monthly Avg Earnings' },
                                { value: '48hr', label: 'Onboarding Time' },
                            ].map(s => (
                                <div key={s.label} className="text-center">
                                    <p className="text-3xl font-900 text-white">{s.value}</p>
                                    <p className="text-indigo-300 text-sm">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Benefits */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Why Partner with Us"
                        title="Unbeatable DSA Benefits"
                        subtitle="Everything you need to build a thriving loan distribution business — powered by Happy Finance."
                    />
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dsaBenefits.map((b, i) => {
                            const Icon = b.icon
                            const colorMap = {
                                emerald: 'bg-emerald-100 text-emerald-600',
                                indigo: 'bg-indigo-100 text-indigo-600',
                                purple: 'bg-purple-100 text-purple-600',
                                blue: 'bg-blue-100 text-blue-600',
                                amber: 'bg-amber-100 text-amber-600',
                                rose: 'bg-rose-100 text-rose-600',
                            }
                            return (
                                <motion.div
                                    key={b.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
                                >
                                    <div className={`w-12 h-12 ${colorMap[b.color]} rounded-xl flex items-center justify-center mb-4`}>
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="font-700 text-slate-900 mb-2">{b.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="How It Works"
                        title="Get Started in 4 Steps"
                        subtitle="Our streamlined onboarding gets you earning within 48 hours."
                    />
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-indigo-100 text-center">
                                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-lg font-900 mx-auto mb-4">
                                        {step.step}
                                    </div>
                                    <h3 className="font-800 text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-500">{step.desc}</p>
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                                        <ArrowRight size={20} className="text-indigo-300" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Can Apply */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Who Can Apply"
                        title="Is This For You?"
                        subtitle="Our DSA program is open to a diverse set of professionals and entrepreneurs."
                    />
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whoCanApply.map((w, i) => {
                            const Icon = w.icon
                            return (
                                <motion.div
                                    key={w.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-indigo-50 transition-all"
                                >
                                    <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="font-700 text-slate-900 mb-2">{w.title}</h3>
                                    <p className="text-sm text-slate-500">{w.desc}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Registration Form */}
            <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900">
                <div className="max-w-2xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-800 text-white mb-3">Register as a DSA Partner</h2>
                        <p className="text-indigo-200">Fill in your details and our team will reach out within 24 hours.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-3xl p-8 shadow-2xl"
                    >
                        {submitted ? (
                            <div className="flex flex-col items-center text-center py-8">
                                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle size={32} className="text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-700 text-slate-900 mb-2">Registration Successful!</h3>
                                <p className="text-slate-500">Welcome aboard, {form.name}! Our partnership team will contact you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-600 text-slate-600 mb-1.5">Full Name *</label>
                                        <input
                                            type="text"
                                            placeholder="Your full name"
                                            value={form.name}
                                            onChange={e => setForm({ ...form, name: e.target.value })}
                                            className={`w-full px-4 py-3 border ${errors.name ? 'border-rose-400' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                                        />
                                        {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-600 text-slate-600 mb-1.5">Mobile Number *</label>
                                        <input
                                            type="tel"
                                            placeholder="10-digit number"
                                            value={form.mobile}
                                            maxLength={10}
                                            onChange={e => setForm({ ...form, mobile: e.target.value.replace(/\D/g, '') })}
                                            className={`w-full px-4 py-3 border ${errors.mobile ? 'border-rose-400' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                                        />
                                        {errors.mobile && <p className="text-xs text-rose-500 mt-1">{errors.mobile}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-600 text-slate-600 mb-1.5">Email Address *</label>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        value={form.email}
                                        onChange={e => setForm({ ...form, email: e.target.value })}
                                        className={`w-full px-4 py-3 border ${errors.email ? 'border-rose-400' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                                    />
                                    {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                                </div>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-600 text-slate-600 mb-1.5">City *</label>
                                        <input
                                            type="text"
                                            placeholder="Your city"
                                            value={form.city}
                                            onChange={e => setForm({ ...form, city: e.target.value })}
                                            className={`w-full px-4 py-3 border ${errors.city ? 'border-rose-400' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                                        />
                                        {errors.city && <p className="text-xs text-rose-500 mt-1">{errors.city}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-600 text-slate-600 mb-1.5">Experience in Finance</label>
                                        <select
                                            value={form.experience}
                                            onChange={e => setForm({ ...form, experience: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        >
                                            <option value="">Select experience...</option>
                                            <option>Fresher (0–1 year)</option>
                                            <option>1–3 years</option>
                                            <option>3–5 years</option>
                                            <option>5+ years</option>
                                        </select>
                                    </div>
                                </div>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-700 rounded-xl shadow-lg shadow-indigo-200 transition-all"
                                >
                                    Register as DSA Partner
                                    <ArrowRight size={18} />
                                </motion.button>
                                <p className="text-xs text-center text-slate-400">
                                    By submitting, you agree to our Terms of Service and Privacy Policy.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
