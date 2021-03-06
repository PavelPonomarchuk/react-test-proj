import React from 'react';
//import logo from './logo.svg';
import './Old/AppOld.css';
import olga from './olga.jpg';
import Greetings from "./Greetengs";
import SimpleForm from "./SimpleForm";

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

const AppOld = () => (
    <div className="App">
        <header className="App-header">
            <img src={olga} className="App-logo" alt="logo" />
            <p>
                Сайт писателя Ольги Пономарчук
            </p>
            <Greetings firstName="Иван" lastName="Иванов" />
            <a
                className="App-link"
                href="https://vk.com/id4380222"
                target="_blank"
                rel="noopener noreferrer"
            >
                Читать книгу "Император и Сын")))
            </a>
            <SimpleForm />
        </header>
    </div>
);

export default AppOld;
