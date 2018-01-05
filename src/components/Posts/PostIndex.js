import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { push } from "react-router-redux";

import { fetchPost, deletePost } from '../../actions';


class PostIndex extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id); //take id from location
  }
  
  onDeleteClick() {
    const { deletePost, changePage } = this.props;
  
    deletePost( this.props.match.params.id );
    changePage();
  }
  
  render() {
    const { post, error } = this.props;
    
    if(error) return <Redirect to='/posts'/>;
    if(!post) return <div>Загрузка...</div>;
    
    return (
      <div>
        <div className="row">
          <h3 className="page-title">{ post.title }</h3>
          <h6>Категории: { post.categories }</h6>
          
          <p>{ post.content }</p>
        </div>
        
        <div className="row">
          <Link className="btn btn-primary" to="/posts"> Назад... </Link>
          
          <button className="btn btn-danger pull-xs-right"
            onClick={ this.onDeleteClick.bind( this ) }>
            Удалить пост
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return {
    post: state.posts.post,
    error: state.posts.postError
  };
}

export default connect( mapStateToProps, {
  fetchPost,
  deletePost,
  changePage: () => push('/posts')
} )( PostIndex );