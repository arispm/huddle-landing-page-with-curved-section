import React from 'react';
import bgFooterDesk from '../images/bg-footer-top-desktop.svg';
import bgFooterMobile from '../images/bg-footer-top-mobile.svg';
import phone from '../images/icon-phone.svg';
import email from '../images/icon-email.svg';
import logo2 from '../images/logo2.svg';
import fb from '../images/logo-facebook.svg';
import ig from '../images/logo-instagram (2).svg';
import tw from '../images/logo-twitter.svg';

const Footer = () => {
  return (
    <>
      <picture>
        <source media="(min-width:750px)" srcSet={bgFooterDesk} />
        <img src={bgFooterMobile} className="w-full" />
      </picture>

      <footer className="bg-[#00252e] text-white py-16 mt-[-10px]">
        <div className="container mx-auto flex flex-col md:flex-row-reverse md:justify-between md:items-start">
          <div>
            <h4 className="text-2xl">NEWSPAPER</h4>
            <p className="my-8">To receive tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address</p>
            <form className="flex flex-col items-end gap-3 md:flex-row md:items-center">
              <input type="email" name="Email" className="rounded-md p-4 w-full" autoFocus />
              <button type="submit" className="bg-[#ff52bf] hover:bg-[#ff8fd8] p-4 rounded-lg w-1/2">
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <img src={logo2} alt="Logo" />
            <p className="my-8 md:my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
            <div className="flex gap-3 items-center">
              <img src={phone} alt="phone-icon" />
              <span>+1-543-123-4567</span>
            </div>
            <div className="flex gap-3 items-center mt-5">
              <img src={email} alt="email-icon" />
              <span>example@huddle.com</span>
            </div>
            <div className="flex gap-4 mt-12">
              <img src={fb} alt="fb-icon" className="w-10 h-10 cursor-pointer" />
              <img src={ig} alt="instagram-icon" className="w-10 h-10 cursor-pointer" />
              <img src={tw} alt="twitter-icon" className="w-10 h-10 cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
