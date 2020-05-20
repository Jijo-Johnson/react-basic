import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:blog_id" component={Blog} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
