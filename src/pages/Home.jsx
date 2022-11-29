import { Link } from 'react-router-dom';

import Header from '../components/Header';

function Home() {
  return (
    <>
      <Header />

      <main>
        <article>
          <h1>Seja bem vindo!</h1>

          <p>
            Aqui você vai encontrar informações sobre mim,
            minhas habilidades e meus projetos.
          </p>

          <p>
            <Link to="/contact">
              Entre em contato clicando aqui
            </Link>
          </p>
        </article>
      </main>
    </>
  );
}

export default Home;
