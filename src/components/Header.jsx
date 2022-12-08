import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/components/header.css';

function Header() {
  const [active, setActive] = useState(false);

  const animateLinks = () => {
    const navLinks = document.querySelectorAll('.nav-list li');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
  };

  const handleClick = () => {
    setActive(!active);
    animateLinks();
  };

  return (
    <header>
      <nav>
        <Link className="name" to="/">
          João (Lenny) Victor
        </Link>

        <div
          className={ active ? 'mobile-menu active' : 'mobile-menu' }
          onClick={ handleClick }
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <ul className={ active ? 'nav-list active' : 'nav-list' }>
          <li><Link to="/bio">Bio</Link></li>
          <li><Link to="/skills">Habilidades</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
