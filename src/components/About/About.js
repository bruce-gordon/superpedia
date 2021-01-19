import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section
      className='about-view'>
      <h1
        className='view-header'>About Superpedia
      </h1>
      <article className='about-container'>
        <h3 className='welcome'>Welcome to Superpedia!</h3>
        <p className='about-text'>
          This site is the perfect place for long-time comic lovers, new fans, or anyone looking for information on all the 2-D heroes and villains you can think of.  Search for any character by name, click the <b>i</b> icon to see more details, and add any character you like to your Saved Supers by clicking the <b>+</b> icon.  This app uses the ComicVine api, and you can visit ComicVine by clicking "more information" while looking at any character.  Enjoy!
        </p>
      </article>
    </section>
  )
}

export default About;
