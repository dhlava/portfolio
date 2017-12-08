import React, { Component } from 'react';
import 'normalize.css';
import './App.css';

import Header from '../components/Header';
// import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Personal from '../components/Personal';
import Footer from '../components/Footer';
import Resume from '../resume/resume.json';

class App extends Component {
  render() {
    return (
      <div>
        <Header basics={Resume.basics} />
        <Personal basics={Resume.basics} />
        <Experience work={Resume.work} />
        <Skills skillGroup={Resume.skills} />
        <Education education={Resume.education} />
        {/* <Portfolio work={Resume.projects} /> */}
        <Footer basics={Resume.basics} />
      </div>
    );
  }
}

export default App;
