import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/home'
import Announcment from './announcement/announcment-item'
import Blog from './blog/blog'
import newAnnouncment from './announcement/new-announcement'
import notFound from './pages/not-found'

import NavigationContainer from './navigation/NavigationContainer'
import Footer from './pages/footer'

export default class extends Component {
  constructor(props) {
      super(props)

  }

  render() {
      return (
          <div>
            <NavigationContainer />
            <Announcment />
            <Switch>
                <Route exact path ="/" component={Home} />
                <Route exact path ="/blog" component={Blog} />
                <Route exact path ="/new-announcement" component={newAnnouncment} />
                <Route path ="*" component={notFound} />
            </Switch>
            <span className="spacer"/>
            <Footer />
          </div>
      )
  }
}
