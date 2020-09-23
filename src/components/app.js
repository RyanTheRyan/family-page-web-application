import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/home'
import Announcment from './announcement/announcment-item'
import Blog from './blog/blog'
import familyContact from './family-contacts/family-contacts'

import NavigationContainer from './navigation/NavigationContainer'

export default class extends Component {
  constructor(props) {
      super(props)

      // Icons();
  }

  render() {
      return (
          <div>
            <NavigationContainer />
            {/* <Announcment /> */}
            <Switch>
                <Route exact path ="/" component={Home} />
                <Route exact path ="/blog" component={Blog} />
                <Route exact path ="/family-contacts" component={familyContact} />
            </Switch>
          </div>
      )
  }
}
