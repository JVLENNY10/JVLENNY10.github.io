import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>Error: 404</h1>
      <p>Página não encontrada</p>

      <Link to="/">Retorne ao início</Link>
    </div>
  );
}

export default ErrorPage;
