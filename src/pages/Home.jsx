import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    ArrowRight, Zap, Users, Award, Headphones,
    CheckCircle, TrendingUp, Building2, Star
} from 'lucide-react'
import ProductCard from '../components/ProductCard'
import BenefitCard from '../components/BenefitCard'
import TestimonialCard from '../components/TestimonialCard'
import LeadCaptureForm from '../components/LeadCaptureForm'
import SectionHeading from '../components/SectionHeading'
import { products } from '../data/products'

const benefits = [
    { icon: Zap, color: 'indigo', title: 'Lightning Fast Approvals', description: 'Get your loan approved in as fast as 24 hours with our streamlined digital process and wide lender network.' },
    { icon: Building2, color: 'purple', title: '50+ Lender Partners', description: 'Access the best rates from leading banks, NBFCs, and digital lenders — all in one place.' },
    { icon: Headphones, color: 'emerald', title: 'Dedicated Support', description: 'Your personal finance advisor guides you from application to disbursal and beyond.' },
    { icon: Award, color: 'amber', title: 'Trusted by 10,000+', description: 'Over ₹500 Crore disbursed and 10,000+ happy customers across India.' },
]

const testimonials = [
    { name: 'Rahul Sharma', location: 'Mumbai', rating: 5, product: 'Home Loan', text: 'Happy Finance made my home loan process incredibly smooth. Got the best rate in the market and the team was always available to answer my questions.' },
    { name: 'Priya Mehta', location: 'Pune', rating: 5, product: 'Personal Loan', text: 'Applied on a Monday, got the amount disbursed by Wednesday! Amazing service and transparent process. Highly recommended.' },
    { name: 'Arun Kumar', location: 'Bangalore', rating: 5, product: 'Business Loan', text: 'As a small business owner, getting funding is always hard. Happy Finance connected me with the right lender within 48 hours. Game changer!' },
]

const stats = [
    { value: '₹500Cr+', label: 'Loans Disbursed' },
    { value: '10,000+', label: 'Happy Customers' },
    { value: '50+', label: 'Lender Partners' },
    { value: '98%', label: 'Customer Satisfaction' },
]

const trustBadges = ['SBI', 'HDFC', 'ICICI', 'Axis', 'Kotak', 'Bajaj', 'IDFC', 'Yes Bank']

function HeroIllustration() {
    return (
        <svg viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
            <circle cx="250" cy="210" r="180" fill="#EEF2FF" opacity="0.6" />
            <circle cx="250" cy="210" r="130" fill="#E0E7FF" opacity="0.5" />

            <rect x="130" y="130" width="240" height="160" rx="20" fill="white" filter="url(#shadow1)" />
            <defs>
                <filter id="shadow1" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#4f46e5" floodOpacity="0.12" />
                </filter>
                <filter id="shadow2" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#4f46e5" floodOpacity="0.15" />
                </filter>
            </defs>

            <rect x="130" y="130" width="240" height="60" rx="20" fill="url(#cardGrad)" />
            <defs>
                <linearGradient id="cardGrad" x1="130" y1="130" x2="370" y2="190" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5" />
                    <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
            </defs>
            <rect x="130" y="170" width="240" height="20" fill="url(#cardGrad)" />

            <rect x="150" y="145" width="28" height="22" rx="4" fill="#FCD34D" />
            <line x1="150" y1="154" x2="178" y2="154" stroke="#F59E0B" strokeWidth="1" />
            <line x1="160" y1="145" x2="160" y2="167" stroke="#F59E0B" strokeWidth="1" />
            <line x1="168" y1="145" x2="168" y2="167" stroke="#F59E0B" strokeWidth="1" />

            <circle cx="155" cy="212" r="4" fill="#CBD5E1" />
            <circle cx="168" cy="212" r="4" fill="#CBD5E1" />
            <circle cx="181" cy="212" r="4" fill="#CBD5E1" />
            <circle cx="194" cy="212" r="4" fill="#CBD5E1" />
            <circle cx="215" cy="212" r="4" fill="#CBD5E1" />
            <circle cx="228" cy="212" r="4" fill="#CBD5E1" />
            <circle cx="241" cy="212" r="4" fill="#CBD5E1" />
            <circle cx="254" cy="212" r="4" fill="#CBD5E1" />
            <text x="270" y="217" fill="#1E293B" fontSize="12" fontFamily="Inter" fontWeight="600">4321</text>
            <text x="150" y="260" fill="#64748B" fontSize="10" fontFamily="Inter">CARD HOLDER</text>
            <text x="150" y="275" fill="#1E293B" fontSize="12" fontFamily="Inter" fontWeight="600">Rahul Sharma</text>
            <text x="310" y="260" fill="#64748B" fontSize="10" fontFamily="Inter">EXPIRES</text>
            <text x="310" y="275" fill="#1E293B" fontSize="12" fontFamily="Inter" fontWeight="600">12/28</text>

            <rect x="60" y="90" width="130" height="70" rx="14" fill="white" filter="url(#shadow2)" />
            <circle cx="82" cy="115" r="14" fill="#D1FAE5" />
            <path d="M76 115l4 4 8-8" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="102" y="107" width="70" height="8" rx="4" fill="#E2E8F0" />
            <rect x="102" y="120" width="50" height="8" rx="4" fill="#10b981" opacity="0.3" />
            <text x="102" y="148" fill="#10b981" fontSize="9" fontFamily="Inter" fontWeight="700">✓ APPROVED</text>

            <rect x="310" y="280" width="130" height="70" rx="14" fill="white" filter="url(#shadow2)" />
            <circle cx="332" cy="305" r="14" fill="#EDE9FE" />
            <path d="M325 305a7 7 0 1 1 14 0" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
            <line x1="332" y1="298" x2="332" y2="305" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
            <line x1="332" y1="305" x2="337" y2="307" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
            <rect x="352" y="297" width="70" height="8" rx="4" fill="#E2E8F0" />
            <text x="352" y="320" fill="#7c3aed" fontSize="11" fontFamily="Inter" fontWeight="700">₹12,500</text>
            <text x="352" y="333" fill="#94A3B8" fontSize="9" fontFamily="Inter">Monthly EMI</text>

            <rect x="60" y="300" width="130" height="60" rx="14" fill="white" filter="url(#shadow2)" />
            <text x="78" y="322" fill="#64748B" fontSize="9" fontFamily="Inter">Loan Progress</text>
            <rect x="78" y="330" width="90" height="6" rx="3" fill="#E2E8F0" />
            <rect x="78" y="330" width="65" height="6" rx="3" fill="url(#progressGrad)" />
            <defs>
                <linearGradient id="progressGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#4f46e5" />
                    <stop offset="1" stopColor="#10b981" />
                </linearGradient>
            </defs>
            <text x="78" y="350" fill="#1E293B" fontSize="10" fontFamily="Inter" fontWeight="700">72% Complete</text>

            <circle cx="80" cy="60" r="6" fill="#C7D2FE" />
            <circle cx="100" cy="40" r="4" fill="#A5F3FC" />
            <circle cx="420" cy="150" r="8" fill="#DDD6FE" />
            <circle cx="440" cy="180" r="5" fill="#BBF7D0" />
            <circle cx="400" cy="80" r="6" fill="#FDE68A" />
        </svg>
    )
}

