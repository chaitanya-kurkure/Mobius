'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'AboutUs', path: '/' },
  { name: 'Plans', path: '/' },
  { name: 'Testimonials', path: '/' },
  { name: 'Privacy Policy', path: '/' },
];

const moreLinks = [
  { name: 'Careers', path: '/careers' },
  { name: 'Blog', path: '/blog' },
  { name: 'Support', path: '/support' },
];

export default function Navbar() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const handleNavToggle = useCallback(() => {
    setIsMobileNavActive(prev => !prev);
  }, []);

  const handleNavLinkClick = useCallback(() => {
    setIsMobileNavActive(false);
    setIsMoreOpen(false);
  }, []);

  const handleMoreToggle = useCallback(() => {
    if (window.innerWidth <= 768) {
      setIsMoreOpen(prev => !prev);
    }
  }, []);

  return (
    <header className={`header flex-center ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
      <div className="container flex-center">
        <a href="/" className="logo flex-center mr-0 w-small-40">
          <Image
            src="/images/logo.svg"
            height={50}
            width={75}
            alt="mobiusengine Logo"
            priority
          />
          MobiusEngine
        </a>

        <nav className="navmenu">
          <ul className="capitalize">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.path} onClick={handleNavLinkClick}>
                  {link.name}
                </a>
              </li>
            ))}

            <li
              className="relative group"
              onClick={handleMoreToggle}
            >
              <div className="flex flex-center cursor">
                More <span className="ml-1">▼</span>
              </div>

              <ul
                className={`dropdown-menu ${
                  isMoreOpen ? 'block' : 'hidden'
                } group-hover:block`}
              >
                {moreLinks.map((link, idx) => (
                  <li key={idx} className="dropdown">
                    <a href={link.path} onClick={handleNavLinkClick}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>

        <div className="header-social-links">
          <a className="button-white" href="/contact">Get Started</a>
          <i 
            className={`mobile-nav-toggle toggle-button bi ${
              isMobileNavActive ? 'bi-x' : 'bi-list'
            }`}
            onClick={handleNavToggle}
            role="button"
            aria-label="Toggle navigation"
            tabIndex={0}
          />
        </div>
      </div>
    </header>
  );
}
