import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Info from '../Info/Info';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <Header />
        <main>
          <Switch>
            <Route exact path={'/'} component={Main} />
            <Route exact path={'/info'} component={Info} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);