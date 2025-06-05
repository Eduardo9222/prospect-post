// components/Header.tsx
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [active, setActive] = useState('Home');

  return (
    <header className="bg-[#687BA5] text-white py-4 px-6 flex justify-between items-center shadow-md max-w-7xl mx-auto">
      {/* Logo */}
      <div className="gap-2 text-xl font-semibold">
        <img src="/logo.png" alt="Prospect Post" className="h-8 w-auto logo" />
      </div>

      {/* Navigation */}
      <nav className="gap-6 text-black">
        <div className="bg-[#E7EAF2] rounded-full flex items-center px-2 py-1 gap-4">
          {['Home', 'About'].map((item) => (
            <Link
              href={`#${active === 'Home' ? '' : 'about'}`}
              key={item}
              onClick={() => setActive(item)}
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                active === item ? 'bg-white border border-[#6678A5]' : ''
              }`}
            >
              {item}
            </Link>
          ))}

          {/* Services Dropdown (static for now) */}
          <button className="flex items-center gap-1 px-4 py-1 text-sm font-medium">
            Services <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Login / Get Started */}
      <div className="bg-[#E7EAF2] rounded-full p-1">
        <Link href="/login" className="px-4 py-1 text-sm font-medium text-black">
          Login
        </Link>
        <Link
          href="/get-started"
          className="bg-[#1B2B47] text-white px-4 py-1 rounded-full text-sm font-medium"
        >
          Get started
        </Link>
      </div>
    </header>
  );
};

export default Header;