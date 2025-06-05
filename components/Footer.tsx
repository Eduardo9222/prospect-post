// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-[#5B6D95] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Resources</h3>
          <p>Help</p>
          <p>Buyers</p>
          <p>Sellers</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Legal</h3>
          <p>Terms & Policies</p>
          <p>Refund</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Service Area</h3>
          <p>Texas</p>
        </div>
      </div>
      <div className="text-center mt-6 text-sm">© Copyrights Prospect Post 2025 - All rights reserved.</div>
    </footer>
  );
};

export default Footer;
