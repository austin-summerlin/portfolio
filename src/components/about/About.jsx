/* eslint-disable max-len */
import React from 'react';
import style from './About.css';

const About = () => {
  return (
    <div className={style.divAbout}>
      <span className={style.aboutSpan1}>
        <img className={style.aboutImg} src="https://lh3.googleusercontent.com/pw/AM-JKLUvtTl1KQfDNidiOI72ubVFQBSQhmc_x3nWbT46VkErgEQyUrC8JXP5nWtUgOXitW3tfmmIHx_gRRUP2uiannuFcp4W2Gqg18fVnVmLc-aLZC_t1zvW-y7iO40PCffRCIdvDGfSPXe7SHIUHbJABb0T=w708-h944-no?authuser=0" alt="austin"></img>
        hello...
        <br></br>
        my name is austin summerlin, i am a full stack developer living in pdx.
        <br></br>
        i enjoy using sustainable architecture and minimalist design to create
        <br></br>
        simple and intuitive applications.
      </span>
      <a className={style.githubA} href="https://www.github.com/austin-summerlin">[github]</a>
      <br></br>
      <span className={style.aboutSpan2}>
        when not writing code, i enjoy gardening, photography, horror films and
        <br></br>
        spending time with my partner and our pets.
      </span>
    </div>
  );
};

export default About;
