import { Link } from 'react-router-dom';

import '../css/pages/projects.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Projects() {
  return (
    <>
      <Header />

      <section className="projects-section">
        <div className="projects-container">
          <h1>Front-End</h1>

          <ul>
            <li>
              <div>
                <h2>Solar System</h2>
                <Link to="/solar-system">Projeto</Link>
                <a href="https://github.com/JVLENNY10/solar-system">
                  Repositório do projeto
                </a>
              </div>
            </li>

            <li>
              <div>
                <h2>Trybetunes</h2>
                <Link to="/trybetunes">Projeto</Link>
                <a href="https://github.com/JVLENNY10/trybetunes">
                  Repositório do projeto
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="projects-container">
          <h1>Back-End</h1>

          <ul>
            <li>
              <div>
                <h2>Blogs API</h2>
                <Link to="*">Apenas Back-End</Link>
                <a href="https://github.com/JVLENNY10/blogs-api">
                  Repositório do projeto
                </a>
              </div>
            </li>

            <li>
              <div>
                <h2>Talker Manager</h2>
                <Link to="*">Apenas Back-End</Link>
                <a href="https://github.com/JVLENNY10/talker-manager">
                  Repositório do projeto
                </a>
              </div>
            </li>

            <li>
              <div>
                <h2>Trybe Futebol Clube</h2>
                <Link to="*">Apenas Back-End</Link>
                <a href="https://github.com/JVLENNY10/trybe-futebol-clube">
                  Repositório do projeto
                </a>
              </div>
            </li>

            <li>
              <div>
                <h2>Trybesmith</h2>
                <Link to="*">Apenas Back-End</Link>
                <a href="https://github.com/JVLENNY10/trybesmith">
                  Repositório do projeto
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Projects;
