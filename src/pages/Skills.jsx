import '../css/pages/skills.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Skills() {
  return (
    <>
      <Header />

      <section className="skills-section">
        <div className="front-end-skills skills-container">
          <h2>Front-End</h2>
          <ul>
            <li>HTML5;</li>
            <li>CSS3;</li>
            <li>JavaScript ES6+ / TypeScript;</li>
            <li>React Js;</li>
            <li>Redux / Context API.</li>
          </ul>
        </div>

        <div className="back-end-skills skills-container">
          <h2>Back-End</h2>
          <ul>
            <li>Docker;</li>
            <li>Node Js / TypeScript;</li>
            <li>Sequelize;</li>
            <li>MySQL / MongoDB / PostgreSQL;</li>
            <li>Python.</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Skills;
