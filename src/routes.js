import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import NotFound from './components/NotFound';
import Home from "./components/Home";
import About from "./components/About";
import PostIndex from "./components/Posts/PostIndex";
import PostNew from "./components/Posts/PostNew";
import PostsShow from "./components/Posts/PostsShow";


const Routes = (props) => (
    <ConnectedRouter {...props}>
      <div className="container">

        <header>
          <Link to="/">Home</Link> |{' '}
          <Link to="/about-us">About</Link> |{' '}
          <Link to="/posts">Posts</Link> |{' '}
        </header>
        
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
