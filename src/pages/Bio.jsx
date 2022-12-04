import '../css/pages/bio.css';
import Header from '../components/Header';
import fotoDeJoao from '../images/foto-de-joao.jpg';

function Bio() {
  return (
    <>
      <Header />

      <section className="bio-section">
        <img alt="Foto de João" src={ fotoDeJoao } />

        <article>
          <h1>Bio</h1>

          <h2>Nome completo</h2>
          <p>João Victor Custódio Marques</p>

          <h2>Nascimento</h2>
          <p>02/02/2002</p>

          <h2>Formação</h2>
          <ul>
            <li> Técnico em informática: Colégio Geração 2000 – Concluído em dezembro de 2019;</li>
            <li>
              Desenvolvimento Web Full Stack: Trybe - Concluído em setembro de 2022.
              <ul>
                <li>
                  O programa conta com mais de 1.500 horas de aulas e aborda introdução ao desenvolvimento de software,
                  front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades
                  comportamentais.
                </li>
              </ul>
            </li>
          </ul>

          <h2>Trajetória:</h2>
          <p>
            Comecei a estudar o básico de desenvolvimento no ensino médio, durante o técnico, e após o ensino médio
            aprofundei meus conhecimentos, fiz o "Curso em Vídeo de Python" do Curso em Vídeo, depois passei pelo curso de
            "Desenvolvimento de Games" e pelo "Pacote Full-Stack" da Danki Code até chegar à Trybe onde fiz diversos
            projetos individuais e em grupos, o que treinou bastante minhas habilidades técnicas e comportamentais
            simulando um ambiente de trabalho com meus colegas de turma. Aprendi tecnologias como React.js, Node.js,
            Sequelize e etc.
          </p>
        </article>
      </section>
    </>
  );
}

export default Bio;
