// create a home component
import React from 'react';
import style from './Home.css';



const Home = () => {
  return (
    <div className={style.divHome}>
      <h1 className={style.h1Home}>[austin summerlin]</h1>
      <h2 className={style.h2Home}>[full stack developer]</h2>
    </div>
  );
};
export default Home;

