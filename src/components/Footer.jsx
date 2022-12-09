import '../css/components/footer.css';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';

function Footer() {
  return (
    <footer>
      <nav className="social-networks">
        <a
          href="https://github.com/JVLENNY10"
          rel="noreferrer"
          target="_blank"
        >
          <img alt="Logo do GitHub" src={ github } />
        </a>

        <a
          href="https://www.instagram.com/jv_lenny10/"
          rel="noreferrer"
          target="_blank"
        >
          <img alt="Logo do Instagram" src={ instagram } />
        </a>

        <a
          href="https://www.linkedin.com/in/jvlenny10/"
          rel="noreferrer"
          target="_blank"
        >
          <img alt="Logo do LinkedIn" src={ linkedin } />
        </a>
      </nav>

      <div className="contact">
        <p>E-Mail: joao.lenny100@gmail.com</p>
        <p className="cell">Celular: (21)97293-7681</p>
      </div>
    </footer>
  );
}

export default Footer;
