import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/components/header.css';

function Header() {
  const [active, setActive] = useState(false);

  const animateLinks = () => {
    const linkList = document.querySelectorAll('.link-list li');

    linkList.forEach((link, index) => {
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
      <nav className="nav-header">
        <Link className="links-header name" to="/">
          João (Lenny) Victor
        </Link>

        <div
          className={ active ? 'mobile-menu active' : 'mobile-menu' }
          onClick={ handleClick }
        >
          <div className="line1 lines"></div>
          <div className="line2 lines"></div>
          <div className="line3 lines"></div>
        </div>

        <ul className={ active ? 'link-list active' : 'link-list' }>
          <li><Link className="links-header" to="/bio">Bio</Link></li>
          <li><Link className="links-header" to="/skills">Habilidades</Link></li>
          <li><Link className="links-header" to="/projects">Projetos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
