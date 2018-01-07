import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import NotFound from './components/NotFound';
import Home from "./components/Home";
import About from "./components/About";
import PostIndex from "./components/Posts/PostIndex";
import PostNew from "./components/Posts/PostNew";
import PostsShow from "./components/Posts/PostsShow";


const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <a className={match ? 'active' : ''}>
      {match ? '> ' : ''}<Link to={to}>{label}</Link>
    </a>
  )}/>
);

const Routes = (props) => (
    <ConnectedRouter {...props}>
      <div className="container">

        <nav className='navbar navbar-light bg-light'>
          <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/> |{' '}
          <OldSchoolMenuLink to="/about-us" label="About"/> |{' '}
          <OldSchoolMenuLink to="/posts" label="Posts"/> |{' '}
          {/*<Link to="/">Home</Link> |{' '}
          <Link to="/about-us">About</Link> |{' '}
          <Link to="/posts">Posts</Link> |{' '}*/}
        </nav>
        
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about-us" component={ About } />
          <Route exact path="/posts" component={ PostsShow } />
          <Route path="/posts/new" component={ PostNew } />
          <Route path="/posts/:id(\w{1,24})" component={ PostIndex } />
          <Route path="*" exact={ true } component={ NotFound } />
        </Switch>
        
      </div>
    </ConnectedRouter>
);

export default Routes;
