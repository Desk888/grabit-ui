import Link from 'next/link'
import { Twitter, Instagram, Linkedin, Home, Info, Settings, HelpCircle, FileQuestion, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2D882C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4 md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="flex items-center hover:text-gray-200 transition-colors">
                    <Home size={18} className="mr-2" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="flex items-center hover:text-gray-200 transition-colors">
                    <Info size={18} className="mr-2" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="flex items-center hover:text-gray-200 transition-colors">
                    <HelpCircle size={18} className="mr-2" />
                    Help & Support
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="flex items-center hover:text-gray-200 transition-colors">
                    <FileQuestion size={18} className="mr-2" />
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="flex items-center hover:text-gray-200 transition-colors">
                    <FileQuestion size={18} className="mr-2" />
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="space-y-4 md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 justify-start">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="space-y-4 md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">About Grabit</h3>
            <p className="text-sm mb-4">
            Our mission is to make sustainability accessible by connecting people who want to give away items they no longer need with those who can use them. From furniture to books, electronics to clothes—Grabit helps reduce waste and create a circular economy, one free item at a time.
            </p>
            {/* <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-4 pr-12 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#2D882C] text-white p-1 rounded-md hover:bg-[#246F23] transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Send size={20} />
                </button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-green-400 text-center">
          <p className="text-sm">
            © Grabit 2024 | All Rights Reserved | Website by{' '}
            <a 
              href="https://github.com/Desk888" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:text-gray-200 transition-colors"
            >
              Desk888
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

