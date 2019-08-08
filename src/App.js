import React, { Component } from 'react';
import Header from './components/Header/header';
import Content from './components/Content/content';
import Footer from './components/Footer/footer';

class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <Header />
        <Content title="yess-K" />
        <Footer />
      </div>
    );
  }
}

export default App;