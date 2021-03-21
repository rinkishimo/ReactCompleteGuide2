import React, { Component } from 'react';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

import "./App.css";

const done = (<i className="fas fa-fw fa-check-circle green"></i>);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ol style={{ textAlign: 'left' }}>
            <li>{done} Add Routes to load
            "<a href="/users">Users</a>" and "<a href="/courses">Courses</a>" on different pages (by entering a URL, without Links)</li>
            <li>{done} Add a simple navigation with two links =&gt; One leading to "Users", one leading to "Courses"</li>
            <li>{done} Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
            <li>{done} Pass the course ID to the "Course" page and output it there</li>
            <li>{done} Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li>{done} Load the "Course" component as a nested component of "Courses"</li>
            <li>{done} Add a 404 error page and render it for any unknown routes</li>
            <li>{done} Redirect requests to <a href="/all-courses">/all-courses</a> to /courses (=&gt; Your "Courses" page)</li>
          </ol>
          <hr />
          <p>
            <NavLink to="/users" className="navlink">Users</NavLink>
            <NavLink to="/courses" className="navlink">Courses</NavLink>
          </p>
          <hr />
          <Switch>
            <Route path="/users" exact component={Users} />
            <Route path="/courses" component={Courses} />
            <Redirect from="/all-courses" to="/courses" />
            <Route path="/" render={() => (<p>404 Not Found</p>)} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
