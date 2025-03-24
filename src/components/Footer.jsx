import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-4">
            <a
              href="https://www.instagram.com/utkarshkhetan13"
              target="_blank"
              rel="noreferrer"
              className="text-textPrimary hover:text-accent transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/utkarsh.khetan.73"
              target="_blank"
              rel="noreferrer"
              className="text-textPrimary hover:text-accent transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="text-textPrimary hover:text-accent transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-textSecondary text-sm text-center">
            © {new Date().getFullYear()} Utkarsh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;