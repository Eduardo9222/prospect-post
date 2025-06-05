// components/Header.tsx
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [active, setActive] = useState('Home');

  return (
    <header className="bg-[#687BA5] p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Prospect Post" className="w-auto logo" />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-4 flex items-center justify-between">
        <div className="bg-[#E7EAF2] rounded-full flex items-center px-4 py-2">
          {['Home', 'About'].map((item) => (
            <Link
              href={`#${active === 'Home' ? '' : 'about'}`}
              key={item}
              onClick={() => setActive(item)}
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                active === item ? 'border border-[#6678A5]' : ''
              }`}
            >
              {item}
            </Link>
          ))}

          {/* Services Dropdown (static for now) */}
          <div className="relative group">
            <Link href="#services">Services ▾</Link>
            <div className="absolute hidden group-hover:block bg-white text-black p-2 mt-1 rounded shadow">
              <p className="hover:bg-gray-200 px-2">Video</p>
              <p className="hover:bg-gray-200 px-2">Installation Process</p>
              <p className="hover:bg-gray-200 px-2">Poster</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Login / Get Started */}
      <div className="flex space-x-2 bg-[#E7EAF2]">
        <Link href="/login" className="text-[#1A1A1A] px-4 py-2 rounded-full">
          Login
        </Link>
        <Link
          href="/get-started"
          className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full"
        >
          Get started
        </Link>
      </div>
    </header>
  );
};

export default Header;
