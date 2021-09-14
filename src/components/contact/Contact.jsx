/* eslint-disable max-len */
import React from 'react';
import style from './Contact.css';

const Contact = () => {
  return (
    <div className={style.divContact}>
      <span className={style.contactSpan1}>
        Contact
      </span>
      <span className={style.contactSpan2}>
        <a href="https://www.linkedin.com/in/austin-summerlin">[linkedin]</a>
        <a href="https://www.github.com/austin-summerlin">[github]</a>
        <a href=" <a className='contactA' href='https://drive.google.com/file/d/1sFjtGWIyhesx61-uhb6z6T6M2N-Uaer4/view?usp=sharing">[resume]</a>
      </span>
      <form className={style.contactForm}>
        <input className={style.contactInput} type="text" placeholder="Name" />
        <input className={style.contactInput} type="email" placeholder="Email" />
        <textarea className={style.contactInput} type="text" placeholder="Message" />
        <button className={style.contactButton}>Submit</button>
      </form>
    </div>

  );
};

export default Contact;
