import React from 'react';
import { navLinks } from '../constans/index.jsx';
import { HashLink } from 'react-router-hash-link';

const Nav = ({ absolute }) => {
  return (
    <header
      className="max-container w-full py-2 absolute top-0 left-1/2 -translate-x-1/2 translate-y-0"
      style={{ position: !absolute ? 'relative' : 'absolute' }}
    >
      <nav className="flex items-center">
        <a
          href="/site-app-ysl/"
          className="font-orbitron text-3xl leading-10  font-semibold flex flex-col items-end text-green max-[550px]:text-2xl"
        >
          YSL Systems
          <span className="font-orbitron text-sm max-[850px]:text-xs">software & solutions</span>
        </a>
        <div className="flex justify-between grow max-[850px]:hidden">
          <ul className="flex-1 flex justify-center align-bottom gap-7">
            {navLinks.map((item) => (
              <li key={item.label} className=" self-center font-montserrat">
                <HashLink
                  to={item.href}
                  className="py-1 font-bold transition-all border-b-2 border-transparent hover:border-green hover:text-green"
                >
                  {item.label}
                </HashLink>
              </li>
            ))}
          </ul>
          <HashLink to="/site-app-ysl/#contacts" className="button">
            Связаться с нами
          </HashLink>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
