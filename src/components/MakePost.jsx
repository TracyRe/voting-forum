import React from 'react';
import Form from './Form';
import PropTypes from 'prop-types';

function MakePost(){

  function onNewPostCreation(props) {
    props.handleCreatingNewPost(props);
  }


  return (
    <div>
      <h1>Tell it like it is</h1>
      <Form onNewPostCreation={this.handleCreatingNewPost}/>
    </div>
  );
}

onNewPostCreation.propTypes = {
  handleCreatingNewPost: PropTypes.func
};

export default MakePost;
