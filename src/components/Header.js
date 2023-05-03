import React from 'react';
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <>
      <header class="py-8">
        <div class="container mx-auto flex justify-between items-center gap-3">
          <a href="#">
            <img src={logo} alt="Logo" class="w-44 h-7" />
          </a>
          <button type="button" class="text-[#ff52bf] border-2 border-[#ff52bf] py-2 px-5 rounded-full text-[15px]">
            Try it free
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
