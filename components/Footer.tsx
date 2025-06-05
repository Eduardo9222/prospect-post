import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5D6EAB] text-white px-6 md:px-16 pt-12 pb-6 rounded-t-[60px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo & Social */}
        <div className="space-y-4 max-w-sm">
          <Image src="/logo-white.png" alt="Prospect Post" width={140} height={50} />
          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-[#0E1C38] p-2 rounded-full hover:opacity-80">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-[#0E1C38] p-2 rounded-full hover:opacity-80">
              <FaInstagram />
            </a>
            <a href="#" className="bg-[#0E1C38] p-2 rounded-full hover:opacity-80">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-[#0E1C38] p-2 rounded-full hover:opacity-80">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-white/90">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-white/90">
              <li><a href="#">Help</a></li>
              <li><a href="#">Buyers</a></li>
              <li><a href="#">Sellers</a></li>
              <li><a href="#">Directory</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-white/90">
              <li><a href="#">Terms & Policies</a></li>
              <li><a href="#">Refund</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Services Area</h4>
            <ul className="space-y-2 text-white/90">
              <li><a href="#">Texas</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm">
        © Copyrights Prospect Post 2025 - All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
