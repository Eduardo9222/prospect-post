// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#5B6D95] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">PROSPECT <span className="text-blue-300">POST</span></div>
        <nav className="space-x-6 hidden md:block">
          <Link href="#">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
        </nav>
        <div className="space-x-4">
          <button className="border border-white px-3 py-1 rounded-md">Login</button>
          <button className="bg-white text-[#5B6D95] px-4 py-1 rounded-md">Get started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
