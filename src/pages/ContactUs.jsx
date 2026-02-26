import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const contactInfo = [
    {
        icon: Phone,
        title: 'Call Us',
        color: 'indigo',
        lines: ['+91 98765 43210', '+91 98765 43211'],
        sub: 'Mon – Sat, 9 AM – 7 PM',
        href: 'tel:+919876543210',
    },
    {
        icon: Mail,
        title: 'Email Us',
        color: 'purple',
        lines: ['info@happyfinance.in', 'support@happyfinance.in'],
        sub: 'We reply within 2 hours',
        href: 'mailto:info@happyfinance.in',
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        color: 'emerald',
        lines: ['123, Finance Tower', 'BKC, Mumbai – 400051'],
        sub: 'Mon – Fri, 10 AM – 6 PM',
        href: '#',
    },
    {
        icon: Clock,
        title: 'Working Hours',
        color: 'amber',
        lines: ['Mon – Sat: 9 AM – 7 PM', 'Sunday: 10 AM – 3 PM'],
        sub: 'Online applications 24/7',
        href: null,
    },
]

const faqs = [
    { q: 'How fast can I get a loan?', a: 'Personal loans can be approved in 24 hours. Home loans take 48–72 hours for approval.' },
    { q: 'Are there any fees for using Happy Finance?', a: 'No! Our service is completely free for borrowers. Lenders pay us a small referral fee.' },
    { q: 'What documents are required?', a: 'Basic documents include PAN, Aadhaar, last 3 salary slips, and 6 months bank statements.' },
    { q: 'Which cities do you serve?', a: 'We serve all major cities across India. Our digital process works nationwide.' },
]

export default function ContactUs() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Name is required'
        if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter valid email'
        if (!form.message.trim()) e.message = 'Message is required'
        return e
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }
        console.log('Contact form:', form)
        setSubmitted(true)
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 pt-28 pb-20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="inline-block text-xs font-700 uppercase tracking-widest text-indigo-300 bg-indigo-800/50 px-3 py-1.5 rounded-full mb-5">
                            Get in Touch
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-900 text-white mb-5">We're Here to Help</h1>
                        <p className="text-indigo-200 text-lg">
                            Have a question about a loan, our DSA program, or just want to say hello? Our team typically responds within 2 hours.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Contact Info Cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {contactInfo.map((c, i) => {
                        const Icon = c.icon
                        const colorMap = {
                            indigo: 'bg-indigo-100 text-indigo-600',
                            purple: 'bg-purple-100 text-purple-600',
                            emerald: 'bg-emerald-100 text-emerald-600',
                            amber: 'bg-amber-100 text-amber-600',
                        }
                        return (
                            <motion.div
                                key={c.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-6 card-shadow"
                            >
                                <div className={`w-12 h-12 ${colorMap[c.color]} rounded-xl flex items-center justify-center mb-4`}>
                                    <Icon size={22} />
                                </div>
                                <h3 className="font-700 text-slate-900 mb-2">{c.title}</h3>
                                {c.lines.map(line =>
                                    c.href && c.href !== '#' ? (
                                        <a key={line} href={c.href} className="block text-sm text-indigo-600 hover:text-indigo-700 font-500 transition-colors">{line}</a>
                                    ) : (
                                        <p key={line} className="text-sm text-slate-700 font-500">{line}</p>
                                    )
                                )}
                                <p className="text-xs text-slate-400 mt-2">{c.sub}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </section>

            {/* Contact form + FAQ */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-800 text-slate-900 mb-2">Send Us a Message</h2>
                        <p className="text-slate-500 mb-8">We'll get back to you within 2 business hours.</p>

                        <div className="bg-white rounded-2xl p-8 card-shadow">
                            {submitted ? (
                                <div className="flex flex-col items-center text-center py-8">
                                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle size={32} className="text-emerald-600" />
                                    </div>
                                    <h3 className="text-lg font-700 text-slate-900 mb-2">Message Sent!</h3>
                                    <p className="text-slate-500">Thanks {form.name}, we'll get back to you within 2 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-600 text-slate-600 mb-1.5">Full Name *</label>
                                            <input
                                                type="text"
                                                placeholder="Your name"
                                                value={form.name}
                                                onChange={e => setForm({ ...form, name: e.target.value })}
                                                className={`w-full px-4 py-3 border ${errors.name ? 'border-rose-400' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                                            />
                                            {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-xs font-600 text-slate-600 mb-1.5">Phone</label>
                                            <input
                                                type="tel"
                                                placeholder="Mobile number"
                                                value={form.phone}
                                                onChange={e => setForm({ ...form, phone: e.target.value })}
                                                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-600 text-slate-600 mb-1.5">Email *</label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            value={form.email}
                                            onChange={e => setForm({ ...form, email: e.target.value })}
                                            className={`w-full px-4 py-3 border ${errors.email ? 'border-rose-400' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                                        />
                                        {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-600 text-slate-600 mb-1.5">Subject</label>
                                        <input
                                            type="text"
                                            placeholder="How can we help?"
                                            value={form.subject}
                                            onChange={e => setForm({ ...form, subject: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-600 text-slate-600 mb-1.5">Message *</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Tell us how we can help you..."
                                            value={form.message}
                                            onChange={e => setForm({ ...form, message: e.target.value })}
                                            className={`w-full px-4 py-3 border ${errors.message ? 'border-rose-400' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none`}
                                        />
                                        {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                                    </div>
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-700 rounded-xl shadow-md shadow-indigo-200 transition-all"
                                    >
                                        <MessageSquare size={16} />
                                        Send Message
                                        <ArrowRight size={16} />
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* FAQ */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-800 text-slate-900 mb-2">Frequently Asked Questions</h2>
                        <p className="text-slate-500 mb-8">Quick answers to common questions.</p>

                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={faq.q}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white rounded-2xl p-6 card-shadow"
                                >
                                    <h3 className="font-700 text-slate-900 mb-2 flex items-start gap-2">
                                        <span className="text-indigo-600 mt-0.5">Q.</span>
                                        {faq.q}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed pl-5">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Map placeholder */}
                        <div className="mt-6 bg-indigo-50 border border-indigo-100 rounded-2xl h-52 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin size={32} className="text-indigo-400 mx-auto mb-2" />
                                <p className="text-sm text-slate-500">123, Finance Tower, BKC</p>
                                <p className="text-sm text-slate-500">Bandra Kurla Complex, Mumbai – 400051</p>
                                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-indigo-600 font-600 hover:underline">
                                    Open in Google Maps →
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
