import { Link } from 'react-router-dom'
import { TrendingUp, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'

const productLinks = [
    { label: 'Home Loan', to: '/products/home-loan' },
    { label: 'Personal Loan', to: '/products/personal-loan' },
    { label: 'Business Loan', to: '/products/business-loan' },
    { label: 'Car Loan', to: '/products/car-loan' },
    { label: 'Credit Card', to: '/products/credit-card' },
    { label: 'Insurance', to: '/products/insurance' },
]

const companyLinks = [
    { label: 'About Us', to: '/about' },
    { label: 'Become a DSA', to: '/become-dsa' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
]

const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer */}
                <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-5">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                <TrendingUp size={18} className="text-white" />
                            </div>
                            <span className="text-xl font-800 text-white">
                                Happy<span className="text-indigo-400">Finance</span>
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed mb-6">
                            India's trusted DSA partner for home loans, personal loans, business loans, and more. Fast approvals, best rates, expert guidance.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 bg-slate-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white text-sm font-700 uppercase tracking-wider mb-5">Products</h3>
                        <ul className="space-y-3">
                            {productLinks.map(link => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white text-sm font-700 uppercase tracking-wider mb-5">Company</h3>
                        <ul className="space-y-3">
                            {companyLinks.map(link => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white text-sm font-700 uppercase tracking-wider mb-5">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                                <span className="text-sm text-slate-400">
                                    123, Finance Tower, Bandra Kurla Complex, Mumbai – 400051
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-indigo-400 shrink-0" />
                                <a href="tel:+919876543210" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-indigo-400 shrink-0" />
                                <a href="mailto:info@happyfinance.in" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                                    info@happyfinance.in
                                </a>
                            </li>
                        </ul>

                        {/* RBI / NBFC badge placeholder */}
                        <div className="mt-6 inline-flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2">
                            <div className="w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center">
                                <span className="text-emerald-400 text-xs font-700">✓</span>
                            </div>
                            <span className="text-xs text-slate-400">RBI Registered Partner</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Happy Finance. All rights reserved. DSA Registration: DSA-MH-2024-001.
                    </p>
                    <p className="text-xs text-slate-600 text-center">
                        Loan approvals subject to lender's discretion. Interest rates may vary.
                    </p>
                </div>
            </div>
        </footer>
    )
}
