import React from 'react';
import style from './Projects.css';
import { Project1, Project2, Project3 } from '../projects/ProjectItem';

const Projects = () => {


  return (
    <div className={style.divProjects}>
      <span className={style.titleSpan}>[projects]</span>
      <span className={style.projectsSpan1}>
        <Project1></Project1>
        <Project2></Project2>
        <Project3></Project3>
      </span>
    </div>
  );
};

export default Projects;
