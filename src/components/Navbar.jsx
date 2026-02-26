import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, TrendingUp } from 'lucide-react'

const navLinks = [
    { label: 'Home', to: '/' },
    {
        label: 'Products',
        to: '/products',
        children: [
            { label: 'Home Loan', to: '/products/home-loan' },
            { label: 'Personal Loan', to: '/products/personal-loan' },
            { label: 'Business Loan', to: '/products/business-loan' },
            { label: 'Car Loan', to: '/products/car-loan' },
            { label: 'Credit Card', to: '/products/credit-card' },
            { label: 'Insurance', to: '/products/insurance' },
        ],
    },
    { label: 'Become a DSA', to: '/become-dsa' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [dropdown, setDropdown] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                            <TrendingUp size={18} className="text-white" />
                        </div>
                        <span className="text-xl font-800 text-slate-900">
                            Happy<span className="text-indigo-600">Finance</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map(link =>
                            link.children ? (
                                <div
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() => setDropdown(link.label)}
                                    onMouseLeave={() => setDropdown(null)}
                                >
                                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-500 text-slate-700 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">
                                        {link.label}
                                        <ChevronDown size={14} className={`transition-transform ${dropdown === link.label ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {dropdown === link.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 8 }}
                                                transition={{ duration: 0.15 }}
                                                className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50"
                                            >
                                                {link.children.map(child => (
                                                    <Link
                                                        key={child.label}
                                                        to={child.to}
                                                        className="block px-4 py-2 text-sm text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <NavLink
                                    key={link.label}
                                    to={link.to}
                                    end={link.to === '/'}
                                    className={({ isActive }) =>
                                        `px-3 py-2 text-sm font-500 rounded-lg transition-all ${isActive
                                            ? 'text-indigo-600 bg-indigo-50'
                                            : 'text-slate-700 hover:text-indigo-600 hover:bg-indigo-50'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            )
                        )}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            to="/become-dsa"
                            className="text-sm font-600 text-indigo-600 hover:text-indigo-700 transition-colors"
                        >
                            Partner with Us
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => navigate('/products')}
                            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-600 rounded-xl shadow-sm shadow-indigo-200 transition-all"
                        >
                            Apply Now
                        </motion.button>
                    </div>

                    {/* Mobile menu btn */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map(link =>
                                link.children ? (
                                    <div key={link.label}>
                                        <p className="px-3 py-2 text-xs font-700 text-slate-400 uppercase tracking-wider">{link.label}</p>
                                        {link.children.map(child => (
                                            <Link
                                                key={child.label}
                                                to={child.to}
                                                onClick={() => setMobileOpen(false)}
                                                className="block px-6 py-2 text-sm text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <NavLink
                                        key={link.label}
                                        to={link.to}
                                        end={link.to === '/'}
                                        onClick={() => setMobileOpen(false)}
                                        className={({ isActive }) =>
                                            `block px-3 py-2 text-sm font-500 rounded-lg transition-colors ${isActive ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700 hover:bg-slate-50'
                                            }`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                )
                            )}
                            <div className="pt-3 border-t border-slate-100">
                                <Link
                                    to="/products"
                                    onClick={() => setMobileOpen(false)}
                                    className="block w-full text-center px-5 py-3 bg-indigo-600 text-white text-sm font-600 rounded-xl"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
