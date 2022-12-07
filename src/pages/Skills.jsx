import '../css/pages/skills.css';
import Header from '../components/Header';

function Skills() {
  return (
    <>
      <Header />

      <section className="skills-section">
        <article className="skills-article-front">
          <h2>Front-End</h2>
          <ul>
            <li>HTML5;</li>
            <li>CSS3;</li>
            <li>JavaScript ES6+ / TypeScript;</li>
            <li>React Js;</li>
            <li>Redux / Context API.</li>
          </ul>
        </article>

        <article className="skills-article-back">
          <h2>Back-End</h2>
          <ul>
            <li>Docker;</li>
            <li>Node Js / TypeScript;</li>
            <li>Sequelize;</li>
            <li>MySQL / MongoDB / PostgreSQL;</li>
            <li>Python.</li>
          </ul>
        </article>
      </section>
    </>
  );
}

export default Skills;
