import { Link } from 'react-router-dom';

import '../css/pages/errorPage.css';

function ErrorPage() {
  return (
    <section className="error-section">
      <div className="error-container">
        <h1>Error 404</h1>
        <p>Página não encontrada</p>

        <Link to="/">Retorne ao início clicando aqui</Link>
      </div>
    </section>
  );
}

export default ErrorPage;
