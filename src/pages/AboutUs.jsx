import { motion } from 'framer-motion'
import { Target, Eye, Heart, ShieldCheck, Users, Award, TrendingUp, Zap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const stats = [
    { value: '₹500Cr+', label: 'Loans Disbursed', icon: TrendingUp },
    { value: '10,000+', label: 'Happy Customers', icon: Users },
    { value: '50+', label: 'Lender Partners', icon: Award },
    { value: '500+', label: 'DSA Partners', icon: Zap },
]

const values = [
    { icon: ShieldCheck, color: 'indigo', title: 'Trust & Transparency', desc: 'We believe in complete transparency in every deal — no hidden charges, no fine print surprises.' },
    { icon: Heart, color: 'rose', title: 'Customer First', desc: 'Every decision we make starts and ends with one question: "Is this best for our customer?"' },
    { icon: Zap, color: 'amber', title: 'Speed & Innovation', desc: 'We use technology to make financial services faster, simpler, and more accessible.' },
    { icon: Users, color: 'emerald', title: 'Inclusive Growth', desc: 'We believe everyone deserves access to the right financial products, regardless of background.' },
]

const team = [
    { name: 'Rajesh Patel', role: 'Founder & CEO', initials: 'RP', color: 'from-indigo-500 to-purple-600', bio: '15+ years in finance & banking. Ex-HDFC, IIM Ahmedabad alumnus.' },
    { name: 'Sunita Desai', role: 'Chief Business Officer', initials: 'SD', color: 'from-emerald-500 to-teal-600', bio: '12 years in NBFC sector. Built DSA networks across 10 states.' },
    { name: 'Amit Khurana', role: 'Chief Technology Officer', initials: 'AK', color: 'from-blue-500 to-indigo-600', bio: 'Fintech veteran. Previously at Paytm and PolicyBazaar.' },
    { name: 'Priya Joshi', role: 'Head of Operations', initials: 'PJ', color: 'from-rose-500 to-pink-600', bio: '10+ years in loan processing and compliance. Expert in risk management.' },
]

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 pt-28 pb-24 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="inline-block text-xs font-700 uppercase tracking-widest text-indigo-300 bg-indigo-800/50 px-3 py-1.5 rounded-full mb-5">
                            About Us
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-900 text-white mb-6 leading-tight">
                            Making Finance Simple <br />for Every Indian
                        </h1>
                        <p className="text-indigo-200 text-lg leading-relaxed">
                            Happy Finance is a technology-driven DSA platform that connects borrowers with the best lenders and empowers finance professionals to build profitable businesses — all on one platform.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Stats */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((s, i) => {
                            const Icon = s.icon
                            return (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                        <Icon size={22} />
                                    </div>
                                    <p className="text-3xl font-900 text-indigo-700 mb-1">{s.value}</p>
                                    <p className="text-sm text-slate-500 font-500">{s.label}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {[
                            { icon: Target, color: 'indigo', title: 'Our Mission', content: 'To democratize access to financial products for all Indians — making loan approvals faster, more transparent, and accessible to every citizen, while creating earning opportunities for finance professionals across the country.' },
                            { icon: Eye, color: 'purple', title: 'Our Vision', content: 'To become India\'s most trusted DSA platform — where every financial dream finds the right product, the right lender, and the right advisor — seamlessly, digitally, and with full transparency.' },
                        ].map((item, i) => {
                            const Icon = item.icon
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`bg-gradient-to-br ${item.color === 'indigo' ? 'from-indigo-50 to-blue-50 border-indigo-100' : 'from-purple-50 to-pink-50 border-purple-100'} border rounded-3xl p-8`}
                                >
                                    <div className={`w-12 h-12 ${item.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' : 'bg-purple-100 text-purple-600'} rounded-2xl flex items-center justify-center mb-5`}>
                                        <Icon size={24} />
                                    </div>
                                    <h2 className="text-2xl font-800 text-slate-900 mb-4">{item.title}</h2>
                                    <p className="text-slate-600 leading-relaxed">{item.content}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Our Values"
                        title="What We Stand For"
                        subtitle="The principles that drive every decision and interaction at Happy Finance."
                    />
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => {
                            const Icon = v.icon
                            const colorMap = {
                                indigo: 'bg-indigo-100 text-indigo-600',
                                rose: 'bg-rose-100 text-rose-600',
                                amber: 'bg-amber-100 text-amber-600',
                                emerald: 'bg-emerald-100 text-emerald-600',
                            }
                            return (
                                <motion.div
                                    key={v.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center p-6 rounded-2xl bg-slate-50 hover:shadow-md transition-all"
                                >
                                    <div className={`w-14 h-14 ${colorMap[v.color]} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                                        <Icon size={26} />
                                    </div>
                                    <h3 className="font-700 text-slate-900 mb-2">{v.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Leadership"
                        title="The Team Behind Happy Finance"
                        subtitle="Seasoned professionals from finance, technology, and operations."
                    />
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-6 text-center card-shadow hover:card-shadow-hover transition-all"
                            >
                                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-xl font-900 mx-auto mb-4`}>
                                    {member.initials}
                                </div>
                                <h3 className="font-700 text-slate-900">{member.name}</h3>
                                <p className="text-sm text-indigo-600 font-600 mb-3">{member.role}</p>
                                <p className="text-xs text-slate-500 leading-relaxed">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
