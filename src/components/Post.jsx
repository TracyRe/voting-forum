import React from 'react';
import PropTypes from 'prop-types';
import Votes from './Votes';


function Post(props){
  return (
    <div style={{border: '1px solid #ccc'}}>

      <h1>{props.header}</h1>
      <p>{props.content}</p>

      <Votes/>
    </div>
  );
}

Post.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
};

export default Post;
