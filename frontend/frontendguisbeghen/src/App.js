import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        Conteúdo da sua aplicação aqui...
      </main>
      <Footer />
    </div>
  );
}

export default App;
