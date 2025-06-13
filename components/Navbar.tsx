'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🦴</span>
              <span className="text-xl font-bold text-gray-800">
                Dr. CW的骨科術後衛生教育
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/about')
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              關於本站
            </Link>
            <Link 
              href="/faq"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/faq')
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              常見問答
            </Link>
            <Link 
              href="/ai-chat"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/ai-chat')
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              AI客服
            </Link>
            <Link 
              href="/ai-orth"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/ai-orth')
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              AI骨科學習
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/about')
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
            }`}
          >
            關於本站
          </Link>
          <Link
            href="/faq"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/faq')
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
            }`}
          >
            常見問答
          </Link>
          <Link
            href="/ai-chat"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/ai-chat')
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
            }`}
          >
            AI客服
          </Link>
          <Link
            href="/ai-orth"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/ai-orth')
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
            }`}
          >
            AI骨科學習
          </Link>
        </div>
      </div>
    </nav>
  );
}
