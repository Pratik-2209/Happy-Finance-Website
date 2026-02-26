import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const loanTypes = [
    'Home Loan', 'Personal Loan', 'Business Loan',
    'Car Loan', 'Credit Card', 'Insurance',
]

export default function LeadCaptureForm({ compact = false }) {
    const [form, setForm] = useState({ name: '', mobile: '', loanType: '' })
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Name is required'
        if (!/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = 'Enter valid 10-digit mobile'
        if (!form.loanType) e.loanType = 'Select a loan type'
        return e
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }
        console.log('Lead captured:', form)
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-8"
            >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-emerald-600" />
                </div>
                <h3 className="text-lg font-700 text-slate-900 mb-2">Thank you, {form.name}!</h3>
                <p className="text-sm text-slate-500">Our advisor will contact you within 2 hours.</p>
            </motion.div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-xs font-600 text-slate-600 mb-1.5">Full Name *</label>
                <input
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className={`w-full px-4 py-3 bg-white border ${errors.name ? 'border-rose-400' : 'border-slate-200'} rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                />
                {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
            </div>

            <div>
                <label className="block text-xs font-600 text-slate-600 mb-1.5">Mobile Number *</label>
                <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={form.mobile}
                    maxLength={10}
                    onChange={e => setForm({ ...form, mobile: e.target.value.replace(/\D/g, '') })}
                    className={`w-full px-4 py-3 bg-white border ${errors.mobile ? 'border-rose-400' : 'border-slate-200'} rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                />
                {errors.mobile && <p className="text-xs text-rose-500 mt-1">{errors.mobile}</p>}
            </div>

            <div>
                <label className="block text-xs font-600 text-slate-600 mb-1.5">Loan Type *</label>
                <select
                    value={form.loanType}
                    onChange={e => setForm({ ...form, loanType: e.target.value })}
                    className={`w-full px-4 py-3 bg-white border ${errors.loanType ? 'border-rose-400' : 'border-slate-200'} rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                >
                    <option value="">Select loan type...</option>
                    {loanTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.loanType && <p className="text-xs text-rose-500 mt-1">{errors.loanType}</p>}
            </div>

            <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-700 rounded-xl shadow-md shadow-indigo-200 transition-all"
            >
                Get Free Consultation
                <ArrowRight size={16} />
            </motion.button>

            <p className="text-xs text-center text-slate-400">
                No spam. We respect your privacy. 🔒
            </p>
        </form>
    )
}
