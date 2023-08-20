import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();

  const footerStyles = {
    width: '100vw',
    position: 'relative',
    bottom: '0px',
    padding: '32px 50px',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '24px 24px 0 0',
    backgroundColor: 'rgba(0, 0, 0, 1.0)',
    zIndex: 1,
  };

  const linkStyles = {
    margin: '0 10px',
    opacity: 0.65,
    color: 'white',
    textDecoration: 'none',
  };

  const activeLinkStyles = {
    margin: '0 10px',
    opacity: 1.00,
    color: 'white',
    textDecoration: 'none',
  };

  const yearStyles = {
    fontSize: '1em',
    color: 'white',
  };

  return (
    <footer style={footerStyles}>
      <section>
        {useLink("/", "home")}
        {useLink("/blog", "blog")}
        {useLink("/privacy-policy", "privacy policy")}
      </section>
      <p>{year} © João Gabriel</p>
    </footer>
  );

  function useLink(route, name) {
    return <NavLink
      to={route}
      style={React.useCallback(({ isActive }) => isActive ? activeLinkStyles : linkStyles)}>
      {name}
    </NavLink>;
  }
}

export default Footer;
