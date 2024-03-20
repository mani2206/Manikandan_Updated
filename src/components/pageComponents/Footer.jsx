import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="text-center py-3 bg-dark footer_sticky">
        <p className='text-white'>&copy; {currentYear} <span className='fw-bold'>Made by Mani.</span></p>
      </footer>
    </>
  );
}

export default Footer;


