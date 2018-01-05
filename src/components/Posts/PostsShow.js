import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import { Link } from 'react-router-dom';


class PostsShow extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  
  renderPosts() {
    const { posts } = this.props;
    
    return posts.map( ( post ) => {
      return (
        <tr key={ post.id }>
          <td>{ post.categories }</td>
          <td>
            <Link to={ 'posts/' + post.id }>
              <strong>{ post.title }</strong>
            </Link>
          </td>
        </tr>
      );
    });
  }
  
  render() {
    return (
      <div>
        <h3 className="page-title">Посты</h3>
        
        <div className="row">
          <Link to="/posts/new" className="btn btn-primary btn-sm">
            Добавить пост
          </Link>
        </div>
        
        <div className="row">
          <table className="table table-bordered table-striped">
            <thead>
            <tr>
              <th>Категории</th>
              <th>Название</th>
            </tr>
            </thead>
            
            <tbody>
              { this.renderPosts() }
            </tbody>
          
          </table>
        </div>
      </div>
    );
  }
}


function mapStateToProps( state ) {
  return {
    posts: state.posts.all
  };
}

export default connect( mapStateToProps, { fetchPosts } )( PostsShow );
