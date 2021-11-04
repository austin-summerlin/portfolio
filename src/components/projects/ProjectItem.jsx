/* eslint-disable max-len */
import React from 'react';
import style from '../home/Home.css';

export const Project1 = () => (
  <section className={style.projectItem}>
    <p className={style.projectTitle}>Index</p>
    <a className={style.projectA} href="https://acp-index.netlify.app/">[Deployed]</a>
    <a className={style.projectA} href="https://github.com/index-alchemy">[Github]</a>
    <img className={style.projectImg} src="/projects/index.png" alt="index" />
    <p className={style.projectP}>Index is a collaborative project-brainstorming app. It emphasizes simplicity and usability, from the data structure through to the user interface, to create a reliable, flexible tool. Index allows students to suggest and contribute to project pitches together and then pairs students up into teams to work on those projects based on student preferences.</p>
  </section>
);

export const Project2 = () => (
  <section className={style.projectItem}>
    <p className={style.projectTitle}>TwinPeaks API</p>
    <a className={style.projectA} href="https://damp-cove-34137.herokuapp.com/">[Deployed]</a>
    <a className={style.projectA} href="https://github.com/TwinPeaksAPI">[Github]</a>
    <img className={style.projectImg} src="/projects/twinpeaks.png" alt="twinpeaks" />
    <p className={style.projectP}>TwinPeaks API allows users to access their favorite quotes and character information from one of the strangest shows in television history. Also accesible in Discord via our TwinPeaks bot. Built in a two week sprint focusing on the backend.</p>
  </section>
);

export const Project3 = () => (
  <section className={style.projectItem}>
    <p className={style.projectTitle}>BookBook</p>
    <a className={style.projectA} href="https://bookbookbook.netlify.app/setup">[Deployed]</a>
    <a className={style.projectA} href="https://github.com/bookbookbookclub">[Github]</a>
    <img className={style.projectImg} src="/projects/bookbook.png" alt="bookbook" />
    <p className={style.projectP}>Built during a two week sprint focusing on building a full stack application, BookBook makes choosing your next book club book easier than ever. Utilizing ranked choice voting and minimalist setup, no email no problem. Designed with simplicity in mind.</p>
  </section>
);

export const Project4 = () => (
  <section className={style.projectItem}>
    <p className={style.projectTitle}>Ivy`&#39;s House of Horror</p>
    <a className={style.projectA} href="https://gallant-tereshkova-df8eb1.netlify.app/">[Deployed]</a>
    <a className={style.projectA} href="https://github.com/austin-summerlin/full-stack-frontend">[Github-fe]</a>
    <a className={style.projectA} href="https://github.com/austin-summerlin/full-stack-backend">[Github-be]</a>
    <img className={style.projectImg} src="/projects/houseofhorror.png" alt="House of Horror" />
    <p className={style.projectP}>Ivy`&#39;s House of Horror is a horror themed movie database. I built an API in the backend using Node and postgreSQL and used React to display the results on the frontend. Made over the month of October as I watched as many movies as I could.</p>
  </section>
);


