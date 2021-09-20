/* eslint-disable max-len */
// create a home component
import React from 'react';
import style from './Home.css';
import { Project1, Project2, Project3 } from '../projects/ProjectItem';

const Home = () => {
  return (
    <div className={style.divHome}>
      <div className={style.divAbout}>
        <h1 className={style.h1Home}>[austin summerlin]</h1>
        <h2 className={style.h2Home}>[full stack developer]</h2>
        <img className={style.aboutImg} src="https://lh3.googleusercontent.com/pw/AM-JKLUvtTl1KQfDNidiOI72ubVFQBSQhmc_x3nWbT46VkErgEQyUrC8JXP5nWtUgOXitW3tfmmIHx_gRRUP2uiannuFcp4W2Gqg18fVnVmLc-aLZC_t1zvW-y7iO40PCffRCIdvDGfSPXe7SHIUHbJABb0T=w708-h944-no?authuser=0" alt="austin"></img>
        <span className={style.aboutSpan1}>
          I enjoy using sustainable architecture and minimalist design to create
          simple and intuitive applications.
          When not writing code, I enjoy gardening, photography, horror films and
          spending time with my partner and our pets.
        </span>
        <div className={style.divContact}>
          <span className={style.contactSpan2}>
            <a href="https://www.linkedin.com/in/austin-summerlin">[linkedin]</a>
            <a href="https://www.github.com/austin-summerlin">[github]</a>
            <a href="https://drive.google.com/file/d/1sFjtGWIyhesx61-uhb6z6T6M2N-Uaer4/view?usp=sharin">[resume]</a>
          </span>
        </div>
        <div>
          <span className={style.techSpan}>
            <p className={style.techSpanTitle}>Tech</p>
            <p className={style.techSpanp}>Languages: JavaScript, CSS, HTML</p>
            <p className={style.techSpanp}>Libraries/Frameworks: React, Node, Express, Puppeteer, ChartJS</p>
            <p className={style.techSpanp}>Databases: PostgreSql, Sequelize</p>
            <p className={style.techSpanp}>Testing: QUnit, Supertest, Jest, React Testing Library</p>
            <p className={style.techSpanp}>DevTools: VsCode, Git, Github, Heroku, Netlify, Postman, pgAdmin, Miro, Notion</p>
          </span>
        </div>
        <div className={style.divProjects}>
          <span className={style.titleSpan}>Projects</span>
          <span className={style.projectsSpan1}>
            <Project1></Project1>
            <Project2></Project2>
            <Project3></Project3>
            {/* <Project4></Project4> */}
          </span>
        </div>
      </div>
    </div >

  );
};
export default Home;

