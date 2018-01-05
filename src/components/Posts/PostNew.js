import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux' //отправляет новое местоположение в историю становясь текущим местом

import { createPost } from '../../actions';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={ `form-group ${ touched && error ? 'has-error' : '' }` }>
    <label>{ label }</label>
    <div>
      <input {...input} placeholder={ label } type={ type } className="form-control"/>
      { touched && (error && <span className="text-danger">{ error }</span>) }
    </div>
  </div>
);

class PostsNew extends Component {
  onSubmit(props) {
    const { createPost, changePage } = this.props;
    
    createPost(props);
    changePage();
  }
  
  render() {
    const { handleSubmit } = this.props;
    
    return(
      <div className="row">
        <h3 className="page-title">Создать новый пост</h3>
    
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Field name="title" type="text" component={ renderField } label="title"/>
          <Field name="categories" type="text" component={ renderField } label="categories"/>
          <Field name="content" type="text" component={ renderField } label="content"/>
          <div>
            <button type="submit" className='btn btn-success'>Отправить</button>
            <Link className="btn btn-warning" to="/posts">
              Отменить
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {};
  
  function validString(values, nameField) {
    if (!/^[а-яёА-ЯЁ\w\s]+$/i.test(values[nameField])) {
      errors[nameField] = 'Enter text or numbers';
    } else if (!values[nameField]) {
      errors[nameField] = 'Required'
    } else if (values[nameField].length < 5) {
      errors[nameField] = 'Must be 5 characters or less'
    }
  }
  
  validString(values, 'title');
  validString(values, 'categories');
  validString(values, 'content');
  return errors
};


export default reduxForm({
  form: 'PostNewForm',
  validate
})(connect( null, {
  createPost,
  changePage: () => push('/posts')
} )(PostsNew));


