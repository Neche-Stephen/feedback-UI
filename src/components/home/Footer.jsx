import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="flex items-center">
              <img src="./assets/home/footer/footer-icon.png" alt="" />
            </div>
          </div>
          
          {/* Product Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Changelog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Support</a></li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Terms of Privacy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Security</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Social</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Dribbble</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Behance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Discord</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 text-center md:text-right text-gray-400 text-sm">
          All rights reserved.© 2025 Feedbk.com
        </div>
      </div>
    </footer>
  );
}