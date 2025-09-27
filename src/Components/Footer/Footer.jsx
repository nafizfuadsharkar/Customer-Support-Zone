import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <h2 className="text-white font-bold text-lg mb-4">CS — Ticket System</h2>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Mission</a></li>
            <li><a href="#" className="hover:text-white">Contact Saled</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Products & Services</a></li>
            <li><a href="#" className="hover:text-white">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white">Download Apps</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Join Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Social Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2 hover:text-white">
              <Twitter size={16} /> <span>@CS — Ticket System</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-white">
              <Linkedin size={16} /> <span>@CS — Ticket System</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-white">
              <Facebook size={16} /> <span>@CS — Ticket System</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-white">
              <Mail size={16} /> <span>support@cst.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}
