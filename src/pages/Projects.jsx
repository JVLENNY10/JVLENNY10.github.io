import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';

function Projects() {
  return (
    <>
      <Header />

      <div className="projects-page">

        <div className="projects-section">
          <div>
            <ul>
              <li>
                <article>
                  <h2>Trybetunes</h2>
                  <nav>
                    <Link to="/trybetunes">Projeto</Link>
                    <a href="https://github.com/JVLENNY10/trybetunes">
                      Repositório do projeto
                    </a>
                  </nav>
                </article>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Projects;
