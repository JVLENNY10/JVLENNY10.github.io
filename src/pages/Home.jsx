import { Link } from 'react-router-dom';

import '../css/pages/home.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {
  return (
    <>
      <Header />

      <div className="home-page">
        <section className="home-section">
          <article>
            <h1>Seja bem vindo!</h1>

            <p>
              Aqui você vai encontrar informações sobre mim,
              minhas habilidades e meus projetos.
            </p>
          </article>

          <Link to="/projects">
            Veja os projetos clicando aqui
          </Link>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;