export default function Home() {
    return (
        <>
            {/* ── HERO ── */}
            <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f8fafc 60%, #ede9fe 100%)', paddingTop: '80px' }}>
                {/* Decorative blobs */}
                <div style={{ position: 'absolute', top: '5rem', right: 0, width: '24rem', height: '24rem', background: '#c7d2fe', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.3 }} />
                <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', width: '18rem', height: '18rem', background: '#ddd6fe', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.25 }} />

                <div className="section-container" style={{ position: 'relative', paddingTop: '3rem', paddingBottom: '3rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}
                        className="lg-two-col">
                        {/* Left */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)', border: '1px solid #e0e7ff', borderRadius: '9999px', padding: '0.5rem 1rem', marginBottom: '1.5rem', fontSize: '0.875rem', color: '#4338ca' }}
                                className="font-600"
                            >
                                <span style={{ width: '0.5rem', height: '0.5rem', background: '#34d399', borderRadius: '50%', display: 'inline-block' }} />
                                India's Trusted DSA Partner Network
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.1, marginBottom: '1.5rem' }}
                            >
                                Smart Loans.{' '}
                                <span className="text-gradient">Better Rates.</span>
                                <br />Faster Approval.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '34rem' }}
                            >
                                Happy Finance connects you with 50+ top lenders for home loans, personal loans, business loans and more — with the best rates, minimal paperwork, and expert support at every step.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}
                            >
                                <Link
                                    to="/products"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', background: '#4f46e5', color: 'white', borderRadius: '0.875rem', fontWeight: 700, fontSize: '0.9375rem', boxShadow: '0 4px 20px rgba(79,70,229,0.35)', transition: 'all 0.2s', textDecoration: 'none', border: 'none' }}
                                    onMouseEnter={e => e.currentTarget.style.background = '#4338ca'}
                                    onMouseLeave={e => e.currentTarget.style.background = '#4f46e5'}
                                >
                                    Apply for Loan <ArrowRight size={18} />
                                </Link>
                                <Link
                                    to="/become-dsa"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', background: 'white', color: '#4338ca', borderRadius: '0.875rem', fontWeight: 700, fontSize: '0.9375rem', border: '2px solid #e0e7ff', transition: 'all 0.2s', textDecoration: 'none' }}
                                    onMouseEnter={e => e.currentTarget.style.borderColor = '#a5b4fc'}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = '#e0e7ff'}
                                >
                                    <Users size={18} /> Become a DSA
                                </Link>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}
                            >
                                {stats.map(s => (
                                    <div key={s.label}>
                                        <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#4338ca' }}>{s.value}</p>
                                        <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.125rem', fontWeight: 500 }}>{s.label}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right — Illustration */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            className="hero-illustration"
                        >
                            <HeroIllustration />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── TRUST STRIP ── */}
            <section style={{ background: 'white', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', padding: '1.25rem 0' }}>
                <div className="section-container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', whiteSpace: 'nowrap' }}>Our Lender Partners:</span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.625rem' }}>
                            {trustBadges.map(b => (
                                <div key={b} style={{ height: '2.25rem', padding: '0 1.25rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#64748b' }}>{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRODUCTS ── */}
            <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
                <div className="section-container">
                    <SectionHeading
                        eyebrow="Our Products"
                        title="Loans & Financial Products"
                        subtitle="Explore our wide range of financial products tailored to meet every need — from your dream home to growing your business."
                    />
                    <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {products.map((product, i) => (
                            <ProductCard key={product.slug} product={product} index={i} />
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ marginTop: '2.5rem', textAlign: 'center' }}
                    >
                        <Link
                            to="/products"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.9375rem', fontWeight: 600, color: '#4f46e5', textDecoration: 'none' }}
                        >
                            View all products <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── WHY CHOOSE US ── */}
            <section style={{ padding: '5rem 0', background: 'white' }}>
                <div className="section-container">
                    <SectionHeading
                        eyebrow="Why Happy Finance"
                        title="Why Thousands Trust Us"
                        subtitle="We combine technology, expertise, and a wide lender network to give you the best financial solutions every time."
                    />
                    <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '1.5rem' }}>
                        {benefits.map((b, i) => (
                            <BenefitCard key={b.title} {...b} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LEAD CAPTURE ── */}
            <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.07 }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '24rem', height: '24rem', background: 'white', borderRadius: '50%', filter: 'blur(80px)' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '18rem', height: '18rem', background: '#a78bfa', borderRadius: '50%', filter: 'blur(80px)' }} />
                </div>
                <div className="section-container" style={{ position: 'relative' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="lead-two-col">
                        {/* Left copy */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a5b4fc', background: 'rgba(79,70,229,0.3)', padding: '0.375rem 0.875rem', borderRadius: '9999px', marginBottom: '1.25rem' }}>
                                Free Consultation
                            </span>
                            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                                Get Expert Advice<br />In 30 Minutes
                            </h2>
                            <p style={{ color: '#cbd5e1', marginBottom: '2rem', lineHeight: 1.75, fontSize: '1rem' }}>
                                Tell us your requirement and our certified financial advisor will call you within 30 minutes with the best options tailored just for you.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {['No obligation, completely free', 'Compare rates from 50+ lenders', 'Expert guidance through the entire process'].map(item => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', color: '#cbd5e1' }}>
                                        <CheckCircle size={18} color="#34d399" style={{ flexShrink: 0 }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Right form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ background: 'white', borderRadius: '1.5rem', padding: '2.5rem', boxShadow: '0 25px 60px rgba(0,0,0,0.3)' }}
                        >
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.375rem' }}>Request a Callback</h3>
                            <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1.5rem' }}>We'll get back to you within 30 minutes!</p>
                            <LeadCaptureForm />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
                <div className="section-container">
                    <SectionHeading
                        eyebrow="Testimonials"
                        title="What Our Customers Say"
                        subtitle="Join 10,000+ customers who got the best loan deals through Happy Finance."
                    />
                    <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {testimonials.map((t, i) => (
                            <TestimonialCard key={t.name} {...t} index={i} />
                        ))}
                    </div>

                    {/* Google rating */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', background: 'white', borderRadius: '1rem', padding: '1.25rem 2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                            <div>
                                <p style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a' }}>4.9</p>
                                <div style={{ display: 'flex', gap: '2px', marginTop: '0.25rem' }}>
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />)}
                                </div>
                            </div>
                            <div style={{ width: '1px', height: '3rem', background: '#f1f5f9' }} />
                            <div>
                                <p style={{ fontWeight: 700, color: '#0f172a' }}>Google Rating</p>
                                <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Based on 2,400+ reviews</p>
                            </div>
                            <div style={{ width: '2.5rem', height: '2.5rem', background: '#eff6ff', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg viewBox="0 0 24 24" style={{ width: '1.5rem', height: '1.5rem' }}>
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── DSA CTA BANNER ── */}
            <section style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', padding: '4rem 0' }}>
                <div className="section-container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
                            Ready to Earn More? Become a DSA!
                        </h2>
                        <p style={{ color: '#c7d2fe', fontSize: '1.125rem', marginBottom: '2rem' }}>
                            Join our network of 500+ DSA partners and earn attractive commissions on every loan you refer.
                        </p>
                        <Link
                            to="/become-dsa"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: 'white', color: '#4338ca', borderRadius: '0.875rem', fontWeight: 700, fontSize: '1rem', boxShadow: '0 8px 24px rgba(0,0,0,0.2)', textDecoration: 'none', transition: 'transform 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <TrendingUp size={18} />
                            Join as DSA Partner
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
