import React from 'react';
import { Link } from 'react-router-dom';

import '../css/components/header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <Link class="links name" to="https://github.com/JVLENNY10">
            João (Lenny) Victor
          </Link>

          <div class="mobile-menu">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>

          <ul class="nav-list">
            <li><Link class="links" to="/bio">Bio</Link></li>
            <li><Link class="links" to="/skills">Habilidades</Link></li>
            <li><Link class="links" to="/projects">Projetos</Link></li>
            <li><Link class="links" to="/contact">Contato</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
